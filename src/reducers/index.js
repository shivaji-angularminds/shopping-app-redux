import setProduct from "./setProductReducer"
import {combineReducers}  from "redux"
import  addProduct  from "./addProduct"

const allReducer=combineReducers({
    setProduct:setProduct,
    addProduct:addProduct
})

export default allReducer