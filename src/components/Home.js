import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { setProduct, addProduct,itemsPerPage } from "../action/index.js";
import Pagination from "./Pagination";
function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [typeOfSort,setTypeOfSort]=useState({typeOfSort:"default"})

  console.log(state)

  const fetchData = async () => {
    const res = await axios
      .get("http://xapi.ngminds.com/api/getAllProducts")
      .then((response) => {
        dispatch(setProduct("setProduct", response.data.products));
      });
  };

 
  useEffect(() => {
    fetchData();
    dispatch(setProduct("filter",state.paginationChange));
  }, []);

  useEffect(()=>{
    dispatch(setProduct("filter",state.paginationChange,typeOfSort));
  },[state.setProduct.rawData])

  function renderProducts() {
    let array3 = state.setProduct.filterData
    const limit = array3.length / 3;
    let array = [];
    let count = 0;

    for (let a = 0; a < limit; a++) {
      let array1 = array3.slice(count, count + 4);
      count = count + 4;
      array.push(array1);
    }
    const bgArray = ["bg-success", "bg-primary", "bg-danger", "bg-warning"];

    const array4 = array.map((prev) => {
      return (
        <div>
        <div className="row"  >
          {prev.map((prev1, index) => {
            return (
              <div key={prev._id} className="col-xs-3">
                <div
                  className={bgArray[index]}
                  style={{ padding: "20px", borderRadius: "5px" }}
                >
                  <img
                    src="data:image/jpeg;base64,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"
                    width="100"
                    height="200"
                  />
                  <br></br>
                  <p>{prev1.name}</p>
                  <p>
                    <i className="fa fa-inr"></i>{prev1.price}
                  </p>

                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      dispatch(addProduct("addProduct", prev1));
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
          
        </div>
        <h6>
            -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </h6>
        </div>
      );

    });


    return array4;
  }

  return (
    <div>
      <div className="container">
        <h1>
          <a href="/product">My Ecommerce Site</a>
          <span className="pull-right">
            <Link to="/cart">Cart ({state.addProduct.length})</Link>
          </span>
        </h1>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <div style={{ margin: "25px 0" }}>
              <label for="" className="control-label">
                Sort by:
              </label>
              <select name="" id="" onChange={(event)=>{
                 setTypeOfSort({typeOfSort:event.target.value})
                 dispatch(setProduct(event.target.value,"fhe"))
              }} >
                <option value="">Default</option>
                <option value="sortHighToLow"   >High to Low</option>
                <option value="sortLowToHigh">Low to High</option>
              </select>
            </div>
          </div>
        </div>

        {state.setProduct.rawData.length > 1 && renderProducts()}

        <div className="row">
          <div className="col-sm-8">
            <Pagination />
          </div>
          <div className="col-sm-4 text-right">
            <div style={{ margin: "25px 0" }}>
              <label for="" className="control-label">
                Items Per Page:
              </label>
              <select name="" id=""  onClick={(event)=>{
                dispatch(itemsPerPage(event.target.value))

              }} >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={30}>50</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
