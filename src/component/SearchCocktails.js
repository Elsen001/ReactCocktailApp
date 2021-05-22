import React,{useContext} from 'react'
import cocktailContext from '../context/Context'
import SearchCocktail from './SearchCocktail'


const SearchCocktails = () => {

    const cocktailCon = useContext(cocktailContext)
    const {cocktail}= cocktailCon
    return (
        <div className="container-inner">
            {
                cocktail.map(cocktail=>(
                    <SearchCocktail key={cocktail.id} cocktail={cocktail}/>
                ))
            }
        </div>
    )
}

export default SearchCocktails
