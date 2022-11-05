import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const PageNotFound = () => {
  return (
    <div class="grid h-screen place-content-center bg-black">
      <div class="text-center">
        <strong class="text-9xl font-black text-gray-200 select-none">404</strong>

        <p class="mt-4 text-white/50 text-[18px] ">
          দুঃখিত আপনি যেই পেইজটি খুজছেন তা পাওয়া জাচ্ছে না।
        </p>

        <Link
          to="/"
          class="mt-6 inline-block rounded-full hover:text-white hover:bg-[#38BDF8] transition duration-300 px-5 py-3 text-sm font-medium text-[#38BDF8] border-2 border-[#38BDF8]"
        >
          Go Back Home <FontAwesomeIcon icon={faHome} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
