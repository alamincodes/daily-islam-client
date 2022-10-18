import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DuyaSection from "../DuyaSection.json";
import DuyaName from "./DuyaName";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Duya = () => {
  return (
    <div>
      {DuyaSection.map((duya) => (
        <DuyaName key={duya.id} duya={duya} />
      ))}
      {/* -----button--------- */}
      <div className="flex justify-between ">
        <Link to="/namaj"
        className="border md:px-5 sm:px-3 py-1 hover:text-white hover:bg-black"
        >
          <h4>
            <FontAwesomeIcon icon={faArrowLeft} /> <span className="mx-4">দোয়া</span>
          </h4>
        </Link>
        <Link to="/jikir"
        className="border md:px-5 sm:px-3 py-1 hover:text-white hover:bg-black"
        >
          <h4>
            <span className="mx-4">যিক্‌র</span> <FontAwesomeIcon icon={faArrowRight} />
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Duya;
