import React, { useContext } from 'react'
import cocktailContext from '../context/Context'

const CocktailDetails = () => {
    const cockConte = useContext(cocktailContext)
    const { cockDetails,clear } = cockConte

    return (

        <div className="details">

            <div className="row">

                <div className="col-md-8">
                    {cockDetails.strDrinkThumb &&
                         
                        <div className="card">
                            <img className="card-img-top" src={cockDetails.strDrinkThumb} alt="" />
                            <div className="card-body">
                                <h3 className="card-title">{cockDetails.strDrink}</h3>
                                <p className="card-text">{cockDetails.strInstructions}</p>
                            </div>
                        </div>
                    }
                </div>

                {cockDetails.strDrink && 
                <div className="col-md-4">
                    
                    <h4>{cockDetails.strAlcoholic}</h4>
                    <h2>{cockDetails.strIngredient2}</h2>
                    <p>{cockDetails.strInstructionsDE}</p>
                    <i onClick={()=>clear()} className="fas fa-times"></i>
                    <button className="btn btn-danger btn-sm" onClick={()=>clear()} >close</button>


                </div>
                }
            </div>


        </div>
    )
}

export default CocktailDetails
