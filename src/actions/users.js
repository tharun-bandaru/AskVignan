import * as api from "../API";

export const getAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getAllUsers();
    console.log(data);
    dispatch({ type: "FETCH_ALL_USERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = (id, updateData) => async (dispatch) => {
  try {
    console.log("update profile executed", id, "update Data", updateData);
    const { data } = await api.updateProfile(id, updateData);
    console.log("disp", data);
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
    console.log("dispatch successful");
  } catch (error) {
    console.log(error);
  }
};
