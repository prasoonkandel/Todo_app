import { Routes, Route, Navigate } from "react-router-dom";
import Mp from "./MP/mp";
import Td from "./TODO/todo";
import View from "./View";
import Log from "./log";
import NotFound from "./nofo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Mp />}></Route>
      <Route path="/add" element={<Td />}></Route>
      <Route path="/view/:id" element={<View />} />
      <Route path="/log" element={<Log />} exact />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
