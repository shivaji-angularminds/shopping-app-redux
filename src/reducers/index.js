import setProduct from "./setProductReducer"
import {combineReducers}  from "redux"
import  addProduct  from "./addProduct"
import itemsPerPage from "./itemsPerPage"
import paginationChange from "./paginationChnage"

const allReducer=combineReducers({
    setProduct:setProduct,
    addProduct:addProduct,
    itemsPerPage:itemsPerPage,
    paginationChange:paginationChange
})

export default allReducer