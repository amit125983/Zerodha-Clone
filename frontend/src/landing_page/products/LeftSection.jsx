import React from "react";

function LeftSection({
  imageUrl,
  productName,
  ProductDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="Container  p-5 mt-3">
      <div className="row ps-5 pe-5">
        <div className="col-6 ">
          <img src={imageUrl} alt="" />
        </div>
        <div className="col-6 p-5 ">
          <h1>{productName}</h1>
          <p>{ProductDescription}</p>
          <div>
            <a href={tryDemo}>
              Try Demo<i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More<i class="fa-solid fa-arrow-right-long"></i>{" "}
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />{" "}
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
