import React from "react";
import { Routes, Route } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Navbar from "../components/Navbar/Navbar";
import ErrorPage from "../pages/Error/ErrorPage";

export const Root = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navbar />}>
        {navbar.map(({ id, path, title, element }) => {
          return (
            <Route key={id} path={path} element={element}>
              {title}
            </Route>
          );
        })}
        <Route path={"*"} element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Root;
