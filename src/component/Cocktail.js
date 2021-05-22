import React, { useContext } from 'react'
import cocktailContext from '../context/Context'

const Cocktail = (props) => {
    const {strDrink,strDrinkThumb,idDrink} = props.cock
    const cockContex= useContext(cocktailContext)
    const {getDetails}=cockContex
    

    return (
        <div className="contin">
            <img src={strDrinkThumb} alt=""/>
            <h4>{strDrink}</h4>
            <a className="detLink" onClick={()=>getDetails(idDrink)} href="#">Get Details</a>
            
        </div>
    )
}


export default Cocktail
