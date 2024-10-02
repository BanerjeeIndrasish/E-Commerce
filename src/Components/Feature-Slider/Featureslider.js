import React, { useEffect } from 'react';
import './Featureslider.css';
import Slider from 'react-slick';
import Categorycard from '../Header/Categorycard';
import * as Images from "../../assets/images/Featured-Category/index";
import $ from 'jquery';

export default function Featureslider() {
    const allItemTypes = Object.values(Images);
    const itemCategories = [
        { image: allItemTypes[0], label: 'Pan Corner', color: '#f4f6fa'},
        { image: allItemTypes[1], label: 'Dairy & Bread', color: '#ecffec'},
        { image: allItemTypes[2], label: 'Fruits & Vegies', color: '#feefea'},
        { image: allItemTypes[3], label: 'Drinks & Juices', color: '#fff3eb'},
        { image: allItemTypes[4], label: 'Meat & Fleshes', color: '#f2fce4'},
        { image: allItemTypes[5], label: 'Kids store', color: '#fff3ff'},
        { image: allItemTypes[6], label: 'Medical Wellness', color: '#f4f6fa'},
        { image: allItemTypes[7], label: 'Beauty Products', color: '#ecffec'},
        { image: allItemTypes[8], label: 'Accessories', color: '#feefea'},
        { image: allItemTypes[9], label: 'Home-Appliances', color: '#fff3eb'},
        { image: allItemTypes[10], label: 'Kitchen', color: '#fff3ff'},
        { image: allItemTypes[12], label: 'Fashion', color: '#f2fce4'},
        { image: allItemTypes[13], label: 'Electronics', color: '#ecffec'},
    ];

    function countSlides(){
        let w = $('body').width();
        console.log("Width Is",w);
        return w>576?10:2.5;
    }
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: countSlides(),
        slidesToScroll: 3,
        fade: false,
        arrows: true,
    };
    return (
        <>
            <div className="featureSelection">
                <div className="container-fluid">
                    <h2 className='title'>Feature Categories</h2>
                    <Slider {...settings} className='feature-slider'>
                    {itemCategories.map((feature, index) => <div key={index} className="feature-card">
                        <Categorycard image={feature.image} label={feature.label} color={feature.color}/>
                    </div>)}
                    </Slider>
                </div>
            </div>
        </>
    )
}
