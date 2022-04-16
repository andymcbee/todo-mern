//import data from "../../data.json";
import * as api from "../../api/index";

export const getLists = () => {
  return async (dispatch) => {
    try {
      const data = await api.fetchLists();
      dispatch({
        type: "FETCH_ALL",
        payload: data.data.data,
      });

      console.log(data.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
};

/* export const getLists = () => {
  return (dispatch) => {
    const myData = data.data;
    dispatch({
      type: "FETCH_ALL",
      payload: myData,
    });
  };
}; */
