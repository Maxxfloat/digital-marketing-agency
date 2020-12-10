import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import myBannerStyle from "../Style/Banner.module.css";

const Banner = () => {
  return (
    <div>
      <section>
        <Container fluid className={`${myBannerStyle.myBanner}`}>
          <div className="row d-flex align-items-center justify-content-center vh-100">
            <div className="col text-center">
              <h1 className="my-4">مشهور بشید،سریع رشد می‌کنید</h1>
              <button
                type="button"
                className={`${myBannerStyle.myBannerBtn} ${myBannerStyle.myTempStyle} mx-2`}
              >
                ما چیکار می‌کنیم
              </button>
              <Link to="/signup">
                <button
                  type="button"
                  className={`${myBannerStyle.myBannerBtn} ${myBannerStyle.myTempStyle} mx-2`}
                >
                  ثبت نام
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Banner;
