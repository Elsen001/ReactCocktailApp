import React, { useContext, useState } from 'react'
import cocktailContext from '../context/Context'

const Search = () => {
    const {getSearch}=useContext(cocktailContext)
    const [keyword,setkeyword]=useState("")


    const onChange=(e)=>{
          setkeyword(e.target.value)
     }


    const onSubmit=(e)=>{
         if(keyword===""){
             alert("Keyword enter...")
         }else{
         getSearch(keyword)
             

         }

        e.preventDefault()
    }

    return (
        <div className="search">
            
            <form onSubmit={onSubmit}  action="">
                <input value={keyword} onChange={onChange} type="text" placeholder="Search..." />
            </form>
        </div>
    )
}

export default Search
