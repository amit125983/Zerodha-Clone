import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" py-5  " id="supportWrapper">
        <h4 className="fs-4">Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      <div className=" row p-5  mx-5">
        <div className="col-6 p-5 ">
          <h1 className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
          />{" "}
          <br />
          <div className="lh-lg">
            <a href="" className="me-2">
              Track account opening
            </a>
            <a href="" className="me-2">
              Track segment activation
            </a>
            <a href="" className="me-2">
              Intraday margins
            </a>
            <a href="" className="me-2">
              Kite user manual
            </a>
            <a href="" className="me-2">
              Track Tickets
            </a>
          </div>
        </div>
        <div className="col-6 p-5 ">
          <h1 className="fs-4">Featured</h1>
          <ol className="lh-lg">
            <li>
              <a href="">Current Takeovers and Delisting – January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages – MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
