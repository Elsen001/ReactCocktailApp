import React, { useContext } from 'react'
import cocktailContext from '../context/Context'

const SearchCocktail = (props) => {
    const { strDrink, strDrinkThumb,idDrink } = props.cocktail
    const cockConte = useContext(cocktailContext)
    const { getDetails } = cockConte

    return (
        <div className="contin">
            <img src={strDrinkThumb} alt="" />
            <h4>{strDrink}</h4>
            <a onClick={()=>getDetails(idDrink)} href="#">Get Details</a>
        </div>
    )
}

export default SearchCocktail
