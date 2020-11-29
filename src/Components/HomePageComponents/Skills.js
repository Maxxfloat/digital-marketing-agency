import React from 'react';
import { Container, Row } from 'react-bootstrap';

import style from '../Style/Skill.module.css';
import myFont from '../Style/Font.module.css';

// d-flex justify-content-center align-items-center

const Skills = () => {
  return (
    <Container
      fluid
      className={`${style.myContainer}`}
      style={{ height: '100vh' }}
    >
      <Row
        className="d-flex justify-content-center align-items-center p-5"
        style={{ height: '100%' }}
      >
        <div className={`col-12`} style={{ height: '30%' }}>
          <h1
            className={`${myFont.sahelBlack} m-0 p-0 text-center`}
            style={{ fontSize: '5vw', fontWeight: 'bold' }}
          >
            ویژگی ها
          </h1>
          <p
            className={`${myFont.sahelBlack} m-md-2 p-0 text-center`}
            style={{ fontSize: '3vw', fontWeight: 'bold' }}
          >
            هر آنچه برای دیده شدن نیاز دارید
          </p>
        </div>
        {/* <div className={`col-12 mt-0 pt-0`} style={{ height: '50vh' }}> */}
        <div className="col" style={{ height: '70%' }}>
          <div className={` bg-white rounded `}>
            <p className={`${style.myText} text-justify`}>
              ویژگی آژانس دیجیت آمیختن مهارت های مختلف از جمله توانایی جلب توجه
              افراد مایل و ترغیب جستجوگران برای دنبال کردن و ارائه خدمات لازم
              مهارت آراستن ظاهر کسب و کار شما در قالب یک برند و سازمان مطمئن و
              قابل اطمینان به مشتریان و همراه کردن شبکه های اجتماعی برای محکم
              کردن تعامل با مشتریان شما{' '}
            </p>
            {/* </div> */}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Skills;
