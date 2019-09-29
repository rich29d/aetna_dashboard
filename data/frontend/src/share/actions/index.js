/*export const toggleNotification = notification => {  
  return {
    type: "TOGGLE_NOTIFICATION",
    notification,
  }
};*/

export const changeLoading = loading => {
  return dispatch => setTimeout(() => {
    dispatch({
      type: "CHANGE_LOADING",
      loading,
    })
  }, 100);
};

export const toggleNotification = notification => {
  return dispatch => setTimeout(() => {
    dispatch({
      type: "TOGGLE_NOTIFICATION",
      notification,
    })
  }, 100);
};

export const periodGraphic = period => {
  return dispatch => setTimeout(() => {
    dispatch({
      type: "PERIOD_GRAPHIC",
      period,
    })
  }, 100);
};