import React, { useEffect, useState } from 'react';
import './Home.css';
import Slider from './Homeslider';
import Featureslider from '../Feature-Slider/Featureslider';
import Banner from '../Banners/Banner';
import * as Images from '../../assets/images/downloaded/index';
import Product from '../Product/Product'

export default function Home() {
  const productImages = Object.values(Images);
  const productList = [
    { image: productImages[0], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[1], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[2], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[3], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[4], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[5], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[6], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[7], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[8], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[9], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[10], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[11], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[12], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[13], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[14], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[15], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[16], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[17], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[18], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[19], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[20], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[21], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[22], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[23], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[24], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[25], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[26], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[27], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[28], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[29], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[30], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[31], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[32], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[33], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[34], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[35], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } },
    { image: productImages[36], name: 'ABC-DEF', price: { old: '$1', current: '$0.8' } }   
  ]
  const productCategory = [
    'All',
    'Dairy & Bread',
    'Fruits & Vegies',
    'Fashion',
    'Grocery'
  ]
  const [hoverIndex, setHoverIndex] = useState(null);
  const showImage = (arr, index) => {
    let interval = null;
    if (hoverIndex === index) {
      interval = setTimeout(() => {
        return arr[0] ? arr[1] : arr[0];
      }, 500)
    }
    else {
      clearTimeout(interval);
      return arr[0];
    }
  }
  return (
    <>
      <Slider />
      <Featureslider />
      <Banner />
      <section className="homeProducts">
        <div className="container-fluid">
          <div className='d-flex align-items-center'>
            <h2 className='title mb-0 mt-0'>Home Products</h2>
            <ul className='list list-inline filterTab'>
              {productCategory.map(cat => <li className='list-inline-item' key={cat}>
                <a className='cursor category'>{cat}</a>
              </li>)}
            </ul>
          </div>
          
          <div className="products-grid">
            {productList.map((item,index)=> <div className='product-container' key={index}> <Product item={item}/> </div>)}           
          </div>
        </div>
      </section>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
}


