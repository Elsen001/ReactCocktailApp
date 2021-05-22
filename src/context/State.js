import React,{ useEffect, useReducer } from "react"
import cocktailReducer from "./Reducer"
import cocktailContext from "./Context"

const State = (props) => {
    const InitialState = {
        cocktails: [],
        cocktail: [],
        cockDetails:{},
        category:[]
    }


    const [state, dispatch] = useReducer(cocktailReducer, InitialState)
    

    
    const getCocktail = () => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
            .then(data => {
                return data.json()
            }).then(res => {
                dispatch({
                    type: "GET_COCKTAILS",
                    payload: res.drinks
                })
            })
           
    }


    const getCategory = () =>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
        .then(data =>{
            return data.json()
        }).then(res =>{
            console.log(res)
            dispatch({
                type:"GET_CATEGORY",
                payload:res.drinks
            })
        })
    }



    const getDetails = (id)=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(data =>{
            return data.json()
        }).then(res =>{
           dispatch({
               type:"GET_DETAILS",
               payload:res.drinks[0]
           })
        })
    }


    
    
    

    const getSearch=(keyword)=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(data=>{
            console.log(data)
            return data.json()
        }).then(res =>{
            dispatch({
                type:"SEARCH_COCKTAIL",
                payload:res.drinks
                
            })
        })
    }

    const categoryItems = (name)=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`)
        .then(data =>{
            return data.json()
        }).then(res =>{
               dispatch({
                   type:"CATEGORY_ITEM",
                   payload:res.drinks
               })
        })
    }

    const clear= ()=>{
        dispatch({
            type:"CLEAR"
        })
    }
    

    useEffect(()=>{
        getCocktail()
        getCategory()
    },[])


    
  
    return <cocktailContext.Provider
        value={{
            cocktails: state.cocktails,
            cocktail:state.cocktail,
            cockDetails:state.cockDetails,
            category:state.category,
            getCocktail,
            getSearch,
            getDetails,
            clear,
            getCategory,
            categoryItems
           
           
            
            
            

        }}>
            {props.children}

    </cocktailContext.Provider>

}

export default State