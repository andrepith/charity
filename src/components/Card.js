import React from "react";
import { diffDate } from "../helpers";

export default ({ image, title, expired, donation_received }) => {
  return (
    <div>
      <img
        src={image}
        alt={title}
        className="embed-responsive embed-responsive-4by3 mb-2"
        height="200px"
      />
      <div className="d-flex flex-column" style={{ minHeight: "120px" }}>
        <div className="flex-fill">
          <h6>{title}</h6>
        </div>
        <div>
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <div>Terkumpul</div>
              <div>Rp. {donation_received.toLocaleString("id-ID")}</div>
            </div>
            <div className="text-center">
              <div>Sisa Hari</div>
              <div>{diffDate(Date.now(), expired * 1000)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
