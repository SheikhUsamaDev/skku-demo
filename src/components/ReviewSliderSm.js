import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function VerticalSwiper() {
  return (
    <div className="slider-box d-none-lg slider-h-100">
      <div className="slider-card">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="banner">
              <img src={require("../images/book.png")} alt="img" />
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="user-card">
              <div className="user-profile">
                <div className="profile">
                  <img src={require("../images/profile.png")} alt="img" />
                </div>
                <div className="name">
                  <h4>by. 홍길동</h4>
                  <p>2019/12/31</p>
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
                </div>
              </div>
              <p>+ 홍길동님의 리뷰 더보기</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="comment-card">
              <div className="notify">
                <div className="tag">
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_5485)">
                      <rect
                        x="4"
                        y="0.435547"
                        width="40"
                        height="40"
                        rx="20"
                        fill="white"
                        shape-rendering="crispEdges"
                      />
                      <rect
                        x="4"
                        y="0.435547"
                        width="40"
                        height="40"
                        rx="20"
                        fill="#AFE12A"
                        fill-opacity="0.1"
                        shape-rendering="crispEdges"
                      />
                      <rect
                        x="4.5"
                        y="0.935547"
                        width="39"
                        height="39"
                        rx="19.5"
                        stroke="#77A400"
                        stroke-opacity="0.3"
                        shape-rendering="crispEdges"
                      />
                      <path
                        d="M23.8008 21.0977C25.4008 20.2916 27.5 21.2676 28 21.4355L26.3008 18.5788V16.5636C26.3008 15.724 26.5008 13.8431 27.3008 13.037C28.1008 12.2309 29.9674 12.0294 30.8008 12.0293C28.0008 9.61108 23.9674 10.0141 22.3008 10.5179L18.3008 13.0369L15.8008 17.0673V22.1053L17.8008 26.1357L18.3008 25.1281C19.4674 24.1205 22.2008 21.9038 23.8008 21.0977Z"
                        fill="#ADDD1D"
                      />
                      <path
                        d="M17.4987 27.7339C17.2326 27.5007 16.7781 27.0677 16.3703 26.5386C14.5019 24.4303 12.3635 18.8929 15.9041 13.865C17.3647 11.7919 19.4622 10.3949 21.5481 9.82662C26.4114 8.50204 30.152 10.8161 31.865 12.6835C32.0553 12.8912 32.0281 13.1577 31.8844 13.2791C31.6727 13.4594 31.4804 13.3654 31.0532 13.2419C30.387 13.0479 29.8121 13.0029 29.1964 13.0832C27.767 13.2693 26.5318 14.6076 26.7046 16.475C26.8639 18.1797 28.169 19.4102 29.0838 20.2214C32.302 23.0724 31.2299 26.135 30.9697 26.807C30.084 29.0917 27.8078 30.7044 24.8557 30.7083C23.6301 30.7083 21.8569 30.3908 20.074 29.2544C20.006 29.223 19.9361 29.1309 20.0216 28.9781C20.1575 28.6313 20.7246 27.6183 20.9694 27.3243C21.855 28.355 23.3505 29.3249 25.011 29.3837C27.2795 29.464 28.74 28.2237 29.2741 26.6523C29.8743 24.8868 29.2314 23.0861 27.5339 21.4656C26.0715 20.0666 24.7663 18.7734 24.6867 16.5533C24.5857 13.7083 27.0387 12.0173 29.3207 12.127C29.3887 12.1309 26.1647 9.78939 22.0298 11.1923C20.006 11.8801 18.7961 13.0871 18.2153 13.7729C18.1279 13.8787 18.1843 13.9591 18.2153 14.0022C18.2794 14.0943 19.6875 16.0713 19.6875 16.0713L17.151 15.4855C17.151 15.4855 17.0461 15.46 16.9937 15.5482C16.1896 16.9511 15.0069 21.0071 17.6638 24.6967C17.6638 24.6967 19.9186 21.0836 24.4031 20.77C24.7022 20.7504 24.6634 20.8582 24.4672 20.9288C20.4624 22.4199 18.8854 25.3865 17.8657 27.6751C17.8036 27.8162 17.6366 27.8593 17.5006 27.7378L17.4987 27.7339Z"
                        fill="#11AC57"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_5485"
                        x="0"
                        y="0.435547"
                        width="48"
                        height="48"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_5485"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_5485"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <span className="text-success">50</span>
                </div>
                <div className="tag">
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_5488)">
                      <rect
                        x="4.5"
                        y="0.435547"
                        width="40"
                        height="40"
                        rx="20"
                        fill="#EFF2F1"
                        shape-rendering="crispEdges"
                      />
                      <rect
                        x="5"
                        y="0.935547"
                        width="39"
                        height="39"
                        rx="19.5"
                        stroke="#CDD2E0"
                        shape-rendering="crispEdges"
                      />
                      <g clip-path="url(#clip0_1_5488)">
                        <path
                          d="M16.5 11.2354H32.5C33.1582 11.2354 33.7002 11.7774 33.7002 12.4355V24.4355C33.7002 25.0937 33.1582 25.6357 32.5 25.6357H18.1689L15.2998 28.5049V12.4355C15.2998 11.7774 15.8418 11.2354 16.5 11.2354Z"
                          fill="#1D4676"
                          fill-opacity="0.3"
                          stroke="#1D4676"
                          stroke-width="1.6"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_5488"
                        x="0.5"
                        y="0.435547"
                        width="48"
                        height="48"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_5488"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_5488"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_1_5488">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(12.5 8.43555)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>24</span>
                </div>
                <div className="tag">
                  <svg
                    width="81"
                    height="49"
                    viewBox="0 0 81 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_5492)">
                      <rect
                        x="4"
                        y="0.435547"
                        width="73"
                        height="40"
                        rx="20"
                        fill="#EFF2F1"
                        shape-rendering="crispEdges"
                      />
                      <rect
                        x="4.5"
                        y="0.935547"
                        width="72"
                        height="39"
                        rx="19.5"
                        stroke="#CDD2E0"
                        shape-rendering="crispEdges"
                      />
                      <path
                        d="M16.3691 26.9355L20.7637 14.209H24.1562L28.5596 26.9355H25.7207L22.5127 17.083H22.4072L19.1904 26.9355H16.3691ZM25.8438 21.9346V24H19.0498V21.9346H25.8438ZM32.6377 26.9355H30.001V14.209H32.6377V26.9355ZM46.0146 18.0674H42.9033V16.248H46.0146V18.0674ZM47.6758 21.8115H45.4434V12.5391H47.6758V21.8115ZM47.6758 28.377H36.9268V22.4619H47.6758V28.377ZM39.168 26.5752H45.4873V24.2285H39.168V26.5752ZM39.7744 15.0615C39.7744 16.0986 39.6074 17.0684 39.2734 17.9707C38.9453 18.8672 38.4414 19.6553 37.7617 20.335C37.0879 21.0088 36.2559 21.5068 35.2656 21.8291L34.1055 20.0537C34.9551 19.7842 35.667 19.3887 36.2412 18.8672C36.8154 18.3457 37.2402 17.7598 37.5156 17.1094C37.7969 16.459 37.9404 15.7764 37.9463 15.0615V14.0244H39.7744V15.0615ZM40.2314 15.0791C40.2314 15.7236 40.3662 16.3506 40.6357 16.96C40.9053 17.5635 41.3154 18.1143 41.8662 18.6123C42.417 19.1104 43.0996 19.4971 43.9141 19.7725L42.8066 21.5303C41.8398 21.2139 41.0254 20.7334 40.3633 20.0889C39.707 19.4443 39.2148 18.6943 38.8867 17.8389C38.5645 16.9775 38.4062 16.0576 38.4121 15.0791V14.0244H40.2314V15.0791ZM43.4219 15.167H34.7383V13.374H43.4219V15.167ZM57.8447 13.8047C57.8447 14.8242 57.5781 15.7734 57.0449 16.6523C56.5117 17.5254 55.7412 18.2607 54.7334 18.8584C53.7314 19.4502 52.5537 19.8428 51.2002 20.0361L50.3213 18.2344C51.4873 18.0879 52.4922 17.7861 53.3359 17.3291C54.1797 16.8721 54.8125 16.3359 55.2344 15.7207C55.6621 15.0996 55.876 14.4609 55.876 13.8047V13.0225H57.8447V13.8047ZM58.2314 13.8047C58.2314 14.4609 58.4482 15.0996 58.8818 15.7207C59.3213 16.3359 59.96 16.8721 60.7979 17.3291C61.6416 17.7861 62.6494 18.0879 63.8213 18.2344L62.9512 20.0361C61.5859 19.8428 60.3994 19.4502 59.3916 18.8584C58.3896 18.2607 57.6191 17.5254 57.0801 16.6523C56.541 15.7793 56.2715 14.8301 56.2715 13.8047V13.0225H58.2314V13.8047ZM58.1172 28.5527H55.8936V22.6729H58.1172V28.5527ZM64.3486 23.0859H49.7588V21.249H64.3486V23.0859Z"
                        fill="#1D4676"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_5492"
                        x="0"
                        y="0.435547"
                        width="81"
                        height="48"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_5492"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_5492"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <span>10 점</span>
                </div>
              </div>
              <div className="gentile">
                <p> 이방인</p>
                <span>정혜선 | 산과글 | 2019/02/21</span>
              </div>
              <h6 className="text">
                가방이 무척 무거웠던 날로 기억한다. 중앙학술정보관에서 나눠줬던
                책이었던 것 같다. 가방이무거워서 나눠주는 책을 가져가야 할지
                말지 고민했지만, 좋은 책을 마다할 이유는 없으니까! 가져오고
                나서는 이제 고학년이라 취업에 한참 관심이 많아져서, 이 책을
                소장할 수 있게 된 것에 조금 감사했다. 제1장 글로벌 취업 문화에
                관하여 해외 취업을 생각해 본 적은 없어서 우와! 가방이 무척
                무거웠던 날로 기억한다. 중앙학술정보관에서 나눠줬던 책이었던
                가방이 무척 무거웠던 날로 기억한다. 중앙학술정보관에서 나눠줬던
                책이었던 가방이 무척 무거웠던 날로 기억한다. 중앙학술정보관에서
                나눠줬던 책이었던
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
