import React from "react";

export default ({
  image,
  title,
  days_remaining,
  donation_received,
  donation_target,
}) => {
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
          <div
            className="p-1 my-1 table-bordered"
            style={{
              backgroundColor:
                donation_received === donation_target
                  ? "var(--pink)"
                  : "var(--gray)",
            }}
          />
          <div className="d-flex justify-content-between">
            <div>
              <div>Terkumpul</div>
              <div>
                {donation_received.toLocaleString("id-ID")}/
                {donation_target.toLocaleString("id-ID")}
              </div>
            </div>
            <div className="text-center">
              <div>Sisa Hari</div>
              <div>{days_remaining}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
