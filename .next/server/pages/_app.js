(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 5513:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "nprogress"
var external_nprogress_namespaceObject = require("nprogress");;
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: ./src/slices/cartSlice.js + 1 modules
var cartSlice = __webpack_require__(8961);
;// CONCATENATED MODULE: ./src/app/store.js


const store = (0,toolkit_.configureStore)({
  reducer: {
    cart: cartSlice/* default */.ZP
  }
});
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(8353);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/util/StorageService.js
const LOCALSTORAGE_KEY_PREFIX = "Zinger";
/* harmony default export */ var StorageService = ({
  get(item) {
    try {
      return window.localStorage.getItem(`${LOCALSTORAGE_KEY_PREFIX}:${item}`);
    } catch (e) {
      console.error(e);
      return null;
    }
  },

  set(item, value) {
    try {
      window.localStorage.setItem(`${LOCALSTORAGE_KEY_PREFIX}:${item}`, value);
    } catch (e) {
      console.error(e);
    }
  }

});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.js







function Footer({
  admin
}) {
  const router = (0,router_.useRouter)();

  const gmailHandler = () => {
    window.open("mailto:" + "crce.9228.cs@gmail.com" + "?subject=" + " " + "&body=" + " ", "_self");
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bg-gray-800 py-8 px-6 text-gray-200  lg:text-base text-sm",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "max-w-screen-xl w-full mx-auto",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between items-center",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center lg:space-x-8 space-x-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "cursor-pointer hover:text-white",
              children: "Home"
            })
          }), !admin ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/orders",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "cursor-pointer hover:text-white",
              children: "Orders"
            })
          }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center space-x-4 md:space-x-6",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "md:w-6 w-5  my-auto",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              width: 25,
              height: 25,
              src: "/img/social/email.svg",
              objectFit: "contain",
              className: "cursor-pointer",
              alt: "email",
              onClick: gmailHandler
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "md:w-6 w-5  my-auto",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              width: 25,
              height: 25,
              src: "/img/social/instagram.svg",
              objectFit: "contain",
              className: "cursor-pointer",
              alt: "linkedin",
              onClick: () => {
                router.push("https://www.instagram.com");
              }
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "md:w-6 w-5 my-auto",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              width: 25,
              height: 25,
              src: "/img/social/facebook.svg",
              objectFit: "contain",
              className: "cursor-pointer",
              alt: "github",
              onClick: () => router.push("https://facebook.com")
            })
          })]
        })]
      })
    })
  });
}

/* harmony default export */ var Footer_Footer = (Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(6049);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var solid_esm = __webpack_require__(3802);
// EXTERNAL MODULE: external "react-loading-skeleton"
var external_react_loading_skeleton_ = __webpack_require__(1704);
var external_react_loading_skeleton_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_skeleton_);
;// CONCATENATED MODULE: external "react-onclickoutside"
var external_react_onclickoutside_namespaceObject = require("react-onclickoutside");;
var external_react_onclickoutside_default = /*#__PURE__*/__webpack_require__.n(external_react_onclickoutside_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Dropdown/Dropdown.js






function Dropdown({
  hideDropDown
}) {
  const {
    data: session
  } = (0,react_.useSession)();
  const router = (0,router_.useRouter)();
  Dropdown.handleClickOutside = hideDropDown;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "font-medium w-36 bg-white text-sm rounded shadow overflow-hidden border border-gray-100",
    children: [session && (session === null || session === void 0 ? void 0 : session.admin) && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dropDownOption border-b border-gray-200",
      onClick: () => router.push("/admin/dashboard"),
      children: "Dashboard"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dropDownOption border-b border-gray-200",
      onClick: () => router.push("/profile"),
      children: "Profile"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dropDownOption border-b border-gray-200",
      onClick: () => router.push("/orders"),
      children: "Orders"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dropDownOption border-b border-gray-200",
      onClick: () => router.push("/about"),
      children: "Contact"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dropDownOption",
      onClick: () => {
        (0,react_.signOut)();
      },
      children: "Logout"
    })]
  });
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside
};
/* harmony default export */ var Dropdown_Dropdown = (external_react_onclickoutside_default()(Dropdown, clickOutsideConfig));
;// CONCATENATED MODULE: ./src/components/Header/Header.js













