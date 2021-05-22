import React, { useContext } from 'react'
import cocktailContext from '../../context/Context'
import CategoryItem from "./CategoryItem"

const Category = () => {
    const cateContext = useContext(cocktailContext)
    const {category} = cateContext
    return (
        <div className="category">
            <h1>Category</h1>
            {
                category.map(cate =>(
                    <CategoryItem cate={cate} />
                ))
            }
        </div>
    )
}

export default Category
