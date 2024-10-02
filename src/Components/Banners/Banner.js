import React, { useEffect, useState } from 'react';
import './Banner.css';
import Categorycard from '../Header/Categorycard';
import * as images from '../../assets/images/Banner/index'

export default function Banner() {
    const allBannerTypes = Object.values(images);
    const [bannerIndex, setBannerIndex] = useState(null);
    const [randomArray, setRandomArray] = useState([]);
    const bannerCategories = [
        { image: allBannerTypes[0], label: 'Pan Corner' },
        { image: allBannerTypes[1], label: 'Dairy, Bread & Eggs' },
        { image: allBannerTypes[2], label: 'Fruits & Vegetables' },
        { image: allBannerTypes[3], label: 'Cool Drinks & Juices' },
        { image: allBannerTypes[4], label: 'Chicken, Fish & Fleshes' },
        { image: allBannerTypes[5], label: 'Kids store' },
        { image: allBannerTypes[6], label: 'Medical Wellness' },
        { image: allBannerTypes[7], label: 'Beauty and cosmetics' },
        { image: allBannerTypes[8], label: 'Accessories' },
        { image: allBannerTypes[9], label: 'Home Appliances' },
        { image: allBannerTypes[10], label: 'Kitchen' },
        { image: allBannerTypes[11], label: 'Clothing & Fashion' },
    ];

    const ARR = ()=>{
        let shuffledArray = [...bannerCategories].sort(()=> 0.5 - Math.random()).slice(0, 4);
        setRandomArray(shuffledArray);
    }

    useEffect(()=>{
        ARR();
        const timeInterval = setInterval(ARR,5000);
        return ()=> clearInterval(timeInterval); 
    },[])
    return (
        <>
            <div className="container-fluid">
                <h2 className='title'>Mega-Offer On Categories</h2>
                <div className="banner-container">
                    {randomArray.length>0 && randomArray.map((banner, index) => <div key={index} className={bannerIndex===index?'banner':''} style={{textAlign:'center'}}
                    onMouseEnter={()=> setBannerIndex(index)} onMouseLeave={()=> setBannerIndex(null)}>
                        <Categorycard image={banner.image} width='350px' height='200px'/>
                    </div>
                    )}
                </div>
            </div>
        </>
    );
}