import React from "react";
import Card from "../../components/Card";
import { getCharityList } from "../../services";

const CharityList = () => {
  const { data } = getCharityList();
  return (
    <div className="container">
      <div className="d-flex my-4">
        <img
          className="img-circle mr-4"
          src="https://assets.kitabisa.cc/images/logos/logogram__ktbs_white.png"
          alt="kita-bisa-logo"
        />
        <h1 className="flex-fill my-auto">Kitabisa</h1>
        <div className="my-auto">Sort</div>
      </div>
      <div className="row">
        {data.map((item, key) => (
          <div className="col-12 col-md-4 mb-4" key={key}>
            <Card
              image={item?.image}
              title={item?.title}
              expired={item?.expired}
              donation_received={item?.donation_received}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharityList;
