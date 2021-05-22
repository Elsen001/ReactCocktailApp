import React, { useContext } from 'react'
import Cocktail from "./Cocktail"
import cocktailContext from '../context/Context'

const Cocktails = () => {

    const cocktailCont = useContext(cocktailContext)
    const {cocktails}= cocktailCont

    

    return (
        <div className="container-inner">
            {
                cocktails.map(cock =>(
                    <Cocktail key={cock.id} cock={cock}/>
                ))
                
            }
            
        </div>
    )
}

export default Cocktails
