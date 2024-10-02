import React, { useState } from 'react';
import '../Select/select.css';
import ClickAwayListener from "react-click-away-listener";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const SelectCategory = ({list, title})=>{
    const [selectedCategory, setSelectedCategory] = useState(title);
    const [isOpened, setIsOpened] = useState(false);
    const [query, setQuery] = useState('');
    const [arrow, setArrow] = useState('up');

    const handleSelection = ()=>{
        setIsOpened(!isOpened);
        setArrow(arrow==='down'?'up':'down');
    };
    const handleSelectedCategory = (text)=>{
        setSelectedCategory(text);
        setIsOpened(!isOpened);
        setQuery('');
    }
    const handleSearch = (e) =>{
        setQuery(e.target.value);       
    }
    const serachResult = (array, query) =>{
        query = query.toLowerCase();
        return array.filter(item =>  item.toLowerCase().includes(query));
    }
    const searchList = serachResult(list, query);
    return(
        <ClickAwayListener onClickAway={()=> setIsOpened(false)}>
        <div className="dropCategory">            
            <span onClick={handleSelection} >{selectedCategory}</span>  
            {!isOpened?<ExpandMoreIcon/>:<ExpandLessIcon/>}
            {isOpened && <div className="selectDrop" sx={{minWidth: 120}}>
                <div className="searchField">
                    <input type="text" placeholder='Search Here' value={query} onChange={ handleSearch}/>                 
                </div>         
                <ul className='searchResult'>
                {searchList.map(item => <li key={item} value={item} onClick={()=> handleSelectedCategory(item)}>{item}</li>)}    
                </ul>
            </div>}            
        </div>
        </ClickAwayListener>
    );    
}
export default SelectCategory;