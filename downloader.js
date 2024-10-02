const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');
const p = 'C:/Users/INDRASISH/Downloads';
const dwFolder = path.join(p,'downloaded');

console.log("Started Downloading");
const downloadImage = async(url, imagePath)=>{
    const writer = fs.createWriteStream(imagePath);
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });
    response.data.pipe(writer);
    return new Promise((resolve, reject)=>{
        writer.on('finish', resolve);
        writer.on('error', reject);
    })
}

const fetchImageURLs = async (pageUrl)=>{
    try{
        const {data} = await axios.get(pageUrl);
        const $ = cheerio.load(data);

        const imageUrls = [];
        $('a').each((index,element)=>{
            let fileName = $(element).attr('href');
            fileName = path.basename(fileName);
            if (fileName.match(/\.(jpg|jpeg|png|gif)$/)) {
                if(fileName.toLowerCase().startsWith('p')){  
                    let imageUrl = fileName.startsWith('http') ? fileName : `${pageUrl}${fileName}`;
                    imageUrls.push(imageUrl);
                    console.log('Image Urls',fileName);
                }               
            }  
                     
        });
        
        return imageUrls; 
    }catch(err){console.log("Error fetching URL",err);}
}

const downloadImagesFromPage = async (pageUrl) => {
    const imageUrls = await fetchImageURLs(pageUrl);
    const filterList = imageUrls.filter(file => {
        const fileName = path.basename(file);
        return fileName.toLowerCase().startsWith('p');
    });

    if (filterList.length === 0) {
        console.log("No images found that start with 'p'.",imageUrls);
        return;
    }

    for (const imageUrl of filterList) {
        const fileName = path.join(dwFolder, path.basename(imageUrl));
        try {
            await downloadImage(imageUrl, fileName);
            console.log(`Downloaded ${imageUrl} as ${fileName}`);
        } catch (error) {
            console.error(`Failed to download ${imageUrl}: `, error);
        }
    }
};

const pageURL = "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/";
downloadImagesFromPage(pageURL);