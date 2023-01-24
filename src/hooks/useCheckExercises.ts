import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./";
import { setLoadingRoute } from "../store";

export const useCheckExercises = () => {

  const { loadingRoute } = useAppSelector(state => state.general);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoadingRoute(false));
  }, [])

  return loadingRoute
}
