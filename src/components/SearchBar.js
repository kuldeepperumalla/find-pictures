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

    return <div>
        <form onSubmit={handleClick} >
        <input value={term} onChange={handleChange}/>
        </form>
    </div>
}

export default SearchBar;