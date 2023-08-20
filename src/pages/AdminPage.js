import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const pages = [
    {
      id: 1,
      text: "রমজানের দোয়া",
      link: "/ramadan/payers/add",
    },
    {
      id: 2,
      text: "রমজান সম্পর্কে প্রশ্ন",
      link: "/ramadan/qna/add",
    },
    {
      id: 3,
      text: "যাকাত সম্পর্কে প্রশ্ন",
      link: "/ramadanzakat/qna/add",
    },
  ];
  return (
    <div className="mt-[100px] flex justify-evenly ">
      {pages.map((page) => (
        <Link
          key={page.id}
          to={page.link}
          className="w-full text-center px-4 m-2 rounded-sm py-3 bg-gradient-to-tr from-cyan-600 to-blue-500 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 "
        >
          <button className="md:text-lg text-sm">{page.text}</button>
        </Link>
      ))}
    </div>
  );
};

export default AdminPage;
