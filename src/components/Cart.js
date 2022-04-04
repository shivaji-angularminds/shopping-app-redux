import React from 'react'

function Cart() {
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
                    <div class="panel-heading">MY CART (1)
                    </div>
                    <div class="panel-body">
                        <form>
                            <div class="row">
                                <div class="col-md-3"> <img src="images/5.jpeg" width="100px" height="200px"/></div>
                                <div class="col-md-3"> H2O Sb104 Stainless Steel Sports
                                    <br /><i class="fa fa-inr"></i>200
                                </div>
                                <div class="col-md-3"> quantity
                                    <br />
                                    <button ng-click="decrement()" class='qtyminus' ng-disabled="qty<=0">-</button>
                                    <input ng-model="qty" type='text' name='quantity' class='qty' size="5px"
                                        value="2" />
                                    <button ng-click="increment()">+</button>
                                </div>
                                <div class="col-md-3"> <a href="cart.html" class="btn btn-warning">remove</a></div>
                            </div>
                        </form>
                        <hr/>
                        <div class="row">
                            <div class="col-md-9">
                                <label class="pull-right">Amount Payable
                                </label>
                            </div>
                            <div class="col-md-3 ">
                                400
                            </div>
                        </div>
                    </div>
                    <div class="panel-footer">
                        <a href="index.html" class="btn btn-success">Continue Shopping</a>
                        <a href="placeOrder.html" class="pull-right btn btn-danger">Place Order</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cart