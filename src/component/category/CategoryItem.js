import React, { useContext } from 'react'
import cocktailContext from '../../context/Context'

const CategoryItem = (props) => {
    const cateContext = useContext(cocktailContext)
    const {categoryItems} = cateContext
    const {strCategory} = props.cate
    return (
        <div className="cateitem">
            <a onClick={()=>categoryItems(strCategory)} href="#">{strCategory}</a>
        </div>
    )
}

export default CategoryItem
