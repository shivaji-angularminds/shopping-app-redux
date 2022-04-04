import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector}  from "react-redux"
import { Link ,useNavigate} from 'react-router-dom'
import { addProduct } from '../action'
function Cart() {
const [total,setTotal]=useState(0)
    const state=useSelector(state=>state)
    const dispatch=useDispatch()
    const state1=useSelector(state=>state.addProduct)
    const navigate=useNavigate()


    useEffect(()=>{
        let add=0
      let  total1=state1.map((num)=>{
          console.log(parseInt(num.price))
          console.log( parseInt(num.price));
            add= add    +(parseInt(num.price )*parseInt(num.qty ))
            return add
    })
    
setTotal(add)
},[state1])

console.log(total)
    function renderProducts(){
        return(
            state.addProduct.map((prev,index)=>{
                return(
                    <form>
                    <div class="row">
                        <div class="col-md-3"> <img src="images/5.jpeg" width="100px" height="200px"/></div>
                        <div class="col-md-3"> {prev.name}
                            <br /><i class="fa fa-inr"></i>{prev.price}
                        </div>
                        <div class="col-md-3"> quantity{prev.qty}
                            <br />
                            <button onClick={(e)=>{                                e.preventDefault()

                                                                dispatch(addProduct("decreaseQty",index))

                            }} class='qtyminus' ng-disabled="qty<=0">-</button>
                            <input ng-model="qty" type='text' name='quantity' class='qty' size="5px"
                                value={prev.qty} />
                            <button onClick={(e)=>{
                                e.preventDefault()
                                dispatch(addProduct("increaseQty",index))
                            }}>+</button>
                        </div>
                        <div class="col-md-3"> <button  onClick={(e)=>{
                            e.preventDefault()
                            dispatch(addProduct("removeItem",prev))
                        }} class="btn btn-warning">remove</button></div>
                    </div>
                </form>
                )
            })
        )
    }



  return (
    <div>
         <div class="container">
        <div class="row">
            <h1>
                <a href="/product">My Ecommerce Site</a>
                
                <span class="pull-right">
                    <a href="cart.html">Cart ({state.addProduct.length})</a>
                </span>
            </h1>
            <hr/>
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">MY CART ({state.addProduct.length})
                    </div>
                    <div class="panel-body">
                       {
                           state.addProduct.length>0 ? renderProducts():<h1>Your Cart is Empty</h1>
                       }
                        <hr/>
                        <div class="row">
                            <div class="col-md-9">
                                <label class="pull-right">Amount Payable
                                </label>
                            </div>
                            <div class="col-md-3 ">
                            {total}
                            </div>
                        </div>
                    </div>
                    <div class="panel-footer">
                        <Link to="/home" class="btn btn-success">Continue Shopping</Link>
                        <button onClick={()=>{
                            navigate(`/placedorder`)
                        }}  class="pull-right btn btn-danger " disabled={total>=500 ? false:true}  >Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cart