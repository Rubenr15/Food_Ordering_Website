(function() {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 7149:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/About/About.js



function About() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "px-6 lg:py-20 sm:py-14 py-10",
    id: "about",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-screen-xl mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "heading",
        children: "Get Food Fast - Not Fast Food"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "mt-12 lg:max-w-3xl sm:max-w-xl max-w-sm mx-auto text-center sm:text-base text-sm",
        children: "Hello, we're Zeal, your new food ordering option and restaurant. We know you're always busy. No time for cooking. So let us take care of that, we're really good at it, we promise!"
      })]
    })
  });
}

/* harmony default export */ var About_About = (About);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(7206);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);
;// CONCATENATED MODULE: ./src/components/Banner/Banner.js





function Banner() {
  const orderNow = () => {
    window.scrollTo({
      top: document.getElementById("menu").offsetTop - 90,
      behavior: 'smooth'
    }); //window.location.href='#products-feed'
  };

  const viewMore = () => {
    window.scrollTo({
      top: document.getElementById("about").offsetTop - 90,
      behavior: 'smooth'
    }); //window.location.href='#products-feed'
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: " px-6 relative heightFix mb-24",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute lg:-bottom-60 -bottom-72 lg:-left-44 -left-80  object-contain overflow-hidden",
      children: /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
        left: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/img/circle.svg",
          alt: "",
          width: 400,
          height: 400
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute top-16 lg:left-72 left-60 lg:w-auto sm:w-10 w-8 object-contain overflow-hidden",
      children: /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
        top: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/img/circle.svg",
          alt: "",
          width: 80,
          height: 80
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "max-w-screen-xl mx-auto lg:py-10  sm:pt-32 pt-20",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex lg:justify-between lg:items-center overflow-hidden p-0.5 lg:flex-row flex-col lg:gap-4 gap-8",
        children: [/*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
          left: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "main_heading",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "font-medium sm:text-xl mb-3 text-base ",
              children: "Are you hungry?"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              className: "font-semibold xl:text-7xl sm:text-6xl xxs:text-5xl text-4xl",
              children: ["Don't ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Wait!"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center xl:mt-12 lg:mt-10  sm:mt-8 mt-6 gap-4 flex-wrap",
              children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "button lg:text-base xl:px-16 px-14",
                onClick: orderNow,
                children: "Order Now"
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "xl:px-16 lg:text-base button-ghost px-14",
                onClick: viewMore,
                children: "View More"
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
          right: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "lg:w-1/2 lg:m-0 lg:max-w-none sm:max-w-lg  max-w-xs  mx-auto",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: "/img/eating_together.svg",
              alt: "",
              width: 600,
              height: 600,
              objectFit: "contain"
            })
          })
        })]
      })
    })]
  });
}

/* harmony default export */ var Banner_Banner = (Banner);
;// CONCATENATED MODULE: ./src/components/FoodGallery/FoodGallery.js


function FoodGallery() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "grid grid-cols-4 py-12",
    children: Array(8).fill(0).map((value, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full overflow-hidden bg-black",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: `/img/food gallery/${i + 1}.jpg`,
        alt: "",
        className: "hover:transform scale-110 hover:scale-100 duration-300 opacity-70 hover:opacity-100"
      })
    }, `foodImage-${i}`))
  });
}

/* harmony default export */ var FoodGallery_FoodGallery = (FoodGallery);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var esm = __webpack_require__(3802);
;// CONCATENATED MODULE: ./src/components/HowItWork/HowItWork.js




