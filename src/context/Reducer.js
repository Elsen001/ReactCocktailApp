const cocktailReducer = (state,action)=>{

    switch(action.type){
       case "GET_COCKTAILS":
           return {
               ...state,
               cocktails:action.payload
           }
        case "SEARCH_COCKTAIL":
            return {
                ...state,
                cocktails:[],
                cocktail:action.payload 
            }
        case "GET_DETAILS":
            return {
                ...state,
                cockDetails:action.payload
            } 
         case "CLEAR":
             return {
                 ...state,
                 cockDetails:[]
                 
             }
         case "GET_CATEGORY":
             return{
                 ...state,
                 category:action.payload
             }    
         case "CATEGORY_ITEM":
             return{
                 ...state,
                 cocktail:[],
                 cocktails:action.payload
             }       
        
        default: 
            return state    
    }

}

export default cocktailReducer;