import { AppThunk } from "../../";
import { selectLoadingRoute } from "../";

export const incrementIfOdd =  (isLoading: boolean): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectLoadingRoute(getState());
    console.log(currentValue)
    // if (currentValue % 2 === 1) {
    //   dispatch(incrementByAmount(amount));
    // }
  };