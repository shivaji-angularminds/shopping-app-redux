import React from 'react'
import {useNavigate}  from "react-router-dom"

function OrderPlaced() {
    let navigate=useNavigate()
  return (
    <div>
        <div class="container">
        <div class="row">
            <h1>
                <a href="/product">My Ecommerce Site</a>

                <span class="pull-right">
                    <a href="cart.html">Cart (0)</a>
                </span>
            </h1>
            <hr/>
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Order Placed</div>
                    <div class="panel-body text-center">
                        <h1 class="text-success">
                            <i class="fa fa-check-circle fa-2x"></i>
                        </h1>
                        <h2 style={{lineHeight: "2"}}>Thank you for your order!</h2>
                        <br/>
                        <button onClick={()=>{
                            navigate("/home")
                        }} class="btn btn-primary">
                            <i class="fa fa-angle-double-left"></i> Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
   
  )
}

export default OrderPlaced