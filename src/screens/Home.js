import { useState, useEffect } from "react";
import {
  Tabs,
  Accordion,
  Tab,
  Button,
  ButtonGroup,
  Offcanvas,
  Dropdown,
  Form,
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import ReviewSlider from "../components/ReviewSlider";
import ReviewSliderSm from "../components/ReviewSliderSm";
import AuthorSlider from "../components/AuthorSlider";



export default function Index() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [query, setQuery] = useState("");
  const [showSearchCollapse, setShowSearchCollapse] = useState(false);
  const [activeButton, setActiveButton] = useState("자과캠"); // default selected
  const [language, setLanguage] = useState("ko"); // default Korean

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      const baseUrl = window.location.origin;
      window.location.href = `${baseUrl}/search-result/?q=${encodeURIComponent(
        query
      )}`;
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  useEffect(() => {
    // When page loads, check URL
    if (window.location.search.includes("lang=en")) {
      setLanguage("en");
    } else {
      setLanguage("ko");
    }
  }, []);

  const switchToEnglish = () => {
    window.location.href = `${window.location.origin}?lang=en`;
  };

  const switchToKorean = () => {
    window.location.href = `${window.location.origin}`;
  };

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // adjust sensitivity
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
  });

  const sections = [
    { id: "hero", icon: "fa-solid fa-house" },
    { id: "research", icon: "fa-solid fa-book-open" },
    { id: "books", icon: "fa-solid fa-medal" },
    { id: "review", icon: "fa-regular fa-message-lines" },
    { id: "project", icon: "fa-solid fa-heart" },
    { id: "blog", icon: "fa-solid fa-bullhorn" },
  ];

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);

  const handleMouseEnter1 = () => setShow1(true);
  const handleMouseLeave1 = () => setShow1(false);

  const handleMouseEnter2 = () => setShow2(true);
  const handleMouseLeave2 = () => setShow2(false);

  const handleMouseEnter3 = () => setShow3(true);
  const handleMouseLeave3 = () => setShow3(false);

  const handleMouseEnter4 = () => setShow4(true);
  const handleMouseLeave4 = () => setShow4(false);

  const handleMouseEnter5 = () => setShow5(true);
  const handleMouseLeave5 = () => setShow5(false);

  const handleMouseEnter6 = () => setShow6(true);
  const handleMouseLeave6 = () => setShow6(false);

  const handleMouseEnter7 = () => setShow7(true);
  const handleMouseLeave7 = () => setShow7(false);


  const [cardIndex, setCardIndex] = useState(0);
const cards = [
  {
    id: 1,
    title: "01",
    heading: "[중앙학술정보관] 소원 트리 초대장",
    date: "2024-12-29",
    content: "안녕하세요, 성균관대학교 중앙학술정보관입니다!...",
  },
  {
    id: 2,
    title: "02",
    heading: "중앙학술정보관 소원 트리 초대장",
    date: "2024-12-29",
    content: "다가오는 연말을 맞아 여러분의 소원을 담아볼 특별한 이벤트...",
  },
  {
    id: 3,
    title: "03",
    heading: "[중앙학술정보관] 소원 트리 초대장",
    date: "2024-12-29",
    content: "이벤트 안내 ...",
  },
  {
    id: 4,
    title: "04",
    heading: "[중앙학술정보관] 소원 트리 초대장",
    date: "2024-12-29",
    content: "이벤트 안내 ...",
  },
  {
    id: 5,
    title: "05",
    heading: "[중앙학술정보관] 소원 트리 초대장",
    date: "2024-12-29",
    content: "이벤트 안내 ...",
  },
  {
    id: 6,
    title: "06",
    heading: "[중앙학술정보관] 소원 트리 초대장",
    date: "2024-12-29",
    content: "이벤트 안내 ...",
  }
];

const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  }, 31000);

  return () => clearInterval(interval);
}, []);

