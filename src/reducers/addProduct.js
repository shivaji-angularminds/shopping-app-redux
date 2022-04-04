const addProduct = (state = [], action) => {
  switch (action.type) {
    case "addProduct": {
      let flag = true;
      if (state.length > 0) {
        state.map((prev, index) => {
          if (action.payload._id === prev._id) {
            flag = false;
            let obj = state[index];
            obj.qty = obj.qty + 1;
            state[index] = obj;
          }
        });
      }

      if (flag) {
        let obj = action.payload;
        obj.qty = 1;

        return [...state, obj];
      } else {
        return [...state];
      }
    }
    case "increaseQty": {
      console.log(action.payload);
      let array = state;
      let obj = array[action.payload];
      obj.qty = obj.qty + 1;
      array[action.payload] = obj;
      state = array;

      return [...state];
    }
    case "decreaseQty": {
      if (state[action.payload].qty > 1) {
        let array = state;
        let obj = array[action.payload];
        obj.qty = obj.qty - 1;
        array[action.payload] = obj;
        state = array;
        return [...state];
      } else {
        return [...state];
      }
    }

    case "removeItem": {
      console.log(action.payload);
      let array = state.filter((prev) => {
        return prev._id !== action.payload._id;
      });
      console.log(array);
      state = array;
      return [...state];
    }

    default:
      return state;
  }
};

export default addProduct;
