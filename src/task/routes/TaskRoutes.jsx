import { Navigate, Route, Routes } from "react-router-dom"
import { TaskPage } from "../pages/TaskPage"


export const TaskRoutes = () => {
  return (
    <Routes>
      <Route path="/taskapp" element={<TaskPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