const getVisibleCards = () => {
  const total = cards.length;
  const prev = (currentIndex - 1 + total) % total;
  const next = (currentIndex + 1) % total;
  return [
    { ...cards[prev], position: "left" },
    { ...cards[currentIndex], position: "center" },
    { ...cards[next], position: "right" },
  ];
};

  return (
    <div>
      {/* <div className="fixed-nav">
        <a href="#hero" className="nav-btn">
          <i class="fa-solid fa-house"></i>
        </a>
        <a href="#research" className="nav-btn">
          <i class="fa-solid fa-book-open"></i>
        </a>
        <a href="#books" className="nav-btn">
          <i class="fa-solid fa-medal"></i>
        </a>
        <a href="#review" className="nav-btn">
          <i class="fa-regular fa-message-lines"></i>
        </a>
        <a href="#project" className="nav-btn">
          <i class="fa-solid fa-heart"></i>
        </a>
        <a href="#blog" className="nav-btn">
          <i class="fa-solid fa-bullhorn"></i>
        </a>
      </div> */}
      <div className="fixed-nav">
        {sections.map((section) => (
          <a
            key={section.id}
            // href={`#${section.id}`}
            className={`nav-btn ${
              activeSection === section.id ? "active" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${section.id}`).scrollIntoView({
              behavior: "smooth"})
            }}
          >
            <i className={section.icon}></i>
          </a>
        ))}
      </div>
      <div className="sticky-right-nav">
        <a href="/" className="nav-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_5770)">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_5770">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>
            My Choice <br /> 맞춤정보
          </span>
        </a>
        <a href="/" className="nav-btn">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_5776)">
              <path
                d="M18 1.1101L7.99997 1.1001C6.89997 1.1001 5.99997 2.0001 5.99997 3.1001V6.1001C5.99997 6.6501 6.44997 7.1001 6.99997 7.1001C7.54997 7.1001 7.99997 6.6501 7.99997 6.1001V5.1001H18V19.1001H7.99997V18.1001C7.99997 17.5501 7.54997 17.1001 6.99997 17.1001C6.44997 17.1001 5.99997 17.5501 5.99997 18.1001V21.1001C5.99997 22.2001 6.89997 23.1001 7.99997 23.1001H18C19.1 23.1001 20 22.2001 20 21.1001V3.1001C20 2.0001 19.1 1.1101 18 1.1101ZM11 15.1001C11.55 15.1001 12 14.6501 12 14.1001V9.1001C12 8.5501 11.55 8.1001 11 8.1001H5.99997C5.44997 8.1001 4.99997 8.5501 4.99997 9.1001C4.99997 9.6501 5.44997 10.1001 5.99997 10.1001H8.58997L3.69997 14.9901C3.30997 15.3801 3.30997 16.0101 3.69997 16.4001C4.08997 16.7901 4.71997 16.7901 5.10997 16.4001L9.99997 11.5101V14.1001C9.99997 14.6501 10.45 15.1001 11 15.1001Z"
                fill="#E0E2EB"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_5776">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.100098)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>북사이렌오더</span>
        </a>
        <a href="/" className="nav-btn">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_5781)">
              <path
                d="M20 6.30005H17V4.30005C17 3.19005 16.11 2.30005 15 2.30005H9C7.89 2.30005 7 3.19005 7 4.30005V6.30005H4C2.89 6.30005 2 7.19005 2 8.30005V19.3C2 20.41 2.89 21.3 4 21.3H20C21.11 21.3 22 20.41 22 19.3V8.30005C22 7.19005 21.11 6.30005 20 6.30005ZM9 4.30005H15V6.30005H9V4.30005ZM20 19.3H4V17.3H20V19.3ZM20 14.3H4V8.30005H7V10.3H9V8.30005H15V10.3H17V8.30005H20V14.3Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_5781">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.300049)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>도서구입신청</span>
        </a>
        <a href="/" className="nav-btn">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_5786)">
              <path
                d="M16 1.5H4C2.9 1.5 2 2.4 2 3.5V17.5H4V3.5H16V1.5ZM15 5.5L21 11.5V21.5C21 22.6 20.1 23.5 19 23.5H7.99C6.89 23.5 6 22.6 6 21.5L6.01 7.5C6.01 6.4 6.9 5.5 8 5.5H15ZM14 12.5H19.5L14 7V12.5Z"
                fill="#E0E2EB"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_5786">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>원문복사</span>
        </a>
        <a href="/" className="nav-btn">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_5792)">
              <path
                d="M17.5 5.2002C15.55 5.2002 13.45 5.6002 12 6.7002C10.55 5.6002 8.45 5.2002 6.5 5.2002C5.05 5.2002 3.51 5.4202 2.22 5.9902C1.49 6.3202 1 7.0302 1 7.8402V19.1202C1 20.4202 2.22 21.3802 3.48 21.0602C4.46 20.8102 5.5 20.7002 6.5 20.7002C8.06 20.7002 9.72 20.9602 11.06 21.6202C11.66 21.9202 12.34 21.9202 12.93 21.6202C14.27 20.9502 15.93 20.7002 17.49 20.7002C18.49 20.7002 19.53 20.8102 20.51 21.0602C21.77 21.3902 22.99 20.4302 22.99 19.1202V7.8402C22.99 7.0302 22.5 6.3202 21.77 5.9902C20.49 5.4202 18.95 5.2002 17.5 5.2002ZM21 17.9302C21 18.5602 20.42 19.0202 19.8 18.9102C19.05 18.7702 18.27 18.7102 17.5 18.7102C15.8 18.7102 13.35 19.3602 12 20.2102V8.7002C13.35 7.8502 15.8 7.2002 17.5 7.2002C18.42 7.2002 19.33 7.2902 20.2 7.4802C20.66 7.5802 21 7.9902 21 8.4602V17.9302Z"
                fill="#E0E2EB"
              />
              <path
                d="M13.9799 11.7103C13.6599 11.7103 13.3699 11.5103 13.2699 11.1903C13.1399 10.8003 13.3599 10.3703 13.7499 10.2503C15.2899 9.75029 17.2799 9.59029 19.1099 9.80029C19.5199 9.85029 19.8199 10.2203 19.7699 10.6303C19.7199 11.0403 19.3499 11.3403 18.9399 11.2903C17.3199 11.1003 15.5499 11.2503 14.2099 11.6803C14.1299 11.6903 14.0499 11.7103 13.9799 11.7103Z"
                fill="#E0E2EB"
              />
              <path
                d="M13.9799 14.3702C13.6599 14.3702 13.3699 14.1702 13.2699 13.8502C13.1399 13.4602 13.3599 13.0302 13.7499 12.9102C15.2799 12.4102 17.2799 12.2502 19.1099 12.4602C19.5199 12.5102 19.8199 12.8802 19.7699 13.2902C19.7199 13.7002 19.3499 14.0002 18.9399 13.9502C17.3199 13.7602 15.5499 13.9102 14.2099 14.3402C14.1299 14.3602 14.0499 14.3702 13.9799 14.3702Z"
                fill="#E0E2EB"
              />
              <path
                d="M13.9799 17.0301C13.6599 17.0301 13.3699 16.8301 13.2699 16.5101C13.1399 16.1201 13.3599 15.6901 13.7499 15.5701C15.2799 15.0701 17.2799 14.9101 19.1099 15.1201C19.5199 15.1701 19.8199 15.5401 19.7699 15.9501C19.7199 16.3601 19.3499 16.6501 18.9399 16.6101C17.3199 16.4201 15.5499 16.5701 14.2099 17.0001C14.1299 17.0201 14.0499 17.0301 13.9799 17.0301Z"
                fill="#E0E2EB"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_5792">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.700195)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>타기관도서대출</span>
        </a>
        <a href="/" className="nav-btn">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_5797)">
              <path
                d="M7.59 6.31026C6.81 5.53026 6.81 4.26026 7.59 3.48026C8.37 2.70026 9.64 2.70026 10.42 3.48026C11.2 4.26026 11.2 5.53026 10.42 6.31026C9.63 7.10026 8.37 7.10026 7.59 6.31026ZM6 16.9003V7.90026H4V16.9003C4 19.6603 6.24 21.9003 9 21.9003H15V19.9003H9C7.34 19.9003 6 18.5603 6 16.9003ZM20 20.9703L14.93 15.9003H11.5V12.2203C12.9 13.3703 15.1 14.3803 17 14.3803V12.2203C15.34 12.2403 13.39 11.3503 12.33 10.1803L10.93 8.63026C10.74 8.42026 10.5 8.25026 10.24 8.13026C9.95 7.99026 9.62 7.90026 9.28 7.90026H9.25C8.01 7.90026 7 8.91026 7 10.1503V15.9003C7 17.5603 8.34 18.9003 10 18.9003H15.07L18.57 22.4003L20 20.9703Z"
                fill="#E0E2EB"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_5797">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.900146)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>시설·좌석예약</span>
        </a>
      </div>
      <div className="mobile-nav">
        <div className="icon" onClick={handleShow}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 7.21851C22 6.76977 21.5523 6.40601 21 6.40601H3C2.44772 6.40601 2 6.76977 2 7.21851C2 7.66724 2.44772 8.03101 3 8.03101H21C21.5523 8.03101 22 7.66724 22 7.21851ZM2 12.906C2 12.4573 2.44772 12.0935 3 12.0935H21C21.5523 12.0935 22 12.4573 22 12.906C22 13.3547 21.5523 13.7185 21 13.7185H3C2.44772 13.7185 2 13.3547 2 12.906ZM2 18.5935C2 18.1448 2.44772 17.781 3 17.781H21C21.5523 17.781 22 18.1448 22 18.5935C22 19.0422 21.5523 19.406 21 19.406H3C2.44772 19.406 2 19.0422 2 18.5935Z"
              fill="#0A0046"
            />
          </svg>
        </div>
        <div className="logo">
          <img src={require("../images/logo.svg").default} alt="Logo" />
        </div>
        <div className="icon">
          <a href="/">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_38_3457)">
                <path
                  d="M10.3 8.10601C9.91 8.49601 9.91 9.11601 10.3 9.50601L12.2 11.406H3C2.45 11.406 2 11.856 2 12.406C2 12.956 2.45 13.406 3 13.406H12.2L10.3 15.306C9.91 15.696 9.91 16.316 10.3 16.706C10.69 17.096 11.31 17.096 11.7 16.706L15.29 13.116C15.68 12.726 15.68 12.096 15.29 11.706L11.7 8.10601C11.31 7.71601 10.69 7.71601 10.3 8.10601ZM20 19.406H13C12.45 19.406 12 19.856 12 20.406C12 20.956 12.45 21.406 13 21.406H20C21.1 21.406 22 20.506 22 19.406V5.40601C22 4.30601 21.1 3.40601 20 3.40601H13C12.45 3.40601 12 3.85601 12 4.40601C12 4.95601 12.45 5.40601 13 5.40601H20V19.406Z"
                  fill="#0A0046"
                />
              </g>
              <defs>
                <clipPath id="clip0_38_3457">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.406006)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <Offcanvas className="mobile-sidebar" show={show} onHide={handleClose}>
        <div className="canvas-header">
          <div className="notify">
            <a href="/">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3497 17.5359C10.5897 18.2259 9.41967 18.2259 8.65967 17.5259L8.54967 17.4259C3.29967 12.6759 -0.130335 9.56593 -0.000335195 5.68593C0.0596648 3.98593 0.929665 2.35593 2.33966 1.39593C4.97966 -0.404072 8.23967 0.435928 9.99967 2.49593C11.7597 0.435928 15.0197 -0.414072 17.6597 1.39593C19.0697 2.35593 19.9397 3.98593 19.9997 5.68593C20.1397 9.56593 16.6997 12.6759 11.4497 17.4459L11.3497 17.5359Z"
                  fill="#E03715"
                />
              </svg>
            </a>
            <a href="/">
              <svg
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.136 0.251953C8.35614 0.251953 5.32027 3.45846 5.31895 7.32419L5.28701 11.7955C4.86117 11.9748 4.55608 12.3153 4.36097 12.6951C4.08968 13.2234 4 13.8662 4 14.4329C4 14.8133 4.30842 15.1217 4.68888 15.1217H9.06372C9.41773 16.4005 10.7359 17.252 12.1453 17.252C13.5547 17.252 14.8729 16.4005 15.2269 15.1217H19.6011C19.9816 15.1217 20.29 14.8133 20.29 14.4329C20.29 13.8389 20.1642 13.1904 19.8596 12.6646C19.6483 12.2997 19.3335 11.973 18.9132 11.7977L18.9531 7.33286L18.9531 7.32671C18.9531 3.45986 15.9167 0.251953 12.136 0.251953Z"
                  fill="#E2EAE8"
                />
                <path
                  d="M17 2.04004C17.652 2.04004 18.2612 2.2406 18.7178 2.58887C19.1747 2.93743 19.4999 3.45521 19.5 4.06543C19.5 4.67566 19.1747 5.19338 18.7178 5.54199C18.2612 5.89028 17.652 6.0918 17 6.0918C16.348 6.0918 15.7388 5.89028 15.2822 5.54199C14.8253 5.19338 14.5 4.67566 14.5 4.06543C14.5001 3.45521 14.8253 2.93743 15.2822 2.58887C15.7388 2.2406 16.348 2.04004 17 2.04004Z"
                  fill="#E03715"
                  stroke="white"
                />
              </svg>
            </a>
          </div>
          <div className="drop-btns">
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="drop-bg-none"
                id="dropdown-basic"
              >
                English
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="drop-bg-success"
              >
                자과캠
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="close" onClick={handleClose}>
              <i class="fa-regular fa-xmark-large"></i>
            </div>
          </div>
        </div>
        <div className="sidenav-body">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="name">
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 6.40625H3C2.45 6.40625 2 5.95625 2 5.40625C2 4.85625 2.45 4.40625 3 4.40625H17C17.55 4.40625 18 4.85625 18 5.40625C18 5.95625 17.55 6.40625 17 6.40625ZM15 0.40625H5C4.45 0.40625 4 0.85625 4 1.40625C4 1.95625 4.45 2.40625 5 2.40625H15C15.55 2.40625 16 1.95625 16 1.40625C16 0.85625 15.55 0.40625 15 0.40625ZM20 10.4062V16.4062C20 17.5063 19.1 18.4062 18 18.4062H2C0.9 18.4062 0 17.5063 0 16.4062V10.4062C0 9.30625 0.9 8.40625 2 8.40625H18C19.1 8.40625 20 9.30625 20 10.4062Z"
                      fill="white"
                    />
                  </svg>
                  <span>자료</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="sub-items">
                  <a href="/"> Browse</a>
                </div>
                <div className="sub-items">
                  <a href="/"> Database</a>
                </div>
                <div className="sub-items">
                  <a href="/"> e-Book</a>
                </div>
                <div className="sub-items">
                  <a href="/"> DVD</a>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="name">
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 0.90625C14.55 0.90625 12.45 1.30625 11 2.40625C9.55 1.30625 7.45 0.90625 5.5 0.90625C4.05 0.90625 2.51 1.12625 1.22 1.69625C0.49 2.02625 0 2.73625 0 3.54625V14.8263C0 16.1263 1.22 17.0863 2.48 16.7663C3.46 16.5163 4.5 16.4062 5.5 16.4062C7.06 16.4062 8.72 16.6663 10.06 17.3263C10.66 17.6262 11.34 17.6262 11.93 17.3263C13.27 16.6562 14.93 16.4062 16.49 16.4062C17.49 16.4062 18.53 16.5163 19.51 16.7663C20.77 17.0963 21.99 16.1362 21.99 14.8263V3.54625C21.99 2.73625 21.5 2.02625 20.77 1.69625C19.49 1.12625 17.95 0.90625 16.5 0.90625ZM20 13.6362C20 14.2662 19.42 14.7262 18.8 14.6162C18.05 14.4762 17.27 14.4163 16.5 14.4163C14.8 14.4163 12.35 15.0662 11 15.9163V4.40625C12.35 3.55625 14.8 2.90625 16.5 2.90625C17.42 2.90625 18.33 2.99625 19.2 3.18625C19.66 3.28625 20 3.69625 20 4.16625V13.6362Z"
                      fill="white"
                    />
                    <path
                      d="M12.9799 7.41611C12.6599 7.41611 12.3699 7.2161 12.2699 6.8961C12.1399 6.5061 12.3599 6.07611 12.7499 5.95611C14.2899 5.45611 16.2799 5.29611 18.1099 5.50611C18.5199 5.55611 18.8199 5.92611 18.7699 6.33611C18.7199 6.74611 18.3499 7.04611 17.9399 6.99611C16.3199 6.80611 14.5499 6.9561 13.2099 7.3861C13.1299 7.3961 13.0499 7.41611 12.9799 7.41611Z"
                      fill="white"
                    />
                    <path
                      d="M12.9799 10.0763C12.6599 10.0763 12.3699 9.87626 12.2699 9.55626C12.1399 9.16626 12.3599 8.73626 12.7499 8.61626C14.2799 8.11626 16.2799 7.95626 18.1099 8.16626C18.5199 8.21626 18.8199 8.58626 18.7699 8.99626C18.7199 9.40626 18.3499 9.70626 17.9399 9.65626C16.3199 9.46626 14.5499 9.61626 13.2099 10.0463C13.1299 10.0663 13.0499 10.0763 12.9799 10.0763Z"
                      fill="white"
                    />
                    <path
                      d="M12.9799 12.7364C12.6599 12.7364 12.3699 12.5364 12.2699 12.2164C12.1399 11.8264 12.3599 11.3964 12.7499 11.2764C14.2799 10.7764 16.2799 10.6164 18.1099 10.8264C18.5199 10.8764 18.8199 11.2464 18.7699 11.6564C18.7199 12.0664 18.3499 12.3564 17.9399 12.3164C16.3199 12.1264 14.5499 12.2764 13.2099 12.7064C13.1299 12.7264 13.0499 12.7364 12.9799 12.7364Z"
                      fill="white"
                    />
                  </svg>

                  <span>연구･학습지원</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="sub-items">
                  <a href="/"> Browse</a>
                </div>
                <div className="sub-items">
                  <a href="/"> Database</a>
                </div>
                <div className="sub-items">
                  <a href="/"> e-Book</a>
                </div>
                <div className="sub-items">
                  <a href="/"> DVD</a>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <div className="name">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_8564)">
                      <path
                        d="M11 7.40625H13V9.40625H11V7.40625ZM11 11.4062H13V17.4062H11V11.4062ZM12 2.40625C6.48 2.40625 2 6.88625 2 12.4062C2 17.9263 6.48 22.4062 12 22.4062C17.52 22.4062 22 17.9263 22 12.4062C22 6.88625 17.52 2.40625 12 2.40625ZM12 20.4062C7.59 20.4062 4 16.8162 4 12.4062C4 7.99625 7.59 4.40625 12 4.40625C16.41 4.40625 20 7.99625 20 12.4062C20 16.8162 16.41 20.4062 12 20.4062Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_8564">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.40625)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>서비스 이용</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="sub-items">
                  <a href="/"> Browse</a>
                </div>
                <div className="sub-items">
                  <a href="/"> Database</a>
                </div>
                <div className="sub-items">
                  <a href="/"> e-Book</a>
                </div>
                <div className="sub-items">
                  <a href="/"> DVD</a>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <div className="name">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_52_6710)">
                      <path
                        d="M18 11.4062C18 12.0763 18 12.7362 18 13.4062C19.2 13.4062 20.76 13.4062 22 13.4062C22 12.7362 22 12.0763 22 11.4062C20.76 11.4062 19.2 11.4062 18 11.4062Z"
                        fill="white"
                      />
                      <path
                        d="M16 18.0163C16.96 18.7263 18.21 19.6662 19.2 20.4062C19.6 19.8763 20 19.3362 20.4 18.8062C19.41 18.0662 18.16 17.1263 17.2 16.4062C16.8 16.9463 16.4 17.4863 16 18.0163Z"
                        fill="white"
                      />
                      <path
                        d="M20.4 6.00625C20 5.47625 19.6 4.93625 19.2 4.40625C18.21 5.14625 16.96 6.08625 16 6.80625C16.4 7.33625 16.8 7.87625 17.2 8.40625C18.16 7.68625 19.41 6.75625 20.4 6.00625Z"
                        fill="white"
                      />
                      <path
                        d="M4 9.40625C2.9 9.40625 2 10.3063 2 11.4062V13.4062C2 14.5063 2.9 15.4062 4 15.4062H5V19.4062H7V15.4062H8L13 18.4062V6.40625L8 9.40625H4ZM9.03 11.1163L11 9.93625V14.8763L9.03 13.6962L8.55 13.4062H8H4V11.4062H8H8.55L9.03 11.1163Z"
                        fill="white"
                      />
                      <path
                        d="M15.5 12.4066C15.5 11.0766 14.92 9.87664 14 9.05664V15.7466C14.92 14.9366 15.5 13.7366 15.5 12.4066Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_52_6710">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.40625)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>오거서</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="sub-items">
                  <a href="/"> Browse</a>
                </div>
                <div className="sub-items">
                  <a href="/"> Database</a>
                </div>
                <div className="sub-items">
                  <a href="/"> e-Book</a>
                </div>
                <div className="sub-items">
                  <a href="/"> DVD</a>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Offcanvas>
      {/* <div className="fixed-head"> */}
      <div className="header">
        <div className="lg-container">
          <div className="header-row">
            <div className="logo">
              <img src={require("../images/logo.svg").default} alt="Logo" />
            </div>
            <div className="header-actions">
              <div className="lang-notify">
                <a href="/">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3536 20.596C12.5936 21.286 11.4236 21.286 10.6636 20.586L10.5536 20.486C5.30357 15.736 1.87357 12.626 2.00357 8.74599C2.06357 7.04599 2.93357 5.41599 4.34357 4.45599C6.98357 2.65599 10.2436 3.49599 12.0036 5.55599C13.7636 3.49599 17.0236 2.64599 19.6636 4.45599C21.0736 5.41599 21.9436 7.04599 22.0036 8.74599C22.1436 12.626 18.7036 15.736 13.4536 20.506L13.3536 20.596Z"
                      fill="#E03715"
                    />
                  </svg>
                </a>
                <a href="/">
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.13603 0.465332C4.35614 0.465332 1.32027 3.67184 1.31895 7.53756L1.28701 12.0089C0.861168 12.1882 0.556077 12.5286 0.360969 12.9085C0.0896825 13.4367 0 14.0796 0 14.6462C0 15.0267 0.308422 15.3351 0.68888 15.3351H5.06372C5.41773 16.6139 6.73589 17.4653 8.14531 17.4653C9.55474 17.4653 10.8729 16.6139 11.2269 15.3351H15.6011C15.9816 15.3351 16.29 15.0267 16.29 14.6462C16.29 14.0522 16.1642 13.4037 15.8596 12.878C15.6483 12.5131 15.3335 12.1864 14.9132 12.0111L14.9531 7.54624L14.9531 7.54009C14.9531 3.67324 11.9167 0.465332 8.13603 0.465332Z"
                      fill="#072B61"
                    />
                  </svg>
                </a>
                <div className="language-switcher">
                  <div className="language-list">
                    {language === "ko" && (
                      <button
                        onClick={switchToEnglish}
                        className="btn btn-primary"
                      >
                        ENG
                      </button>
                    )}
                    {language === "en" && (
                      <button
                        onClick={switchToKorean}
                        className="btn btn-light"
                      >
                        KOR
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <button className="btn btn-primary">
                Login
                <i class="fa-regular fa-arrow-right-to-bracket"></i>
              </button>
              <ButtonGroup aria-label="Basic example">
                <Button
                  variant={activeButton === "자과캠" ? "primary" : "light"}
                  onClick={() => setActiveButton("자과캠")}
                >
                  자과캠
                </Button>
                <Button
                  variant={activeButton === "인사캠" ? "primary" : "light"}
                  onClick={() => setActiveButton("인사캠")}
                >
                  인사캠
                </Button>
              </ButtonGroup>
              <button className="btn btn-light">
                <i class="fa-regular fa-grid-2"></i>
                전체메뉴
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main-menu" style={{position: "sticky", top: "0", zIndex: "999", backgroundColor:"white"}}>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto ">
              <NavItem
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                <NavDropdown
                  title="자료"
                  id="basic-nav-dropdown"
                  className="mega-menu"
                  show={show1}
                >
                  <div className="sm-container">
                    <div className="mega-menu-item-row">
                      <div className="mega-menu-items-list">
                        <div className="heading active">Browse</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>Browse</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>Browse</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>Browse</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="mega-menu-items-list">
                        <div className="heading ">Collections</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>핫북</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>신착자료</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>성균고전 100선</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>대한민국학술원 우수학술도서</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>한국출판문화산업진흥원 세종도서</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>북 큐레이션</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>개인문고</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="mega-menu-items-list">
                        <div className="heading ">SKKU Collections</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>SKKU 학위논문</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>SKKU Archive</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>희귀도서</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </NavDropdown>
              </NavItem>
              <NavItem
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <NavDropdown
                  title="연구학습지원"
                  id="basic-nav-dropdown"
                  className="mega-menu"
                  show={show2}
                >
                  <div className="sm-container">
                    <div className="mega-menu-item-row">
                      <div className="mega-menu-items-list">
                        <div className="heading active">정보활용교육</div>
                        {/* <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>Browse</li>
                                </ul>
                              </div>
                            </a>
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>Browse</li>
                                </ul>
                              </div>
                            </a>
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>Browse</li>
                                </ul>
                              </div>
                            </a> */}
                      </div>
                      <div className="mega-menu-items-list">
                        <div className="heading ">논문작성 및 출판지원</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>참고문헌스타일</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>참고문헌관리도구</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>논문투고절차</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>논문교열서비스</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>논문유사도검사</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>OA출판지원서비스</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="mega-menu-items-list">
                        <div className="heading ">연구성과분석</div>
                        {/* <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>SKKU 학위논문</li>
                                </ul>
                              </div>
                            </a>
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>SKKU Archive</li>
                                </ul>
                              </div>
                            </a>
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>희귀도서</li>
                                </ul>
                              </div>
                            </a> */}
                      </div>
                    </div>
                  </div>
                </NavDropdown>
              </NavItem>
              <NavItem
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <NavDropdown
                  title="서비스이용"
                  id="basic-nav-dropdown"
                  className="mega-menu"
                  show={show3}
                >
                  <div className="sm-container">
                    <div className="mega-menu-item-row">
                      <div className="mega-menu-items-list">
                        <div className="heading active">자료이용</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>대출/반납/연장/예약</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>북사이렌</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>자료구입신청</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>캠퍼스/타기관 도서대출</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>타기관 자료복사</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>타대학도서관 방문신청</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="mega-menu-items-list">
                        <div className="heading active">시설이용</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>일반열람실</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>그룹스터디룸</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>공동협업공간</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>무선랜</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>사물함</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="mega-menu-items-list">
                        <div className="heading active">이용자별 안내</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>학부생</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>대학원생</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>교수</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>졸업생</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>지역주민/외부등록이용자</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>장애학생</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="mega-menu-items-list">
                        <div className="heading ">모바일서비스</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>학술정보관 모바일앱</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>모바일학생증</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="mega-menu-items-list">
                        <div className="heading ">Proxy 서비스</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>전자자료 교외이용</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </NavDropdown>
              </NavItem>
              <NavItem
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
              >
                <NavDropdown
                  title="도서관안내·알림"
                  id="basic-nav-dropdown"
                  className="mega-menu"
                  show={show4}
                >
                  <div className="sm-container">
                    <div className="mega-menu-item-row">
                      <div className="mega-menu-items-list">
                        <div className="heading active">알림문의</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>공지사항</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="mega-menu-items-list">
                        <div className="heading ">학술정보관 소개</div>

                        <div className="row">
                          <div className="col-lg-6">
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>Ask Us</li>
                                </ul>
                              </div>
                            </a>
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>서비스별 문의</li>
                                </ul>
                              </div>
                            </a>
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>자료기증</li>
                                </ul>
                              </div>
                            </a>
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>조직/직원 안내</li>
                                </ul>
                              </div>
                            </a>
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>Annual Report</li>
                                </ul>
                              </div>
                            </a>
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>이용시간</li>
                                </ul>
                              </div>
                            </a>
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>층별안내</li>
                                </ul>
                              </div>
                            </a>
                          </div>
                          <div className="col-lg-6">
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>FaQ</li>
                                </ul>
                              </div>
                            </a>
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>도서관 캘린더</li>
                                </ul>
                              </div>
                            </a>
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>연혁</li>
                                </ul>
                              </div>
                            </a>
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>학술정보관 규정/이용지침/서식</li>
                                </ul>
                              </div>
                            </a>
                            <a href="/">
                              <div className="menu-item">
                                <ul>
                                  <li>학술정보관 방문/견학</li>
                                </ul>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavDropdown>
              </NavItem>
              <NavItem
                onMouseEnter={handleMouseEnter5}
                onMouseLeave={handleMouseLeave5}
              >
                <NavDropdown
                  title="오거서"
                  id="basic-nav-dropdown"
                  className="mega-menu"
                  show={show5}
                >
                  <div className="sm-container">
                    <div className="mega-menu-item-row">
                      <div className="mega-menu-items-list">
                        <div className="heading active">독서프로그램</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>AI도서추천</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>성균고전100선</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>독서인증서</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>오거서장학금</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>참여프로그램</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="mega-menu-items-list">
                        <div className="heading ">독서리뷰</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>리뷰쓰기</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>베스트리뷰</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>리뷰작가</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>나의리뷰</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="mega-menu-items-list">
                        <div className="heading ">아카이브</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>행사사진</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>오거서영상</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>저자특강</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>Book&talk</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>오거서후기</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </NavDropdown>
              </NavItem>
              <NavItem
                onMouseEnter={handleMouseEnter6}
                onMouseLeave={handleMouseLeave6}
              >
                <NavDropdown
                  title="발전기금"
                  id="basic-nav-dropdown"
                  className="mega-menu"
                  show={show6}
                >
                  <div className="sm-container">
                    <div className="mega-menu-item-row">
                      <div className="mega-menu-items-list">
                        <div className="heading">발전기금</div>
                        {/* <a href="/">
                            <div className="menu-item">
                              <ul>
                                <li>000</li>
                              </ul>
                            </div>
                          </a>
                          <a href="/">
                            <div className="menu-item">
                              <ul>
                                <li>000</li>
                              </ul>
                            </div>
                          </a>
                          <a href="/">
                            <div className="menu-item">
                              <ul>
                                <li>00000</li>
                              </ul>
                            </div>
                          </a> */}
                      </div>
                    </div>
                  </div>
                </NavDropdown>
              </NavItem>
              <NavItem
                onMouseEnter={handleMouseEnter7}
                onMouseLeave={handleMouseLeave7}
              >
                <NavDropdown
                  title="My Library"
                  id="basic-nav-dropdown"
                  className="mega-menu"
                  show={show7}
                >
                  <div className="sm-container">
                    <div className="mega-menu-item-row">
                      <div className="mega-menu-items-list">
                        <div className="heading active">My Dashboard</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>Database</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>e-Book</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>DVD</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="mega-menu-items-list">
                        <div className="heading ">개인공지</div>
                        {/* <a href="/">
                            <div className="menu-item">
                              <ul>
                                <li>0000</li>
                              </ul>
                            </div>
                          </a>
                          <a href="/">
                            <div className="menu-item">
                              <ul>
                                <li>0000</li>
                              </ul>
                            </div>
                          </a>
                          <a href="/">
                            <div className="menu-item">
                              <ul>
                                <li>0000</li>
                              </ul>
                            </div>
                          </a> */}
                      </div>
                      <div className="mega-menu-items-list">
                        <div className="heading ">개인정보관리</div>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>자료구입 신청현황</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>캠퍼스간 도서대출 현황</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>타기관 도서대출 이용현황</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>원문복사 이용현황</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>타기관 열람의뢰 현황</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>부재도서확인 이용현황</li>
                            </ul>
                          </div>
                        </a>
                        <a href="/">
                          <div className="menu-item">
                            <ul>
                              <li>서고도서 신청현황</li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </NavDropdown>
              </NavItem>

              {/* <Nav.Link href="/">연구학습지원</Nav.Link>
                <Nav.Link href="/">서비스이용</Nav.Link>
                <Nav.Link href="/">도서관안내·알림</Nav.Link>
                <Nav.Link href="/">오거서</Nav.Link>
                <Nav.Link href="/">발전기금</Nav.Link>
                <Nav.Link href="/">My Library</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="hero-section">
        <div className="md-container ">
          <div className="search-card">
            <div className="search-row">
              <div className="search-bar">
                <Form onSubmit={handleSearch}>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="명륜-ai로 검색"
                    className="custom-switch"
                  />
                  <Form.Control
                    className="search-input"
                    type="text"
                    value={query}
                    onFocus={() => setShowSearchCollapse(true)}
                    onBlur={() => setShowSearchCollapse(false)}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="키워드나 질문을 입력해 주세요."
                  />
                </Form>
              </div>
              <button className="btn btn-success">
                <i class="fa-regular fa-magnifying-glass"></i>검색
              </button>
            </div>
            {showSearchCollapse && <div className="search-collape">
                <p>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_5069)">
                      <path
                        d="M8.66671 3.86429V2.73096H10.6667L10 1.73762L10.6667 0.730957L7.33337 0.730957V3.86429L1.33337 8.06429L1.33337 14.731H6.00004V11.3976L8.02004 10.0643L10 11.3976V14.731H14.6667V8.06429L8.66671 3.86429Z"
                        fill="#454F6F"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5069">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.064209)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <b>우리과(소프트웨어공학과)</b>
                  <span>친구들은 친구들은 이런 질문을 많이 했어요!</span>
                </p>
                <div className="search-collape-cards-row">
                  <div className="search-collape-card">
                    <p>소프트웨어학과에서 가장 인기 있는 교양 과목은?</p>
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                  <div className="search-collape-card">
                    <p>소프트웨어학과에서 가장 인기 있는 교양 과목은?</p>
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                  <div className="search-collape-card">
                    <p>소프트웨어학과에서 가장 인기 있는 교양 과목은?</p>
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                  <div className="search-collape-card">
                    <p>소프트웨어학과에서 가장 인기 있는 교양 과목은?</p>
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                  <div className="search-collape-card">
                    <p>소프트웨어학과에서 가장 인기 있는 교양 과목은?</p>
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              </div>}
          </div>
          <div className="search-card-bottom">
            <p>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_5069)">
                  <path
                    d="M8.66671 3.86429V2.73096H10.6667L10 1.73762L10.6667 0.730957L7.33337 0.730957V3.86429L1.33337 8.06429L1.33337 14.731H6.00004V11.3976L8.02004 10.0643L10 11.3976V14.731H14.6667V8.06429L8.66671 3.86429Z"
                    fill="#454F6F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_5069">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 0.064209)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>
                우리과(소프트웨어공학과) 친구들은 친구들은 이런 질문을 많이
                했어요!
              </span>
            </p>
            <p>
              <i class="fa-regular fa-angle-left"></i>
              <span className="text-muted">
                소프트웨어학과에서 가장 인기 있는 교양 과목은?
              </span>
            </p>
            <p>
              <span className="text-dark">
                소프트웨어학과에서 필수적으로 배우는 프로그래밍 언어는?
              </span>
            </p>
            <p>
              <span className="text-muted">
                소프트웨어학과에서 가장 어려운 과목은?
              </span>
              <i class="fa-regular fa-angle-right"></i>
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className=" scroll-container">
        <div className="scroll-area">
          <div className="md-container">
            <div className="skku-library-card" id="hero">
              <div className="row">
                <div className="col-lg-7">
                  <div className="content">
                    <p>SKKU Library</p>
                    <h2>성균관대학교 도서관,</h2>
                    <h1>스마트한 학습의 시작!</h1>
                    <h6>운영시간부터 좌석 예약까지, 필요한 정보를 한눈에!</h6>
                    <div className="circles-row">
                      <div className="circle">
                        <p>연체 대출건</p>
                        <h4>2건</h4>
                      </div>
                      <div className="circle">
                        <p>자주 예약</p>
                        <h4>TP룸1</h4>
                      </div>
                      <div className="circle">
                        <p>제 2열람실</p>
                        <h4>158석 </h4>
                      </div>
                      <div className="circle">
                        <p>주문 도서 도착</p>
                        <h4>북사이렌</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="skku-inner-card">
                        <img
                          src={require("../images/clock.png")}
                          alt="img"
                          className="clock"
                        />
                        <div className="heading">
                          <h6>학술정보관 운영시간</h6>
                          <a href="/">+ 더보기</a>
                        </div>
                        <div className="date">
                          <i class="fa-regular fa-calendar-range"></i>
                          <p>
                            오늘 12월9일(월)은 <b> 09:00 ~ 21:40 </b> 까지
                            운영됩니다.
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-4">
                            <div className="items">
                              <badge className="badge-light">자료실</badge>
                              <h6>09:00 ~ 21:40</h6>
                              <p>
                                잔여 : <span> 100</span>석
                              </p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="items">
                              <badge className="badge-light">PC</badge>
                              <h6>09:00 ~ 21:40</h6>
                              <p>
                                잔여 : <span> 50</span>석
                              </p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="items">
                              <badge className="badge-light">열람실</badge>
                              <h6>09:00 ~ 21:40</h6>
                              <p>
                                잔여 : <span> 1,000</span>석
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="skku-inner-card">
                        <img
                          src={require("../images/phone.png")}
                          alt="img"
                          className="phone"
                        />
                        <div className="heading">
                          <h6>주요전화번호 </h6>
                          <a href="/">+ 더보기</a>
                        </div>
                        <div className="date">
                          <i class="fa-regular fa-calendar-range"></i>
                          <p>
                            전화 응대 시간은 <b> 09:00 ~ 18:00</b> 까지
                            운영됩니다.
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-4">
                            <div className="items">
                              <badge className="badge-light">자료이용</badge>
                              <h6>도서 대출.반납.예약.연장</h6>
                              <p>
                                <i class="fa-solid fa-phone"></i> 02-760-1196,
                                1206
                              </p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="items">
                              <badge className="badge-light">시설이용</badge>
                              <h6>스터디룸, 케랄</h6>
                              <p>
                                <i class="fa-solid fa-phone"></i> 02-760-1193
                              </p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="items">
                              <badge className="badge-light">기타</badge>
                              <h6>학위논문 온라인 제출</h6>
                              <p>
                                <i class="fa-solid fa-phone"></i>{" "}
                                031-299-4026/4034
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-area">
          <div className="md-container">
            <div className="skku-section " id="research">
              <div className="left-heading">
                <h6>SKKU</h6>
                <h2>Research</h2>
                <p>+ 더보기</p>
                <br />
                <br />
                <p>최근 성균관대학교에서 발행한 신규 논문입니다.</p>
              </div>
              <div className="tabs-section">
                <Tabs
                  variant="pills"
                  defaultActiveKey="newest"
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey="newest" title="Newest">
                    <div className="research-card-row">
                      <div className="research-card">
                        <div className="scopus-row">
                          <i class="fa-light fa-heart"></i>
                          <span>|</span>
                          <p>
                            <b>SCOPUS</b>
                            6회인용
                          </p>
                          <span>|</span>
                          <p>
                            <b>KCI</b>
                            1회인용
                          </p>
                        </div>
                        <h4>
                          Local & Federated Learning at the network edge for...
                        </h4>
                        <h5>
                          <i class="fa-light fa-book-open-cover"></i>
                          <span>Future Generation Computer Systems 2022</span>
                        </h5>
                        <h5>
                          <i class="fa-solid fa-user"></i>
                          <span>
                            Harth N.,Anagnostopoulos C.,Voegel H.J.,Kolomvatsos
                            K.
                          </span>
                        </h5>
                        <button className="btn btn-primary w-100">
                          PDF다운로드 <i class="fa-solid fa-down-to-line"></i>
                        </button>
                      </div>
                      <div className="research-card">
                        <div className="scopus-row">
                          <i class="fa-light fa-heart"></i>
                          <span>|</span>
                          <p>
                            <b>SCOPUS</b>
                            6회인용
                          </p>
                          <span>|</span>
                          <p>
                            <b>KCI</b>
                            1회인용
                          </p>
                        </div>
                        <h4>
                          Local & Federated Learning at the network edge for...
                        </h4>
                        <h5>
                          <i class="fa-light fa-book-open-cover"></i>
                          <span>Future Generation Computer Systems 2022</span>
                        </h5>
                        <h5>
                          <i class="fa-solid fa-user"></i>
                          <span>
                            Harth N.,Anagnostopoulos C.,Voegel H.J.,Kolomvatsos
                            K.
                          </span>
                        </h5>
                        <button className="btn btn-primary w-100">
                          PDF다운로드 <i class="fa-solid fa-down-to-line"></i>
                        </button>
                      </div>
                      <div className="research-card">
                        <div className="scopus-row">
                          <i class="fa-light fa-heart"></i>
                          <span>|</span>
                          <p>
                            <b>SCOPUS</b>
                            6회인용
                          </p>
                          <span>|</span>
                          <p>
                            <b>KCI</b>
                            1회인용
                          </p>
                        </div>
                        <h4>
                          Local & Federated Learning at the network edge for...
                        </h4>
                        <h5>
                          <i class="fa-light fa-book-open-cover"></i>
                          <span>Future Generation Computer Systems 2022</span>
                        </h5>
                        <h5>
                          <i class="fa-solid fa-user"></i>
                          <span>
                            Harth N.,Anagnostopoulos C.,Voegel H.J.,Kolomvatsos
                            K.
                          </span>
                        </h5>
                        <button className="btn btn-primary w-100">
                          PDF다운로드 <i class="fa-solid fa-down-to-line"></i>
                        </button>
                      </div>
                      <div className="research-card">
                        <div className="scopus-row">
                          <i class="fa-light fa-heart"></i>
                          <span>|</span>
                          <p>
                            <b>SCOPUS</b>
                            6회인용
                          </p>
                          <span>|</span>
                          <p>
                            <b>KCI</b>
                            1회인용
                          </p>
                        </div>
                        <h4>
                          Local & Federated Learning at the network edge for...
                        </h4>
                        <h5>
                          <i class="fa-light fa-book-open-cover"></i>
                          <span>Future Generation Computer Systems 2022</span>
                        </h5>
                        <h5>
                          <i class="fa-solid fa-user"></i>
                          <span>
                            Harth N.,Anagnostopoulos C.,Voegel H.J.,Kolomvatsos
                            K.
                          </span>
                        </h5>
                        <button className="btn btn-primary w-100">
                          PDF다운로드 <i class="fa-solid fa-down-to-line"></i>
                        </button>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="highlycited" title="Highly cited">
                    <div className="research-card-row">
                      <div className="research-card">
                        <div className="scopus-row">
                          <i class="fa-light fa-heart"></i>
                          <span>|</span>
                          <p>
                            <b>SCOPUS</b>
                            6회인용
                          </p>
                          <span>|</span>
                          <p>
                            <b>KCI</b>
                            1회인용
                          </p>
                        </div>
                        <h4>
                          Local & Federated Learning at the network edge for...
                        </h4>
                        <h5>
                          <i class="fa-light fa-book-open-cover"></i>
                          <span>Future Generation Computer Systems 2022</span>
                        </h5>
                        <h5>
                          <i class="fa-solid fa-user"></i>
                          <span>
                            Harth N.,Anagnostopoulos C.,Voegel H.J.,Kolomvatsos
                            K.
                          </span>
                        </h5>
                        <button className="btn btn-primary w-100">
                          PDF다운로드 <i class="fa-solid fa-down-to-line"></i>
                        </button>
                      </div>
                      <div className="research-card">
                        <div className="scopus-row">
                          <i class="fa-light fa-heart"></i>
                          <span>|</span>
                          <p>
                            <b>SCOPUS</b>
                            6회인용
                          </p>
                          <span>|</span>
                          <p>
                            <b>KCI</b>
                            1회인용
                          </p>
                        </div>
                        <h4>
                          Local & Federated Learning at the network edge for...
                        </h4>
                        <h5>
                          <i class="fa-light fa-book-open-cover"></i>
                          <span>Future Generation Computer Systems 2022</span>
                        </h5>
                        <h5>
                          <i class="fa-solid fa-user"></i>
                          <span>
                            Harth N.,Anagnostopoulos C.,Voegel H.J.,Kolomvatsos
                            K.
                          </span>
                        </h5>
                        <button className="btn btn-primary w-100">
                          PDF다운로드 <i class="fa-solid fa-down-to-line"></i>
                        </button>
                      </div>
                      <div className="research-card">
                        <div className="scopus-row">
                          <i class="fa-light fa-heart"></i>
                          <span>|</span>
                          <p>
                            <b>SCOPUS</b>
                            6회인용
                          </p>
                          <span>|</span>
                          <p>
                            <b>KCI</b>
                            1회인용
                          </p>
                        </div>
                        <h4>
                          Local & Federated Learning at the network edge for...
                        </h4>
                        <h5>
                          <i class="fa-light fa-book-open-cover"></i>
                          <span>Future Generation Computer Systems 2022</span>
                        </h5>
                        <h5>
                          <i class="fa-solid fa-user"></i>
                          <span>
                            Harth N.,Anagnostopoulos C.,Voegel H.J.,Kolomvatsos
                            K.
                          </span>
                        </h5>
                        <button className="btn btn-primary w-100">
                          PDF다운로드 <i class="fa-solid fa-down-to-line"></i>
                        </button>
                      </div>
                      <div className="research-card">
                        <div className="scopus-row">
                          <i class="fa-light fa-heart"></i>
                          <span>|</span>
                          <p>
                            <b>SCOPUS</b>
                            6회인용
                          </p>
                          <span>|</span>
                          <p>
                            <b>KCI</b>
                            1회인용
                          </p>
                        </div>
                        <h4>
                          Local & Federated Learning at the network edge for...
                        </h4>
                        <h5>
                          <i class="fa-light fa-book-open-cover"></i>
                          <span>Future Generation Computer Systems 2022</span>
                        </h5>
                        <h5>
                          <i class="fa-solid fa-user"></i>
                          <span>
                            Harth N.,Anagnostopoulos C.,Voegel H.J.,Kolomvatsos
                            K.
                          </span>
                        </h5>
                        <button className="btn btn-primary w-100">
                          PDF다운로드 <i class="fa-solid fa-down-to-line"></i>
                        </button>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-area">
          <div className="md-container">
            <div className="skku-section " id="books">
              <div className="left-heading">
                <h2>추천과 트렌드 한눈에 보기</h2>
                <p>+ 더보기</p>
                <br />
                <br />
                <p>
                  이번 달 가장 많이 대출된 인기 자료를 만나보세요! 독자들의
                  선택을 받은 최고의 자료 목록입니다.
                </p>
              </div>
              <div className="tabs-section">
                <Tabs
                  variant="pills"
                  defaultActiveKey="best1"
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey="best1" title="대출 Best">
                    <div className="best-cards-row">
                      <div className="best-card">
                        <div className="banner">
                          <div className="tag">1</div>
                          <img src={require("../images/b1.png")} alt="img" />
                        </div>
                        <p>소년이 온다</p>
                      </div>
                      <div className="best-card">
                        <div className="banner">
                          <div className="tag">2</div>
                          <img src={require("../images/b2.png")} alt="img" />
                        </div>
                        <p>소년이 온다</p>
                      </div>
                      <div className="best-card">
                        <div className="banner">
                          <div className="tag">3</div>
                          <img src={require("../images/b3.png")} alt="img" />
                        </div>
                        <p>소년이 온다</p>
                      </div>
                      <div className="best-card">
                        <div className="banner">
                          <div className="tag">4</div>
                          <img src={require("../images/b4.png")} alt="img" />
                        </div>
                        <p>소년이 온다</p>
                      </div>
                      <div className="best-card">
                        <div className="banner">
                          <div className="tag">5</div>
                          <img src={require("../images/b5.png")} alt="img" />
                        </div>
                        <p>소년이 온다</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="best2" title="우리과 Best">
                    <div className="best-cards-row">
                      <div className="best-card">
                        <div className="banner">
                          <div className="tag">1</div>
                          <img src={require("../images/b1.png")} alt="img" />
                        </div>
                        <p>소년이 온다</p>
                      </div>
                      <div className="best-card">
                        <div className="banner">
                          <div className="tag">2</div>
                          <img src={require("../images/b2.png")} alt="img" />
                        </div>
                        <p>소년이 온다</p>
                      </div>
                      <div className="best-card">
                        <div className="banner">
                          <div className="tag">5</div>
                          <img src={require("../images/b5.png")} alt="img" />
                        </div>
                        <p>소년이 온다</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="best3" title="학년 Best">
                    <div className="best-cards-row">
                      <div className="best-card">
                        <div className="banner">
                          <div className="tag">1</div>
                          <img src={require("../images/b1.png")} alt="img" />
                        </div>
                        <p>소년이 온다</p>
                      </div>
                      <div className="best-card">
                        <div className="banner">
                          <div className="tag">2</div>
                          <img src={require("../images/b2.png")} alt="img" />
                        </div>
                        <p>소년이 온다</p>
                      </div>
                      <div className="best-card">
                        <div className="banner">
                          <div className="tag">3</div>
                          <img src={require("../images/b3.png")} alt="img" />
                        </div>
                        <p>소년이 온다</p>
                      </div>
                      <div className="best-card">
                        <div className="banner">
                          <div className="tag">5</div>
                          <img src={require("../images/b5.png")} alt="img" />
                        </div>
                        <p>소년이 온다</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="best4" title="주제별 Trend Best">
                    <div className="best-cards-row">
                      <div className="best-card">
                        <div className="banner">
                          <div className="tag">1</div>
                          <img src={require("../images/b1.png")} alt="img" />
                        </div>
                        <p>소년이 온다</p>
                      </div>
                      <div className="best-card">
                        <div className="banner">
                          <div className="tag">2</div>
                          <img src={require("../images/b2.png")} alt="img" />
                        </div>
                        <p>소년이 온다</p>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-area">
          <div className="md-container">
            <div className="skku-section " id="review">
              <div className="left-heading">
                <h6>오거서가 선정한</h6>
                <h2>베스트 리뷰 & 리뷰 작가</h2>
                <br />
                <br />
                <div className="review-nav">
                  <div className="nav-item">
                    <svg
                      width="32"
                      height="25"
                      viewBox="0 0 32 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_5513)">
                        <path
                          d="M16.0352 9.2168L16.0674 9.2373L22.1992 15.0303C22.6556 15.4614 23.2936 15.6382 23.9023 15.5078L24.0234 15.4775L27.9727 14.3564C28.0364 14.3383 28.0995 14.3859 28.0996 14.4521V23.9355C28.0996 23.9908 28.0552 24.0352 28 24.0352H4C3.94477 24.0352 3.90039 23.9908 3.90039 23.9355V14.46C3.90039 14.4102 3.9357 14.3703 3.98047 14.3613L4.02734 14.3633L7.9248 15.4922C8.52981 15.6673 9.17924 15.53 9.66113 15.1328L9.75586 15.0498L15.9307 9.2373C15.9595 9.21026 16.0003 9.20322 16.0352 9.2168Z"
                          stroke="#CDD2E0"
                          stroke-width="1.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 3.24707C16.882 3.24711 17.5898 3.95733 17.5898 4.8252C17.5898 5.69314 16.8821 6.40425 16 6.4043C15.1179 6.4043 14.4102 5.69316 14.4102 4.8252C14.4102 3.9573 15.1179 3.24707 16 3.24707Z"
                          stroke="#CDD2E0"
                          stroke-width="1.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.90332 8.6416C3.78536 8.64165 4.49307 9.35186 4.49316 10.2197C4.49316 11.0877 3.78542 11.7988 2.90332 11.7988C2.02118 11.7988 1.31348 11.0877 1.31348 10.2197C1.31357 9.35183 2.02124 8.6416 2.90332 8.6416Z"
                          stroke="#CDD2E0"
                          stroke-width="1.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M29.0967 8.6416C29.9787 8.64165 30.6864 9.35186 30.6865 10.2197C30.6865 11.0877 29.9788 11.7988 29.0967 11.7988C28.2145 11.7988 27.5068 11.0877 27.5068 10.2197C27.5069 9.35183 28.2146 8.6416 29.0967 8.6416Z"
                          stroke="#CDD2E0"
                          stroke-width="1.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_5513">
                          <rect
                            width="32"
                            height="24"
                            fill="white"
                            transform="translate(0 0.935547)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <span>베스트 리뷰</span>
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_5519)">
                        <path
                          d="M21.3467 15.6021H5.33337V18.2687H21.3467V22.2687L26.6667 16.9354L21.3467 11.6021V15.6021Z"
                          fill="#CDD2E0"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_5519">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(0 0.935547)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="nav-item">
                    <svg
                      width="32"
                      height="25"
                      viewBox="0 0 32 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_5521)">
                        <rect
                          x="4"
                          y="2.93555"
                          width="24"
                          height="14"
                          rx="1"
                          fill="#ADDD1D"
                        />
                        <path
                          d="M15 23.9355V15.9355H24.5L15 23.9355Z"
                          fill="#ADDD1D"
                        />
                        <path
                          d="M25.8994 0.935547H6.1006C4.39152 0.935547 3 2.33164 3 4.04634V15.4294C3 17.1441 4.39152 18.5402 6.1006 18.5402H16.0895C16.6265 18.5402 17.0653 18.0999 17.0653 17.5612C17.0653 17.0224 16.6265 16.5822 16.0895 16.5822H6.1006C5.46547 16.5822 4.94581 16.0608 4.94581 15.4236V4.04634C4.94581 3.40912 5.46547 2.88776 6.1006 2.88776H25.8936C26.5288 2.88776 27.0484 3.40912 27.0484 4.04634V15.4294C27.0484 16.0666 26.5288 16.588 25.8936 16.588H22.8508C22.6025 16.588 22.36 16.6865 22.181 16.8602L15.4832 23.2498C15.0906 23.6206 15.0791 24.2404 15.4486 24.6343C15.6391 24.8371 15.899 24.9355 16.153 24.9355C16.3955 24.9355 16.638 24.8487 16.8228 24.6633L23.2376 18.5402H25.8879C27.5969 18.5402 28.9884 17.1441 28.9884 15.4294V4.04634C28.9884 2.33164 27.5969 0.935547 25.8879 0.935547H25.8994Z"
                          fill="#00322A"
                        />
                        <path
                          d="M20.3044 7.71894L17.9313 7.37137L16.8689 5.21641C16.7015 4.88042 16.3724 4.67188 15.9971 4.67188C15.6218 4.67188 15.2927 4.88042 15.1252 5.21641L14.0628 7.37137L11.6897 7.71894C11.3202 7.77108 11.0199 8.02597 10.9045 8.38513C10.789 8.73849 10.8814 9.12082 11.1527 9.38151L12.8676 11.0614L12.4634 13.4307C12.3999 13.8015 12.55 14.1664 12.8503 14.3866C13.0235 14.5082 13.2198 14.5719 13.4219 14.5719C13.5778 14.5719 13.7337 14.5372 13.8723 14.4561L15.9913 13.3381L18.1103 14.4561C18.4394 14.6299 18.8321 14.6009 19.1323 14.3808C19.4326 14.1607 19.5827 13.7957 19.5192 13.425L19.115 11.0557L20.8298 9.37571C21.0954 9.11503 21.1936 8.7327 21.0781 8.37933C20.9626 8.02597 20.6624 7.77108 20.2929 7.71315L20.3044 7.71894Z"
                          fill="white"
                        />
                        <path
                          d="M20.3042 7.71894L17.9311 7.37137L16.8687 5.21641C16.7012 4.88042 16.3721 4.67188 15.9968 4.67188C15.6215 4.67188 15.2924 4.88042 15.125 5.21641L14.0626 7.37137L11.6895 7.71894C11.3199 7.77108 11.0197 8.02597 10.9042 8.38513C10.7887 8.73849 10.8811 9.12082 11.1525 9.38151L12.8674 11.0614L12.4632 13.4307C12.3997 13.8015 12.5498 14.1664 12.85 14.3866C13.0233 14.5082 13.2196 14.5719 13.4217 14.5719C13.5776 14.5719 13.7334 14.5372 13.872 14.4561L15.9911 13.3381L18.1101 14.4561C18.4392 14.6299 18.8318 14.6009 19.1321 14.3808C19.4323 14.1606 19.5824 13.7957 19.5189 13.425L19.1147 11.0557L20.8296 9.37571C21.0952 9.11503 21.1934 8.7327 21.0779 8.37933C20.9624 8.02597 20.6622 7.77108 20.2926 7.71315L20.3042 7.71894ZM17.8387 10.1635C17.6078 10.3895 17.5038 10.7081 17.5616 11.0267L17.8214 12.5502L16.453 11.8319C16.3144 11.7566 16.1585 11.7218 16.0026 11.7218C15.8467 11.7218 15.6908 11.7566 15.5522 11.8319L14.1896 12.5502L14.4494 11.0209C14.5014 10.7081 14.3974 10.3837 14.1723 10.1578L13.0694 9.08027L14.5938 8.86014C14.9113 8.8138 15.1827 8.61684 15.3271 8.3272L16.0084 6.9369L16.6897 8.3272C16.834 8.61684 17.1054 8.8138 17.423 8.86014L18.9473 9.08027L17.8445 10.1578L17.8387 10.1635Z"
                          fill="#00322A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_5521">
                          <rect
                            width="26"
                            height="24"
                            fill="white"
                            transform="translate(3 0.935547)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-dark">리뷰 작가</span>
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_5535)">
                        <path
                          d="M21.3467 15.6021H5.33337V18.2687H21.3467V22.2687L26.6667 16.9354L21.3467 11.6021V15.6021Z"
                          fill="#2D2F3E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_5535">
                          <rect
                            width="32"
                            height="32"
                            fill="white"
                            transform="translate(0 0.935547)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="review-section">
                <div className="review-heading">
                  <svg
                    width="32"
                    height="25"
                    viewBox="0 0 32 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_5610)">
                      <rect
                        x="4"
                        y="2.93555"
                        width="24"
                        height="14"
                        rx="1"
                        fill="#ADDD1D"
                      />
                      <path
                        d="M15 23.9355V15.9355H24.5L15 23.9355Z"
                        fill="#ADDD1D"
                      />
                      <path
                        d="M25.8994 0.935547H6.1006C4.39152 0.935547 3 2.33164 3 4.04634V15.4294C3 17.1441 4.39152 18.5402 6.1006 18.5402H16.0895C16.6265 18.5402 17.0653 18.0999 17.0653 17.5612C17.0653 17.0224 16.6265 16.5822 16.0895 16.5822H6.1006C5.46547 16.5822 4.94581 16.0608 4.94581 15.4236V4.04634C4.94581 3.40912 5.46547 2.88776 6.1006 2.88776H25.8936C26.5288 2.88776 27.0484 3.40912 27.0484 4.04634V15.4294C27.0484 16.0666 26.5288 16.588 25.8936 16.588H22.8508C22.6025 16.588 22.36 16.6865 22.181 16.8602L15.4832 23.2498C15.0906 23.6206 15.0791 24.2404 15.4486 24.6343C15.6391 24.8371 15.899 24.9355 16.153 24.9355C16.3955 24.9355 16.638 24.8487 16.8228 24.6633L23.2376 18.5402H25.8879C27.5969 18.5402 28.9884 17.1441 28.9884 15.4294V4.04634C28.9884 2.33164 27.5969 0.935547 25.8879 0.935547H25.8994Z"
                        fill="#00322A"
                      />
                      <path
                        d="M20.3044 7.71894L17.9313 7.37137L16.8689 5.21641C16.7015 4.88042 16.3724 4.67188 15.9971 4.67188C15.6218 4.67188 15.2927 4.88042 15.1252 5.21641L14.0628 7.37137L11.6897 7.71894C11.3202 7.77108 11.0199 8.02597 10.9045 8.38513C10.789 8.73849 10.8814 9.12082 11.1527 9.38151L12.8676 11.0614L12.4634 13.4307C12.3999 13.8015 12.55 14.1664 12.8503 14.3866C13.0235 14.5082 13.2198 14.5719 13.4219 14.5719C13.5778 14.5719 13.7337 14.5372 13.8723 14.4561L15.9913 13.3381L18.1103 14.4561C18.4394 14.6299 18.8321 14.6009 19.1323 14.3808C19.4326 14.1607 19.5827 13.7957 19.5192 13.425L19.115 11.0557L20.8298 9.37571C21.0954 9.11503 21.1936 8.7327 21.0781 8.37933C20.9626 8.02597 20.6624 7.77108 20.2929 7.71315L20.3044 7.71894Z"
                        fill="white"
                      />
                      <path
                        d="M20.3042 7.71894L17.9311 7.37137L16.8687 5.21641C16.7012 4.88042 16.3721 4.67188 15.9968 4.67188C15.6215 4.67188 15.2924 4.88042 15.125 5.21641L14.0626 7.37137L11.6895 7.71894C11.3199 7.77108 11.0197 8.02597 10.9042 8.38513C10.7887 8.73849 10.8811 9.12082 11.1525 9.38151L12.8674 11.0614L12.4632 13.4307C12.3997 13.8015 12.5498 14.1664 12.85 14.3866C13.0233 14.5082 13.2196 14.5719 13.4217 14.5719C13.5776 14.5719 13.7334 14.5372 13.872 14.4561L15.9911 13.3381L18.1101 14.4561C18.4392 14.6299 18.8318 14.6009 19.1321 14.3808C19.4323 14.1606 19.5824 13.7957 19.5189 13.425L19.1147 11.0557L20.8296 9.37571C21.0952 9.11503 21.1934 8.7327 21.0779 8.37933C20.9624 8.02597 20.6622 7.77108 20.2926 7.71315L20.3042 7.71894ZM17.8387 10.1635C17.6078 10.3895 17.5038 10.7081 17.5616 11.0267L17.8214 12.5502L16.453 11.8319C16.3144 11.7566 16.1585 11.7218 16.0026 11.7218C15.8467 11.7218 15.6908 11.7566 15.5522 11.8319L14.1896 12.5502L14.4494 11.0209C14.5014 10.7081 14.3974 10.3837 14.1723 10.1578L13.0694 9.08027L14.5938 8.86014C14.9113 8.8138 15.1827 8.61684 15.3271 8.3272L16.0084 6.9369L16.6897 8.3272C16.834 8.61684 17.1054 8.8138 17.423 8.86014L18.9473 9.08027L17.8445 10.1578L17.8387 10.1635Z"
                        fill="#00322A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5610">
                        <rect
                          width="26"
                          height="24"
                          fill="white"
                          transform="translate(3 0.935547)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <b>리뷰 작가</b>
                  <span>Review Author</span>
                </div>
                <AuthorSlider />
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-area">
          <div className="md-container">
            <div className="skku-section " id="project">
              <div className="left-heading">
                <h3>Love Project1</h3>
                <h2>사랑해서가</h2>
                <p>+ 더보기</p>
              </div>
              <div className="tabs-section">
                <div className="project-card-row">
                  <div className="project-card">
                    <div className="banner">
                      <img src={require("../images/p1.png")} alt="img" />
                    </div>
                    <p>소프트웨어공학과 김상희</p>
                  </div>
                  <div className="project-card">
                    <div className="banner">
                      <img src={require("../images/p2.png")} alt="img" />
                    </div>
                    <p>철학과 김명륜</p>
                  </div>
                  <div className="project-card">
                    <div className="banner">
                      <img src={require("../images/p3.png")} alt="img" />
                    </div>
                    <p>영어교육과 홍길동</p>
                  </div>
                  <div className="project-card">
                    <div className="banner">
                      <img src={require("../images/p4.png")} alt="img" />
                    </div>
                    <p>산업공학과 김영희</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-area">
  <div className="md-container">
  <div className="blog-slider" id="blog">
  {getVisibleCards().map((card, index) => (
    <div
      key={card.id}
      className={
        card.position === "center"
          ? "blog-card-center"
          : "blog-card"
      }
    >
      {card.position === "center" ? (
        <div className="content">
          <h3>{card.title}</h3>
          <button className="btn btn-announcement">
            <b>+ 더보기</b>
            <span>|</span>
            <span>+ 더보기</span>
          </button>
          <h1>{card.heading}</h1>
          <p>{card.content}</p>
          <p>{card.date}</p>
        </div>
      ) : (
        <>
          <div>
            <h3>{card.number}</h3>
            <h2>{card.title}</h2>
          </div>
          <p>{card.date}</p>
        </>
      )}
    </div>
  ))}
</div>

  </div>
</div>

        <div className="scroll-area">
          <div className="d-bottom">
              <a href="/">주요전화번호</a>
              <span>|</span>
              <a href="/">개인정보처리방침</a>
              <span>|</span>
              <a href="/">이메일무단수집거부</a>
            </div>
            <div className="d-footer">
              <div className="footer-row">
                <div className="about">
                  <div>
                    <img
                      src={require("../images/logo2.png")}
                      alt="img"
                      className="f-logo"
                    />
                  </div>
                  <div>
                    <p>
                      (03063) 서울시 종로구 성균관로 25-2 성균관대학교
                      중앙학술정보관
                    </p>
                    <p>COPYRIGHT © 2025 SKKU LIBRARY. ALL RIGHTS RESERVED.</p>
                  </div>
                </div>
                <div className="social">
                  <a href="/">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                        fill="#B1B7CC"
                      />
                      <path
                        d="M21 20H18V24H21V36H26V24H29.642L30 20H26V18.333C26 17.378 26.192 17 27.115 17H30V12H26.192C22.596 12 21 13.583 21 16.615V20Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      Family Site
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="m-footer">
              <div className="f-top">
                <div className="f-logo">
                  <img src={require("../images/logo2.png")} alt="img" />
                </div>
                <div className="f-nav-sm">
                  <a href="/">학술정보관</a>
                  <a href="/">개인정보처리방침</a>
                  <a href="/">독서인증서</a>
                  <a href="/">사이트맵</a>
                </div>
              </div>
              <div className="f-mid">
                <div>
                  <p>
                    서울시 종로구 성균관로 25-2 성균관대학교 중앙학술정보관 3F
                    인문학술정보팀 (우 03063)
                  </p>
                  <p>
                    <span>Tel. 02-760-1207</span>
                    <span>Fax. 02-760-1197</span>
                  </p>
                </div>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Family Site
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <p>COPYRIGHT © 2025 SKKU LIBRARY. ALL RIGHTS RESERVED.</p>
            </div>
          <div className="footer">
            <div className="footer-top">
              <div className="lg-container">
                <div className="footer-nav">
                  <a href="/" className="nav-item">
                    사이트맵
                  </a>
                  <a href="/" className="nav-item">
                    S-Space
                  </a>
                  <a href="/" className="nav-item">
                    RISS
                  </a>
                  <a href="/" className="nav-item">
                    ScienceON
                  </a>
                  <a href="/" className="nav-item">
                    외국학술지 지원센터 (FRIC)
                  </a>
                  <a href="/" className="nav-item">
                    국립중앙도서관
                  </a>
                  <a href="/" className="nav-item">
                    국회도서관
                  </a>
                  <a href="/" className="nav-item">
                    서울대학교
                  </a>
                  <a href="/" className="nav-item">
                    서울대학교 포털
                  </a>
                  <a href="/" className="nav-item">
                    서울대 도서관 친구들
                  </a>
                </div>
              </div>
            </div>
            <div className="lg-container">
              <div className="footer-body">
                <div className="content">
                  <div className=" f-brand">
                    <img
                      src={require("../images/logo2.svg").default}
                      alt="Logo"
                    />
                    <h5>
                      (03063) 서울시 종로구 성균관로 25-2 성균관대학교
                      중앙학술정보관
                    </h5>
                  </div>
                  <p>08826 서울시 관악구 관악로 1 서울대학교 중앙도서관</p>
                  <p>대표전화 02-880-8001, 5325</p>
                  <p>
                    단체명 : 서울대학교 중앙도서관 ㆍ 대표자 : 장덕진 ㆍ
                    고유번호 : 119-82-08544
                  </p>
                  <div className="nav-row">
                    <a href="/">개인정보 처리방침</a>
                    <a href="/">이메일주소 무단수집 거부</a>
                    <a href="/">이용 약관</a>
                    <a href="/">원격지원</a>
                    <a href="/">찾아오는 길</a>
                    <a href="/">서비스별 연락처 </a>
                  </div>
                  <small>
                    © 2022 Seoul National University Library. All rights
                    reserved.
                  </small>
                </div>
                <div className="social-links">
                  <a href="/">
                    <svg
                      class="svg-icon"
                      width="24"
                      height="24"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.5,3h-9C5,3,3,5,3,7.5v9C3,19,5,21,7.5,21h9c2.5,0,4.5-2,4.5-4.5v-9C21,5,19,3,16.5,3z M12,15.7c-2.1,0-3.8-1.7-3.8-3.7 c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C15.8,14.1,14.1,15.7,12,15.7z M16.9,8.2c-0.6,0-1.1-0.5-1.1-1.1S16.3,6,16.9,6 S18,6.5,18,7.1S17.5,8.2,16.9,8.2z"></path>
                    </svg>
                  </a>
                  <a href="/">
                    <svg
                      class="svg-icon"
                      width="24"
                      height="24"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12,2c-5.2,0-9.5,3.9-9.5,8.7c0,3.6,1.5,5.3,3.5,6.8l0,0v4.2c0,0.2,0.2,0.3,0.4,0.2l3.6-2.7l0.1,0c0.6,0.1,1.2,0.2,1.9,0.2
	c5.2,0,9.5-3.9,9.5-8.7S17.2,2,12,2 M8.8,13c0.9,0,1.7-0.6,2-1.4h1.4c-0.3,1.6-1.6,2.7-3.3,2.7c-2,0-3.6-1.5-3.6-3.5
	c0-2.1,1.6-3.5,3.6-3.5c1.7,0,3,1.1,3.3,2.8h-1.4c-0.2-0.9-1-1.5-2-1.5c-1.3,0-2.2,1-2.2,2.2C6.6,12,7.6,13,8.8,13 M17.9,14.1h-1.3
	v-2.8c0-0.7-0.4-1-1-1c-0.7,0-1.1,0.4-1.1,1.2v2.6h-1.3V7.2h1.3v2.6c0.3-0.5,0.8-0.7,1.5-0.7c0.5,0,1,0.2,1.3,0.5
	c0.4,0.4,0.5,0.8,0.5,1.5V14.1z"
                      ></path>
                    </svg>
                  </a>
                  <a href="/">
                    <svg
                      class="svg-icon"
                      width="24"
                      height="24"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
