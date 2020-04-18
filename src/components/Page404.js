import React from "react";

const Page404 = () => (
  <div className="ui icon message">
    <i className="power off red icon"></i>
    <div className="content">
      <div className="header">Ошибка 404</div>
      <p>
        Извини, друг. Страница, которую вы запросили, не находится в нашей базе
        данных. Скорее всего вы попали на битую ссылку или опечатались при вводе
        URL
      </p>
    </div>
  </div>
);

export default Page404;
