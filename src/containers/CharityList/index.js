import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import { getCharityList } from "../../services";

const CharityList = () => {
  const [data, setData] = useState(getCharityList().data);
  const [sort, setSort] = useState("");
  const handleSort = (e) => {
    if (e.detail === 0) {
      setSort(e.target.value);
    }
  };

  useEffect(() => {
    setSort("donation_target");
  }, []);

  useEffect(() => {
    setData(data.sort((a, b) => a[sort] - b[sort]));
  }, [sort]);

  return (
    <div className="container">
      <div className="d-flex my-4">
        <img
          className="img-circle mr-4"
          src="https://assets.kitabisa.cc/images/logos/logogram__ktbs_white.png"
          alt="kita-bisa-logo"
        />
        <h1 className="flex-fill my-auto">Kitabisa</h1>
        <div className="my-auto">
          <span className="mr-2">Sort By: </span>
          <select id="sort" name="sort" onClick={handleSort} selected="sort">
            <option value="donation_target">Donation Goal</option>
            <option value="days_remaining">Days Left</option>
          </select>
        </div>
      </div>
      <div className="row">
        {data.map((item, key) => (
          <div className="col-12 col-md-4 mb-4" key={key}>
            <Card
              image={item?.image}
              title={item?.title}
              days_remaining={item?.days_remaining}
              donation_received={item?.donation_received}
              donation_target={item?.donation_target}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharityList;
