
export const increment = (data,id) => {
    return {
      type: "INCREMENT",
      payload: data,
      ID:id
    };
  };
  export const decrement = (key,id) => {
    return {
      type: "DECREMENT",
      key: key,
      ID:id
    };
  };