function HowItWork() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "px-6",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-screen-xl mx-auto lg:py-20 sm:py-14 py-10",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "heading",
        children: "How It Works"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-20",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex sm:justify-evenly text-center sm:gap-4 gap-8 flex-wrap sm:flex-row flex-col",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center sm:gap-6 gap-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* CursorClickIcon */.UNN, {
              className: "sm:w-14 w-10 text-primary-light mx-auto"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "font-medium sm:text-2xl text-xl",
              children: "Pick Meal"
            }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "max-w-xs mx-auto sm:text-base text-sm",
              children: "Choose a meal from our diverse weekly menu."
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center sm:gap-6 gap-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* CreditCardIcon */.ciH, {
              className: "sm:w-14 w-10 text-primary-light mx-auto"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "font-medium sm:text-2xl text-xl",
              children: "Checkout"
            }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "max-w-xs mx-auto  sm:text-base text-sm",
              children: "Fill address, all the necessary details and make payment."
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center sm:gap-6 gap-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* TruckIcon */.YwW, {
              className: "sm:w-14 w-10 text-primary-light mx-auto"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "font-medium sm:text-2xl text-xl",
              children: "Fast Delivery"
            }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "mx-auto max-w-xs  sm:text-base text-sm",
              children: "Freshly prepared meal arrive on your doorstep in a refigerated box."
            })]
          })]
        })
      })]
    })
  });
}

/* harmony default export */ var HowItWork_HowItWork = (HowItWork);
;// CONCATENATED MODULE: ./src/components/Info/Info.js




function Info() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "px-6 py-20",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-evenly mx-auto max-w-screen-lg flex-wrap sm:gap-8 gap-10 sm:flex-row flex-col",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col  items-center gap-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(esm/* ClockIcon */.T39, {
            className: "lg:w-12 w-10 text-primary-light mx-auto "
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "font-semibold",
          children: "Everyday 11am - 11pm"
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "Working Hours"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center gap-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(esm/* LocationMarkerIcon */.IS8, {
            className: "lg:w-12 w-10 text-primary-light mx-auto"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "font-semibold",
          children: "Satpala - Virar, Maharashtra 401301"
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "Get Directions"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center gap-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(esm/* PhoneIcon */.qWc, {
            className: "lg:w-12 w-10 text-primary-light mx-auto"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "font-semibold",
          children: "+91 0000500004"
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "Call Now"
        })]
      })]
    })
  });
}

/* harmony default export */ var Info_Info = (Info);
// EXTERNAL MODULE: external "react-currency-formatter"
var external_react_currency_formatter_ = __webpack_require__(9381);
var external_react_currency_formatter_default = /*#__PURE__*/__webpack_require__.n(external_react_currency_formatter_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/slices/cartSlice.js + 1 modules
var cartSlice = __webpack_require__(8961);
;// CONCATENATED MODULE: ./src/components/Dish/Dish.js









function Dish({
  _id,
  title,
  price,
  description,
  category,
  image
}) {
  const dispatch = (0,external_react_redux_.useDispatch)();

  const addItemToCart = () => {
    //Sending the Dish as an action to the REDUX store... the cart slice
    dispatch((0,cartSlice/* addToCart */.Xq)({
      _id,
      title,
      price,
      description,
      category,
      image,
      qty: 1,
      toast: true
    }));
  };

  return /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
    bottom: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative flex flex-col   bg-white z-20  md:p-8 p-6 rounded-md shadow-lg",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "absolute top-2 right-3 text-xs italic text-gray-400 capitalize",
        children: category
      }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: image,
        height: 200,
        width: 200,
        alt: "",
        objectFit: "cover",
        objectPosition: "center"
      }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "my-3 font-medium capitalize",
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-xs  mb-2 line-clamp-2 text-gray-500",
        children: description
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mb-5 mt-2 font-bold text-gray-700",
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_currency_formatter_default()), {
          quantity: price,
          currency: "INR"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "mt-auto button flex items-center justify-center",
        onClick: addItemToCart,
        children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* ShoppingCartIcon */.Q1y, {
          className: "w-4"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "ml-2",
          children: "Add to Cart"
        })]
      })]
    })
  });
}

/* harmony default export */ var Dish_Dish = (Dish);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var outline_esm = __webpack_require__(6049);
// EXTERNAL MODULE: ./src/components/Dish/DishInfo.js
var DishInfo = __webpack_require__(5045);
;// CONCATENATED MODULE: ./src/components/Menu/Menu.js







