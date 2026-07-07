import React from "react";
function RightSection({
  imageUrl,
  productName,
  ProductDescription,
  learnMore,
}) {
  return (
    <div className="Container p-5">
      <div className="row ps-5 pe-5">
        <div className="col-6 p-5 mt-3">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>
          <div>
            <a href={learnMore}>
              Learn More<i class="fa-solid fa-arrow-right-long"></i>{" "}
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
