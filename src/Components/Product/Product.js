import React from 'react';
import './Product.css'
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';

export default function Product({ item }) {
    return (
        <div>
            <div className='product'>
                <Link>
                    <div className="imageWrapper">
                        <img src={item.image} alt="/" />
                    </div>
                </Link>
                
                <div className="info">
                    <span className='d-block catName'>Snacks</span>
                    <h4 className='title'>{item.name}</h4>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly className='rating'/>
                    <span className='brand d-block'>By <a className='text-g'>XYZ</a></span>

                    <div className='d-flex align-items-center mt-2'>
                        <div className='d-flex align-items-center'>
                            <span className='price text-g font-weight-bold'>{item.price.current}</span> <span className='old-price'>{item.price.old}</span>    
                        </div>

                        <Button><ShoppingCartOutlinedIcon/>Add</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
