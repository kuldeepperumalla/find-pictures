import './SearchBar.css'
import { useState } from "react";

function SearchBar({onSubmit}){
    const [term, setState] = useState('')
    const handleClick = (e) => {
        e.preventDefault();
        // const input = document.querySelector('input')
        onSubmit(term)
    }

    const handleChange = (e) =>{
        setState(e.target.value);
    }

    return <div className='search-bar'>
        <form onSubmit={handleClick} >
            <label>Enter Search Term</label>
        <input value={term} onChange={handleChange}/>
        </form>
    </div>
}

export default SearchBar;