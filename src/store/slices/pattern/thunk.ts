import { getPatterns } from "../../../apis";
import { AppThunk } from "../../store";
import { getPatternsFailure, getPatternsStart, getPatternsSuccess } from "./patternSlice";

export const startLoadingPatterns = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getPatternsStart());
    const patterns = await getPatterns();
    dispatch(getPatternsSuccess(patterns));
  } catch (err: any) {
    dispatch(getPatternsFailure(err.toString()));
  }
}