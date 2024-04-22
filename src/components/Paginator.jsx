import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Paginator = ({ totalLenght, perPage, currentPage }) => {
  const [pages, setPages] = useState([]);
  const [leftArrow, setLeftArrow] = useState(0);
  const [rightArrow, setRightArrow] = useState(0);

  useEffect(() => {
    if (currentPage === 1) {
      setLeftArrow(0);
    } else {
      setLeftArrow(currentPage - 1);
    }

    const howManyPages = Math.ceil(totalLenght / perPage);
    console.log(howManyPages);

    if (currentPage === howManyPages) {
      setRightArrow(0);
    } else {
      setRightArrow(currentPage + 1);
    }

    const pagesArray = [];
    for (let index = 0; index < howManyPages; index++) {
      pagesArray.push(index + 1);
    }
    console.log(pagesArray);

    setPages(pagesArray);
  }, [totalLenght, perPage, currentPage]);

  return (
    <div>
      <p>Paginator</p>
      <div style={{ display: "flex" }}>
        <br />
        <Link
          to={"/" + leftArrow}
          style={{ visibility: leftArrow ? "visible" : "hidden" }}
          className="pageLink"
        >
          {"<--"}
        </Link>
        {pages.map((page) => (
          <Link to={"/" + page} key={page} className="pageLink">
            {page}
          </Link>
        ))}
        <Link
          to={"/" + rightArrow}
          style={{ visibility: rightArrow ? "visible" : "hidden" }}
          className="pageLink"
        >
          {"-->"}
        </Link>
      </div>
    </div>
  );
};

export default Paginator;
