import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function VerticalSwiper() {
  return (
    <div className="slider-box">
      <div className="slider-btns">
        <div className="swiper-button-prev custom-prev"> </div>
        {/* <div className="slide-number">
          <span>1</span>
          <span>/</span>
          <span>5</span>
        </div> */}
        <div className="swiper-button-next custom-next"> </div>
      </div>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        loop={true}
        autoplay={{
          delay: 20000000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Mousewheel, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-card">
            <div className="row">
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <div className="row">
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <div className="row">
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <div className="row">
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <div className="row">
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="user-card">
                  <div className="user-profile">
                    <div className="profile">
                      <img src={require("../images/profile.png")} alt="img" />
                    </div>
                    <div className="name">
                      <span>
                        <svg
                          width="14"
                          height="25"
                          viewBox="0 0 14 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7461 0.59375C12.992 0.5938 13.9999 1.60173 14 2.84766V23.9668C14 24.2467 13.7691 24.4354 13.5312 24.4355C13.4123 24.4355 13.3001 24.3938 13.2021 24.2959L7.3291 18.4229C7.2381 18.3319 7.119 18.2832 7 18.2832C6.881 18.2832 6.7619 18.3319 6.6709 18.4229L0.797852 24.2959C0.69988 24.3938 0.580693 24.4355 0.46875 24.4355C0.230852 24.4354 2.62242e-05 24.2467 0 23.9668V2.84766C5.06393e-05 1.60173 1.00798 0.593801 2.25391 0.59375H11.7461Z"
                            fill="#11AC57"
                          />
                        </svg>
                        1등
                      </span>
                      <h3>김독서</h3>
                      <p>2019/12/31</p>
                    </div>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                  <div className="tag2">
                    <ul>
                      <li>총 리뷰</li>
                    </ul>
                    <span>254</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
