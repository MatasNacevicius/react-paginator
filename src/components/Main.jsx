import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataDisplay from "./DataDisplay";

const Main = ({ dataPerPage }) => {
  return (
    <BrowserRouter>
      <h1>Paginator</h1>
      <Routes>
        <Route
          path="/:pageNow"
          element={<DataDisplay dataPerPage={dataPerPage} />}
        />
        <Route path="/404" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