function Menu({
  dishes,
  categories
}) {
  var _ref, _ref2;

  const {
    0: categoryActive,
    1: setCategoryActive
  } = (0,external_react_.useState)("all");
  const {
    0: filteredDishes,
    1: setFilteredDishes
  } = (0,external_react_.useState)(dishes);
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,external_react_.useState)("");
  const {
    0: searchResult,
    1: setSearchResult
  } = (0,external_react_.useState)(dishes);
  const options = {
    keys: ["title", "description", "category"]
  };

  const activeCategoryHandler = category => {
    if (category === "all" || categoryActive === category) {
      setCategoryActive("all");
      return;
    }

    setCategoryActive(category);
    filterDishes(category);
  };

  const filterDishes = category => {
    setFilteredDishes(dishes.filter(dish => (dish === null || dish === void 0 ? void 0 : dish.category) === category));
  };

  const searchDish = async e => {
    let term = e.target.value;
    setSearchTerm(term);
    term = term.toLowerCase(); // Dynamically load fuse.js

    const Fuse = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 8673, 23))).default;
    const fuse = new Fuse(dishes ? dishes : [], options);
    const result = fuse.search(term).map(({
      item: {
        _id,
        title,
        price,
        description,
        category,
        image
      }
    }) => ({
      _id,
      title,
      price,
      description,
      category,
      image
    }));
    setSearchResult(result);
  };

  const removeFromSearchResults = _id => {
    setSearchResult(dishes => dishes.filter(dish => dish._id !== _id));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "w-full py-20 px-6 bg-gray-100 mt-10",
    id: "menu",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "heading lg:mb-32 sm:mb-28 mb-20  mt-4",
      children: "Explore Our Best Menu"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "py-2",
      children: /*#__PURE__*/jsx_runtime_.jsx("input", {
        className: "p-2 pl-6 h-full w-half ml-24 mb-5 outline-none cursor-pointer sm:text-base text-sm rounded-lg bg-gray-200",
        type: "text",
        value: searchTerm,
        placeholder: "Search a dish",
        onChange: searchDish
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center w-full max-w-screen-xl sm:mb-20 mb-16 gap-4  mx-auto overflow-x-auto hideScrollBar capitalize text-sm font-medium",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(outline_esm/* AdjustmentsIcon */.XgF, {
          className: "w-6"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: ` py-2 px-6 bg-white text-center rounded hover:bg-primary-light hover:text-white transition-all cursor-pointer ease-in-out duration-200 shadow ${categoryActive === "all" ? "bg-primary-light text-white" : ""}`,
        onClick: () => activeCategoryHandler("all"),
        children: "All"
      }), categories === null || categories === void 0 ? void 0 : categories.map((category, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `py-2 px-6 bg-white text-center whitespace-nowrap rounded hover:bg-primary-light hover:text-white transition-all cursor-pointer ease-in-out duration-200 shadow ${categoryActive === (category === null || category === void 0 ? void 0 : category.name) ? "bg-primary-light text-white" : ""}`,
        onClick: () => activeCategoryHandler(category === null || category === void 0 ? void 0 : category.name),
        children: category === null || category === void 0 ? void 0 : category.name
      }, `category-${i}`))]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 mx-auto max-w-screen-xl gap-x-6 gap-y-8",
      children: searchTerm !== "" ? (_ref = searchTerm ? searchResult : dishes) === null || _ref === void 0 ? void 0 : _ref.map(({
        _id,
        title,
        price,
        description,
        category,
        image
      }, i) => /*#__PURE__*/jsx_runtime_.jsx(Dish_Dish, {
        _id: _id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, `dish-${_id}`)) : (_ref2 = categoryActive === "all" ? dishes : filteredDishes) === null || _ref2 === void 0 ? void 0 : _ref2.map(({
        _id,
        title,
        price,
        description,
        category,
        image
      }) => /*#__PURE__*/jsx_runtime_.jsx(Dish_Dish, {
        _id: _id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, `dish-${_id}`))
    })]
  });
}

/* harmony default export */ var Menu_Menu = (Menu);
;// CONCATENATED MODULE: ./src/components/Testimonials/Testimonials.js




