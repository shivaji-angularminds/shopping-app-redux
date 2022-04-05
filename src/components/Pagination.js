import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {paginationChange,setProduct} from "../action"


const Pagination = () => {
  const [pagination, setPagination] = useState(5);
  const dispatch=useDispatch()

    const state = useSelector((state) => state);
    const total=state.setProduct.rawData.length
 
     let showPerPage=state.itemsPerPage

  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButtons] = useState(
    Math.ceil(total / showPerPage)
  );


  // const onPaginationChange = (start, end) => {
  //   setPagination({ start: start, end: end });
  // };


  useEffect(()=>{
      setNumberOfButtons(Math.ceil(total / showPerPage))
  },[total,showPerPage])


  useEffect(() => {
    const value = showPerPage * counter;
    
    dispatch(setProduct("filter",{start:value - showPerPage, end:value}));
  }, [counter,showPerPage]);

  


  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="!#"
              onClick={() => onButtonClick("prev")}
            >
              Previous
            </a>
          </li>

          {new Array(numberOfButtons).fill("").map((el, index) => (
            <li className={`page-item ${index + 1 === counter ? "active" : null}`}>
              <button
                className="page-link"
              
                onClick={() => setCounter(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className="page-link"
             
              onClick={() => onButtonClick("next")}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;