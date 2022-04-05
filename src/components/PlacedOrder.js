import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"

function PlacedOrder() {
  const [total,setTotal]=useState({totalCost:0,qty:0})
    const state = useSelector((state) => state.addProduct);

  const [userdata, setUserData] = useState({
    personName: "",
    deliveryAddress: "",
    productOrdered:state
  });
const navigate=useNavigate()


  useEffect(()=>{
    let add=0
    let qty=0
  let  total1=state.map((num)=>{
      console.log(parseInt(num.price))
      console.log( parseInt(num.price));
        add= add    +(parseInt(num.price )*parseInt(num.qty ))
        qty=qty+(parseInt(num.qty))
        return add
})

setTotal({...total,totalCost:add,qty:qty})
},[state])

  function handleChange(event){

    const name=event.target.name
    const value=event.target.value

    setUserData({...userdata,[name]:value})


  }
console.log(userdata)

  function renderProduct() {
    return state.map((prev) => {
      return (
        <tr key={prev._id} >
          <td>{prev.name} </td>
          <td>{prev.qty}</td>
          <td>
            <i className="fa fa-inr"></i>
            {prev.price}
          </td>
        </tr>
      );
    });
  }

  console.log(state);
  return (
    <div className="container">
      <div className="row">
        <h1>
          <a href="/product">My Ecommerce Site</a>

          <span className="pull-right">
            <a href="cart.html">Cart ({state.length})</a>
          </span>
        </h1>
        <hr />
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">Place Order</div>
            <div className="panel-body">
              <form className="form-horizontal" role="form">
                <table className="table table-striped">
                  <thead className="table-head">
                    <tr>
                      <td>Product Name</td>
                      <td> Quntity</td>
                      <td> SubTotal</td>
                    </tr>
                  </thead>
                  <tbody>
                    {renderProduct()}

                    <tr>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td>
                        <strong>
                          {" "}
                          {total.qty}
                        </strong>
                      </td>
                      <td>
                        <strong>
                          <i className="fa fa-inr"></i>
                          {total.totalCost}{" "}
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />

                <br />
                <div className="form-group">
                  <label for="inputName3" className="col-sm-2 control-label">
                    Enter Order Details
                  </label>
                </div>
                <div className="form-group">
                  <label for="inputName3" className="col-sm-2 control-label">
                    Name
                  </label>
                  <div className="col-sm-6">
                    <input
                      className="form-control"
                      id="inputName3"
                      placeholder="Name"
                      name="personName"
                      onChange={handleChange}
                        value={userdata.personName}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputEmail3" className="col-sm-2 control-label">
                    Address
                  </label>
                  <div className="col-sm-6">
                    <textarea
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Deliver Address"
                      name="deliveryAddress"
                      onChange={handleChange}
                      value={userdata.deliveryAddress}
                    ></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label"></label>
                  <div className="col-sm-6">
                    <button onClick={()=>{
                    navigate("/orderplace")
                    }} className="btn btn-warning" disabled={userdata.personName && userdata.deliveryAddress ? false:true} >
                      Confirm Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacedOrder;