function Testimonials() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "px-6 py-20",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mx-auto max-w-screen-xl",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "heading",
        children: "Our Customers can\u2019t live Without us"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between mt-20 italic lg:text-base  text-sm gap-6 sm:flex-row flex-col",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "sm:max-w-xs",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "font-extrabold text-6xl -mb-8",
            children: "\""
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "\"Zeal is just awesome! I just launched a startup which leaves me with no time for cooking, so Zeal is a life-saver. Now that I got used to it, I couldn't live without my daily meals!"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center sm:mt-8 mt-4 gap-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: "/img/testimonials/customer-1.jpg",
                alt: "",
                width: 45,
                height: 45,
                objectFit: "contain",
                className: "rounded-full"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Alberto Duncan"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "sm:max-w-xs",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "font-extrabold text-6xl -mb-8",
            children: "\""
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "\"Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Zeal. Me and my family are so in love!"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center sm:mt-8 mt-4 gap-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: "/img/testimonials/customer-2.jpg",
                alt: "",
                width: 45,
                height: 45,
                objectFit: "contain",
                className: "rounded-full"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Joana Silva"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "sm:max-w-xs",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "font-extrabold text-6xl -mb-8",
            children: "\""
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center sm:mt-8 mt-4 gap-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: "/img/testimonials/customer-3.jpg",
                alt: "",
                width: 45,
                height: 45,
                objectFit: "contain",
                className: "rounded-full"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Milton Chapman"
            })]
          })]
        })]
      })]
    })
  });
}

/* harmony default export */ var Testimonials_Testimonials = (Testimonials);
// EXTERNAL MODULE: ./src/util/getCategories.js
var getCategories = __webpack_require__(7173);
// EXTERNAL MODULE: ./src/util/getDishes.js
var getDishes = __webpack_require__(234);
// EXTERNAL MODULE: ./src/util/mongodb.js
var mongodb = __webpack_require__(7641);
;// CONCATENATED MODULE: ./src/pages/index.js













function Home(props) {
  const {
    dishes,
    error
  } = (0,getDishes/* default */.Z)(props === null || props === void 0 ? void 0 : props.dishes);
  const {
    categories,
    error: err
  } = (0,getCategories/* default */.Z)(props === null || props === void 0 ? void 0 : props.categories);

  if (err) {
    console.error(err);
  }

  if (error) {
    console.error(error);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Banner_Banner, {}), /*#__PURE__*/jsx_runtime_.jsx(Info_Info, {}), /*#__PURE__*/jsx_runtime_.jsx(About_About, {}), /*#__PURE__*/jsx_runtime_.jsx(FoodGallery_FoodGallery, {}), /*#__PURE__*/jsx_runtime_.jsx(HowItWork_HowItWork, {}), /*#__PURE__*/jsx_runtime_.jsx(Menu_Menu, {
      dishes: dishes,
      categories: categories
    }), /*#__PURE__*/jsx_runtime_.jsx(Testimonials_Testimonials, {})]
  });
}
const getStaticProps = async () => {
  const client = await mongodb/* default */.Z;
  const db = await client.db("sample_data");
  let dishes = await db.collection("dishes").find({}).toArray();
  dishes = JSON.parse(JSON.stringify(dishes));
  let categories = await db.collection("categories").find({}).toArray();
  categories = JSON.parse(JSON.stringify(categories));
  return {
    props: {
      dishes,
      categories
    },
    revalidate: 1
  };
};

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

/***/ 8673:
/***/ (function(module) {

"use strict";
module.exports = require("fuse.js");;

/***/ }),

/***/ 7548:
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

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

/***/ 9381:
/***/ (function(module) {

"use strict";
module.exports = require("react-currency-formatter");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 7206:
/***/ (function(module) {

"use strict";
module.exports = require("react-reveal/Fade");;

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
var __webpack_exports__ = __webpack_require__.X(0, [2821,5675,1664,3802,6049,293,1572,4428], function() { return __webpack_exec__(7149); });
module.exports = __webpack_exports__;

})();