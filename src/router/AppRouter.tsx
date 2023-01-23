import { Routes, Route } from "react-router-dom";
import { HomePage, NoMatch, PatternContent, Patterns, PreparerLayout } from "../preparer";
import { Loading } from "../ui";

export const AppRouter = () => {

  return (
    <>
      {/* {
        (true) && (<Loading />)
      } */}
      <Routes>
        <Route path='/' element={<PreparerLayout />} >
          <Route index element={<HomePage />} />
          <Route path="/new/patterns" element={<Patterns />} />
          <Route path="/new/patterns/:name" element={<PatternContent />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}