function Header() {
  const router = (0,router_.useRouter)();
  const {
    data: session,
    status
  } = (0,react_.useSession)();
  const loading = status === "loading";
  const items = (0,external_react_redux_.useSelector)(cartSlice/* selectItems */.a1);
  const {
    0: dropDown,
    1: setDropDown
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "sticky top-0 inset-x-0 z-30 bg-white text-gray-900 glassmorphism px-6 md:block hidden",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center w-full max-w-screen-xl py-2 xl:space-x-16 lg:space-x-12  space-x-7  mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex items-center flex-1",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/img/Zeal.svg",
          alt: "Zeal",
          className: "cursor-pointer",
          width: 100,
          objectFit: "contain",
          height: 50,
          onClick: () => router.push("/")
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center xl:space-x-12  lg:space-x-10 space-x-7  font-medium  lg:text-base text-sm",
        children: [!loading ? !session ? /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "link",
          onClick: react_.signIn,
          children: "Login"
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "relative",
          onClick: () => setDropDown(value => !value),
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "flex items-center cursor-pointer",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: session.user.image || "/img/profile_pic.svg",
              loading: "lazy",
              alt: "",
              width: "24",
              height: "24",
              className: "object-contain w-10 h-10 rounded-full mr-1 hover:shadow-md"
            }), /*#__PURE__*/jsx_runtime_.jsx(esm/* ChevronDownIcon */.v4q, {
              className: "lg:w-6 w-4"
            })]
          }), dropDown && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "absolute top-14 right-1",
            children: /*#__PURE__*/jsx_runtime_.jsx(Dropdown_Dropdown, {
              hideDropDown: () => setDropDown(false)
            })
          })]
        }) : /*#__PURE__*/jsx_runtime_.jsx((external_react_loading_skeleton_default()), {
          circle: true,
          width: 40,
          height: 40
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "link",
          onClick: () => router.push("/orders"),
          children: "Orders"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "link",
          onClick: () => router.push("/about"),
          children: "About"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "relative cursor-pointer",
        onClick: () => router.push("/cart"),
        children: [/*#__PURE__*/jsx_runtime_.jsx(solid_esm/* ShoppingCartIcon */.Q1y, {
          className: "xl:w-10 lg:w-9 w-8 link"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "absolute -top-2 -right-1 rounded-full text-white bg-primary-light p-1 flex items-center justify-center text-xs font-extrabold",
          children: items === null || items === void 0 ? void 0 : items.length
        })]
      })]
    })
  });
}

/* harmony default export */ var Header_Header = (Header);
;// CONCATENATED MODULE: external "react-loader-spinner"
var external_react_loader_spinner_namespaceObject = require("react-loader-spinner");;
var external_react_loader_spinner_default = /*#__PURE__*/__webpack_require__.n(external_react_loader_spinner_namespaceObject);
;// CONCATENATED MODULE: ./src/components/SideBarMenu/SideBarMenu.js









