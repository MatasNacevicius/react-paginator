import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../data/data";
import Paginator from "./Paginator";

const DataDisplay = ({ dataPerPage }) => {
  const { pageNow } = useParams();

  const navigate = useNavigate();

  const [visibleNames, setVisibleNames] = useState([]);

  useEffect(() => {
    const parsedPageNow = parseInt(pageNow);
    const howManyPages = Math.ceil(data.length / dataPerPage);

    if (
      isNaN(parsedPageNow) ||
      parsedPageNow < 1 ||
      parsedPageNow > howManyPages
    ) {
      navigate("/404");
      return;
    }

    const start = (parsedPageNow - 1) * dataPerPage;
    const end = parsedPageNow * dataPerPage;

    const dataToShow = data.slice(start, end);
    setVisibleNames(dataToShow);
  }, [pageNow, dataPerPage, navigate]);

  return (
    <div>
      <h2>This is {pageNow} page</h2>
      <ol>
        {visibleNames.map((name) => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ol>
      <Paginator
        totalLenght={data.length}
        perPage={dataPerPage}
        currentPage={parseInt(pageNow)}
      />
    </div>
  );
};

export default DataDisplay;
