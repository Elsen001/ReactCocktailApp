import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './component/About'
import Category from './component/category/Category'
import CocktailDetails from './component/CocktailDetails'
import Cocktails from './component/Cocktails'
import Navbar from './component/Navbar'
import Search from './component/Search'
import SearchCocktails from './component/SearchCocktails'
import State from './context/State'


const App = () => {
    return (
        <State>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" render={props => (
                        <>
                            <Search />
                            <Category/>
                            <CocktailDetails/>
                            <SearchCocktails />
                            <Cocktails />
                        </>
                    )} />
                    <Route path="/about" component={About} />

                </Switch>
            </BrowserRouter>
        </State>
    )
}

export default App