function SideBarMenu({
  closeSideBar
}) {
  var _session$user;

  const {
    data: session,
    status
  } = (0,react_.useSession)();
  const loading = status === "loading";
  const router = (0,router_.useRouter)();
  SideBarMenu.handleClickOutside = closeSideBar;

  const sideBarClickHandler = href => {
    closeSideBar();
    router.push(href);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative h-full w-full sideBarMenu bg-white px-8 py-6  font-medium md:hidden",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "/img/Zinger.svg",
        alt: "Zinger",
        className: "cursor-pointer",
        width: 70,
        objectFit: "contain",
        height: 30
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: " h-0.5 my-4 w-full bg-gray-100"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "my-8",
      children: !loading ? session ? /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: (session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.image) || "/img/profile_pic.svg",
        loading: "lazy",
        alt: "",
        width: "24",
        height: "24",
        className: "object-contain w-10 h-10 rounded-full mr-1 hover:shadow-md",
        onClick: () => sideBarClickHandler("/profile")
      }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "link text-primary-light text-lg",
        onClick: react_.signIn,
        children: "Login/Signup"
      }) : /*#__PURE__*/jsx_runtime_.jsx((external_react_loading_skeleton_default()), {
        circle: true,
        width: 50,
        height: 50
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "gap-4 flex flex-col",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          onClick: () => sideBarClickHandler("/"),
          className: "link inline-flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* HomeIcon */.tvw, {
            className: "w-5 mr-6"
          }), " Home"]
        })
      }), session && (session === null || session === void 0 ? void 0 : session.admin) && /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          onClick: () => sideBarClickHandler("/admin/dashboard"),
          className: "link inline-flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* TableIcon */.$eq, {
            className: "w-5 mr-6"
          }), " Dashboard"]
        })
      }), session && /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          onClick: () => sideBarClickHandler("/profile"),
          className: "link inline-flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* UserCircleIcon */.lMe, {
            className: "w-5 mr-6"
          }), " Profile"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          onClick: () => sideBarClickHandler("/cart"),
          className: "link inline-flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* ShoppingCartIcon */.Q1y, {
            className: "w-5 mr-6"
          }), " Cart"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          onClick: () => sideBarClickHandler("/orders"),
          className: "link inline-flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* ShoppingBagIcon */.b_c, {
            className: "w-5 mr-6"
          }), " Orders"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          onClick: () => sideBarClickHandler("/about"),
          className: "link inline-flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* MailIcon */.bV6, {
            className: "w-5 mr-6"
          }), " Contact"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          onClick: () => sideBarClickHandler("/about"),
          className: "link inline-flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* InformationCircleIcon */.AV5, {
            className: "w-5 mr-6"
          }), " About"]
        })
      }), session && /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          onClick: () => {
            (0,react_.signOut)();
          },
          className: "link inline-flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* LogoutIcon */.R0g, {
            className: "w-5 mr-6"
          }), " Logout"]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute top-2 right-2",
      children: /*#__PURE__*/jsx_runtime_.jsx(esm/* XIcon */.b0D, {
        className: "w-7",
        onClick: closeSideBar
      })
    })]
  });
}

const SideBarMenu_clickOutsideConfig = {
  handleClickOutside: () => SideBarMenu.handleClickOutside
};
/* harmony default export */ var SideBarMenu_SideBarMenu = (external_react_onclickoutside_default()(SideBarMenu, SideBarMenu_clickOutsideConfig));
;// CONCATENATED MODULE: ./src/components/Header/HeaderMobile.js












function HeaderMobile() {
  const router = (0,router_.useRouter)();
  const items = (0,external_react_redux_.useSelector)(cartSlice/* selectItems */.a1);
  const {
    0: showSideBar,
    1: setShowBar
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
      className: "sticky top-0 inset-x-0 z-30 bg-white text-gray-900 glassmorphism px-6 md:hidden block py-4 transition-all",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center w-full justify-between  mb-4",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center space-x-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(esm/* MenuIcon */.Oqj, {
              className: "w-8",
              onClick: () => setShowBar(true)
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex items-center",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: "/img/Zeal.svg",
              alt: "Zeal",
              className: "cursor-pointer",
              width: 75,
              objectFit: "contain",
              height: 35,
              onClick: () => router.push("/")
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "relative cursor-pointer",
          onClick: () => router.push("/cart"),
          children: [/*#__PURE__*/jsx_runtime_.jsx(solid_esm/* ShoppingCartIcon */.Q1y, {
            className: "xl:w-10 w-9 link"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "absolute -top-2 -right-1 rounded-full text-white bg-primary-light p-1 flex items-center justify-center text-xs font-extrabold",
            children: items === null || items === void 0 ? void 0 : items.length
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `z-40 fixed inset-y-0 left-0 overflow-hidden transition-all duration-300  shadow-2xl  ${showSideBar ? "translate-x-0" : "-translate-x-full"}
          `,
      children: /*#__PURE__*/jsx_runtime_.jsx(SideBarMenu_SideBarMenu, {
        closeSideBar: () => setShowBar(false)
      })
    })]
  });
}

