import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {setProduct,addProduct} from "../action/index.js";
import Pagination from "./Pagination";
function Home() {
  const [pagination , setPagination]=useState(5)
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let count=0
  const array=state.setProduct
  console.log(state);
  const fetchData = async () => {
    const res = await axios
      .get("http://xapi.ngminds.com/api/getAllProducts")
      .then((response) => {
        console.log(response);
        dispatch(setProduct("setProduct", response.data.products));
      });
  };


  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  function renderProducts(){
             
    let array3=state.setProduct
    const limit=array3.length /3
    console.log(limit)
    let array=[]
    let count=0

    for(let a=0;a<limit;a++){
      array3=state.setProduct
          let array1=array3.slice(count,count+4)
          count=count+3 
          array.push(array1)  

    }
    const bgArray=["bg-success","bg-primary","bg-danger","bg-warning"]
   const array4= array.map(prev=>{
      return(
        <div class="row">
    {  prev.map((prev1,index)=>{
        return(
          <div class="col-xs-3">
              <div
                class={bgArray[index]}
                style={{ padding: "20px", borderRadius: "5px" }}
              >
                <img src="images/5.jpeg" width="100" height="200" />
                <br></br>
                <p>H2O Sb104 Stainless Steel Sports</p>
                <p>
                  <i class="fa fa-inr"></i>200
                </p>
                <a  class="btn btn-warning">
                 <button onClick={()=>{
                  dispatch(addProduct("addProduct",prev1))
                }} >Add to Cart</button> 
                </a>
              </div>
             
            </div> 
        )

      })}
        <h6>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h6>
        
      </div>
      )
      
    })

    return array4

  }
  
  // function renderProducts(){
  //  const array=state.setProduct
  //   let currentCount=0;
  //   let finalArray=[]
  //   let lengthOf=array.length
  //   for(let a=0;a<lengthOf;a++){ 
  //     console.log(array.length)
  //    let sample= array.slice(currentCount,4)
  //     currentCount=currentCount+1;
  //    let arrayeturn(
          // <div class="col-xs-3">
          //     <div
          //       class={bgArray[index]}
          //       style={{ padding: "20px", borderRadius: "5px" }}
          //     >
          //       <img src="images/5.jpeg" width="100" height="200" />
          //       <br></br>
          //       <p>H2O Sb104 Stainless Steel Sports</p>
          //       <p>
          //         <i class="fa fa-inr"></i>200
          //       </p>
          //       <a href="cart.html" class="btn btn-warning">
          //         Add to Cart
          //       </a>
          //     </div>
             
          //   </div>
  //       )
  //     })

  //     finalArray.push(array2)
  //   }

  //   return finalArray

  // }

  return (
    <div>
      <div class="container">
        <h1>
          <a href="/product">My Ecommerce Site</a>
          <span class="pull-right">
            <a href="cart.html">Cart (0)</a>
          </span>
        </h1>
        <hr />
        <div class="row">
          <div class="col-sm-12">
            <div style={{ margin: "25px 0" }}>
              <label for="" class="control-label">
                Sort by:
              </label>
              <select name="" id="">
                <option value="">Default</option>
                <option value="High to Low">High to Low</option>
                <option value="Low to High">Low to High</option>
              </select>
            </div>
          </div>
        </div>
        
          {/* {
            state.setProduct.map((prev,index)=>{
            console.log(index )
            if(count===3){
              count=0

            }
            else{
              count=count+1
            }
          coarraynsole.log(count)
              const bgArray=["bg-success","bg-primary","bg-danger","bg-warning"]

              if(count===3){}

             return( 
             <div class="col-xs-3">
              <div
                class={bgArray[count]}
                style={{ padding: "20px", borderRadius: "5px" }}
              >
                <img src="images/5.jpeg" width="100" height="200" />
                <br></br>
                <p>H2O Sb104 Stainless Steel Sports</p>
                <p>
                  <i class="fa fa-inr"></i>200
                </p>
                <a href="cart.html" class="btn btn-warning">
                  Add to Cart
                </a>
              </div>
             <hr/>
            </div>)
            })
          } */}
         
          {
        state.setProduct.length>1 && renderProducts()
          }
         
          
       
        
        <div class="row">
          <div class="col-sm-8">
            <Pagination            onPaginationChange={onPaginationChange}
  />
          </div>
          <div class="col-sm-4 text-right">
            <div style={{ margin: "25px 0" }}>
              <label for="" class="control-label">
                Items Per Page:
              </label>
              <select name="" id="">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
