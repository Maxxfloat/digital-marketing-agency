import React from "react";
import style from "../Style/NotFindPage.module.css";

const NotFindPage = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="row text-center">
        <p className={`${style.error} col-12 `}>404</p>
        <p className={`${style.errorText} col-12`}>صفحه پیدا نشد</p>
      </div>
    </div>
  );
};

export default NotFindPage;
