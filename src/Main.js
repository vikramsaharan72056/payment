import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div class="row">
      <div class="col s7">
        <h1>
          <div style={{ width: "100%" }}>
            <span style={{ color: "white" }}>
              Access curated courses worth <br />₹ <span id="cross">18500</span>{" "}
              at just <span style={{ color: "blue" }}>₹ 99</span> per year!
            </span>
          </div>
        </h1>
        <div>
          <ul>
            <li>
              <section class="sectionStyle">
                <image class="col 5">
                  <img class="img" src="course.png" alt="courses" />{" "}
                </image>
                <p class="col 6 ">
                  {" "}
                  <span class="bluetyga">100+</span>{" "}
                  <span class="whiteramp">&nbsp;Job relevant courses</span>
                </p>
              </section>
            </li>
            <li>
              <section class="sectionStyle">
                <image class="col 5">
                  <img class="img" src="time-clock.png" alt="courses" />{" "}
                </image>
                <p class="col 6 offset-3">
                  {" "}
                  <span class="bluetyga">20000+</span>{" "}
                  <span class="whiteramp">&nbsp; Hours of content</span>
                </p>
              </section>
            </li>
            <li>
              <section class="sectionStyle">
                <image class="col 3">
                  <img class="img" src="live.png" alt="courses" />{" "}
                </image>
                <p class="col 6 offset-3">
                  {" "}
                  <span class="bluetyga">Exclusive</span>{" "}
                  <span class="whiteramp">&nbsp;webinar access</span>
                </p>
              </section>
            </li>
            <li>
              <section class="sectionStyle">
                <image class="col 3">
                  <img class="img" src="scholarship.png" alt="courses" />{" "}
                </image>
                <p class="col 6 offset-3">
                  {" "}
                  <span class="whiteramp">Scholarship worth</span>
                  <span class="bluetyga">&nbsp; ₹ 94,500</span>{" "}
                </p>
              </section>
            </li>
            <li>
              <section class="sectionStyle">
                <image class="col 3">
                  <img class="img" src="adfree.png" alt="courses" />{" "}
                </image>
                <p class="col 6 offset-3">
                  {" "}
                  <span class="bluetyga"> Ad Free</span> &nbsp;
                  <span class="whiteramp">learning experience</span>
                </p>
              </section>
            </li>
          </ul>
        </div>
      </div>
      <div class="col s5  ">
        <div class="card " id="card">
          <div id="bluetip">
            <div id="tipcl1">
              <div class="tip">1</div>
              <div class="tiptext">SignUp</div>
            </div>
            <div id="tipcl2">
              <div class="tip">2</div>
              <div class="tiptext">Subscribe</div>
            </div>
          </div>
          <div>
            <div id="heading">Select your Subsciption plan</div>
            <form action="#">
              <div class=" insider">
                <div id="offer">Offer expired</div>
                <div>
                  <label>
                    <input
                      name="group1"
                      type="radio"
                      checked
                      disabled="disabled"
                    />
                    <span>12 Months Subsciption</span>
                  </label>
                  <span class="price">
                    Total 99 <br /> ₹8/mo{" "}
                  </span>
                </div>
              </div>
              <div class="insider">
                <div id="recomm">Recommended</div>
                <div>
                  <label>
                    <input name="group1" type="radio" checked />

                    <span>12 months Subsciption</span>
                  </label>
                  <span class="price">
                    Total 179 <br /> ₹15/mo{" "}
                  </span>
                </div>
              </div>
              <div class=" insider norm">
                <div class="norm">
                  <label>
                    <input name="group1" type="radio" />
                    <span>6 Months Subsciption</span>
                  </label>
                </div>
                <div>
                  <span class="price end">
                    Total 149 <br /> ₹25/mo{" "}
                  </span>
                </div>
              </div>
              <div class=" insider norm">
                <div class="norm">
                  <label>
                    <input name="group1" type="radio" />
                    <span>3 Months Subsciption</span>
                  </label>
                </div>
                <div>
                  <span class="price end">
                    Total 99 <br /> ₹33/mo{" "}
                  </span>
                </div>
              </div>
            </form>
            <hr />
            <div class="after-form">
              <div id="subs">
                <div>Subsciption fee</div>
                <div id="subs-price">₹18,500</div>
              </div>
              <div id="limit">
                <div id="limit-limit">
                  <span id="limit-bold">Limited time offer</span>
                  <br />
                  <img id="limit-img" src="/limit-clock.png" alt="limit" />
                  <span>Offer valid till 15th March 2023</span>
                </div>
                <div id="limit-price">-18,401</div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <button id="cancel">CANCEL</button>
                <button id="proceed">PROCEED TO PAY</button>
              </div>
            </div>

            <img id="banker" src="/banker.png" alt="banker" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
