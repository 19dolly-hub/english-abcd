// let localTheme = localStorage["theme"] || "device";

let localTheme =
  localStorage["theme"] ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
document.documentElement.setAttribute("data-theme", localTheme);
// console.log(localTheme);

const loading = () => {
  document.querySelector(".pre-loader").classList.add("close");
  document.body.classList.remove("disable-scroll");
  document.getElementById("hero-img").setAttribute("src", "/images/hero.svg");

  typingAnim();
  cursorAnim();
  aos();
};

window.addEventListener("load", loading);

const typingAnim = () => {
  const typed = new Typed("#typed", {
    stringsElement: "#typed-strings",
    typeSpeed: 50,
    backSpeed: 35,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
  });
};

const aboutNav = document.getElementById("about-page");
const allPagesNav = ["menu", "about-page", "services-page", "students-page"];
const icon = document.getElementById("menu"); //mobile-menu
const themeBtn = document.getElementById("theme-btn");

let darkTheme = localTheme === "dark";
// let darkTheme =
//   localTheme === "dark" ||
//   (localTheme === "device" &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches);
// console.log(darkTheme);

const togglePage = (pageNav) => {
  let currentPageNav = document.getElementById(pageNav);
  // console.log(currentPageNav);

  currentPageNav.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("nav-active")) {
      // console.log("same page clicked");
      currentPageNav.classList.toggle("nav-active");
      document.querySelector(`.${pageNav}`)?.classList.toggle("show-page");
      aboutNav.classList.add("nav-active");

      document.body.classList.remove("disable-scroll");
    } else {
      // toggle nav-active
      // let currentState = Array.from(
      //   document.getElementsByTagName("nav")[0].children
      // ).filter((child) => child.classList.contains("nav-active"));

      // currentState.forEach((child) => {
      //   child.classList.remove("nav-active");
      // });
      // currentPageNav.classList.add("nav-active");

      allPagesNav.forEach((nav) => {
        const navElement = document.getElementById(nav);
        navElement.classList.remove("nav-active");
      });
      currentPageNav.classList.add("nav-active");

      // toggle show-page
      let currentPage = Array.from(
        document.getElementsByTagName("main")[0].children
      ).filter((child) => child.classList.contains("show-page"));
      // console.log(currentPage);

      currentPage.forEach((child) => {
        child.classList.remove("show-page");
      });
      document.querySelector(`.${pageNav}`)?.classList.add("show-page");

      document.body.classList.toggle("disable-scroll");
      if (currentPage.length > 0) {
        document.body.classList.add("disable-scroll");
      }
      if (e.target.id === "about-page") {
        document.body.classList.remove("disable-scroll");
      }
    }
  });
};

allPagesNav.forEach((pageNav) => {
  togglePage(pageNav);
});

themeBtn.addEventListener("click", function () {
  if (darkTheme) {
    localStorage.setItem("theme", "light");
    darkTheme = false;
  } else {
    localStorage.setItem("theme", "dark");
    darkTheme = true;
  }
  document.documentElement.setAttribute("data-theme", localStorage["theme"]);
});

const cursorAnim = () => {
  document.addEventListener("mousemove", function (e) {
    gsap.to("#dot", {
      scale: 1,
      x: e.clientX - 15,
      y: e.clientY - 25,
    });
  });
};

const aos = () => {
  gsap.from(".about img", {
    opacity: 0,
    transform: "translateX(-20%)",
    duration: 1,
    scrollTrigger: {
      trigger: ".about-content span",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      // end: "top 0%",
      // scrub: true
    },
  });

  gsap.from(".about-content h3", {
    opacity: 0,
    transform: "translateY(-20%)",
    scrollTrigger: {
      trigger: ".about-content h3",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      // end: "top 0%",
      // scrub: true
    },
  });

  gsap.from(".about-content span", {
    opacity: 0,
    transform: "translateX(10%)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".about-content span",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      // end: "top 0%",
      // scrub: true
    },
  });

  gsap.from(".more-info .info", {
    opacity: 0,
    transform: "translateY(10%)",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".more-info .info",
      scroller: "body",
      // markers: true,
      start: "top 60%",
      // scrub: true
    },
  });
};