/* harmony default export */ var Header_HeaderMobile = (HeaderMobile);
;// CONCATENATED MODULE: ./src/components/Header/HeaderDashboard.js






function HeaderDashboard() {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "sticky top-0 inset-x-0 z-30 bg-white text-gray-900 glassmorphism px-6",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center justify-between w-full max-w-screen-xl py-2 xl:space-x-16 lg:space-x-12  space-x-7  mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex items-center lg:w-auto sm:w-24 w-20",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/img/Zeal.svg",
          alt: "Zeal",
          className: "cursor-pointer",
          width: 100,
          objectFit: "contain",
          height: 50,
          onClick: () => router.push("/")
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "font-medium xl:space-x-12  lg:space-x-10 space-x-4 lg:text-base text-sm",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "link",
          onClick: () => router.push("/admin/dashboard"),
          children: "Dashboard"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "link",
          onClick: react_.signOut,
          children: "Logout"
        })]
      })]
    })
  });
}

/* harmony default export */ var Header_HeaderDashboard = (HeaderDashboard);
;// CONCATENATED MODULE: ./src/components/Layout/Layout.js















function Layout({
  children,
  admin,
  auth
}) {
  const {
    data: session,
    status
  } = (0,react_.useSession)();
  const loading = status === "loading";
  (0,external_react_.useEffect)(() => {
    store.subscribe(() => {
      StorageService.set("cart", JSON.stringify(store.getState().cart));
    });
    let cart = StorageService.get("cart");
    cart = cart ? JSON.parse(cart) : {
      items: []
    };
    store.dispatch((0,cartSlice/* hydrate */.ZB)(cart));
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Zeal"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Food ordering website for Zeal restaurant"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/favicons/apple-touch-icon.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/img/favicons/favicon-32x32.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/img/favicons/favicon-16x16.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "manifest",
        href: "/img/favicons/site.webmanifest"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "mask-icon",
        href: "/img/favicons/safari-pinned-tab.svg",
        color: "#5bbad5"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "/img/favicons/favicon.ico"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-TileColor",
        content: "#da532c"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-config",
        content: "/img/favicons/browserconfig.xml"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: "#ffffff"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "layout",
      children: loading ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "fixed inset-0 flex items-center justify-center bg-white z-50 loader",
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_loader_spinner_default()), {
          type: "TailSpin",
          color: "#ab3c2a"
        })
      }) : admin ? session && session !== null && session !== void 0 && session.admin ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Header_HeaderDashboard, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {
          admin: true
        })]
      }) : (0,react_.signIn)() : auth ? session ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Header_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Header_HeaderMobile, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {})]
      }) : (0,react_.signIn)() : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Header_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Header_HeaderMobile, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {})]
      })
    })]
  });
}

/* harmony default export */ var Layout_Layout = (Layout);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(7749);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/util/fetch.js


const fetcher = (...args) => args.length ? external_axios_default().get(...args).then(res => res.data) : null;

/* harmony default export */ var fetch = (fetcher);
;// CONCATENATED MODULE: ./src/pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //nprogress module




 //styles of nprogress






 //Binding events.

router_default().events.on("routeChangeStart", () => external_nprogress_default().start());
router_default().events.on("routeChangeComplete", () => external_nprogress_default().done());
router_default().events.on("routeChangeError", () => external_nprogress_default().done());

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.SessionProvider, {
    session: pageProps.session,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_swr_.SWRConfig, {
      value: {
        refreshInterval: 1000,
        fetcher: fetch
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout_Layout, {
          admin: Component === null || Component === void 0 ? void 0 : Component.admin,
          auth: Component === null || Component === void 0 ? void 0 : Component.auth,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
            limit: 4
          })]
        })
      })
    })
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 8819:
/***/ (function() {



/***/ }),

/***/ 6139:
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8353:
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/react");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 1704:
/***/ (function(module) {

"use strict";
module.exports = require("react-loading-skeleton");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 7749:
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [2821,5675,1664,3802,6049,293], function() { return __webpack_exec__(5513); });
module.exports = __webpack_exports__;

})();