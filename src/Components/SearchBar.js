import React,{useState} from "react";

const SearchBar = ({onTermSubmit})=>{
    const [searchTerm, setSearchterm] = useState('Enter Text to search'); 
    
    const onSearchSubmit = (event)=>{
        event.preventDefault();
        onTermSubmit(searchTerm);
    }
  
  return (<div className ="ui segmnent search-bar">
            <form className="ui form" onSubmit={onSearchSubmit}>
             <div className="field">
                <label htmlFor="videoSearch"> Video Search</label>
                <input id ="videoSearch" type="text" 
                value ={searchTerm} onChange={(event)=>{setSearchterm(event.target.value);}}></input>
             </div>    
            </form>            
        </div>
        );  
};



export default SearchBar;