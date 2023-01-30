import { Routes, Route } from "react-router-dom";
import { HomePage, NoMatch, PatternContent, Patterns, PreparerLayout } from "../preparer";
import { LoadingRoute } from "../ui";
import { useCheckExercises } from "../hooks";

export const AppRouter = () => {

  const loadingRoute = useCheckExercises();

  if (loadingRoute) {
    return <LoadingRoute />
  }

  return (
    <Routes>
      <Route path='/' element={<PreparerLayout />} >
        <Route index element={<HomePage />}  />
        <Route path="/new" element={<Patterns />} />
        <Route path="/new/pattern" element={<PatternContent />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
