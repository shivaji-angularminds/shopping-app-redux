import React from 'react'
import {useNavigate}  from "react-router-dom"

function OrderPlaced() {
    let navigate=useNavigate()
  return (
    <div>
        <div className="container">
        <div className="row">
            <h1>
                <a href="/product">My Ecommerce Site</a>

                <span className="pull-right">
                    <a href="cart.html">Cart (0)</a>
                </span>
            </h1>
            <hr/>
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">Order Placed</div>
                    <div className="panel-body text-center">
                        <h1 className="text-success">
                            <i className="fa fa-check-circle fa-2x"></i>
                        </h1>
                        <h2 style={{lineHeight: "2"}}>Thank you for your order!</h2>
                        <br/>
                        <button onClick={()=>{
                            navigate("/home")
                        }} className="btn btn-primary">
                            <i className="fa fa-angle-double-left"></i> Continue Shopping
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