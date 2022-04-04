export const setProduct = (type, payload,sort) => {
  return {
    type: type,
    payload: payload,
    sort:sort 
  };
};

export const addProduct = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

export const itemsPerPage = (payload) => {
  return {
    type: "itemsPerPage",
    payload: payload,
  };
};

export const paginationChange = (payload) => {
  return {
    type: "paginationChange",
    payload: payload,
  };
};
