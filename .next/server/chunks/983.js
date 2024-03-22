"use strict";
exports.id = 983;
exports.ids = [983];
exports.modules = {

/***/ 6890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_About)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(6882);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Counter.js




const Counter = ({
  end,
  decimals
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_countup_default()), {
    end: end ? end : 100,
    duration: 3,
    decimals: decimals ? decimals : 0,
    children: ({
      countUpRef,
      start
    }) => /*#__PURE__*/jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
      onChange: start,
      delayedCall: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "count-text",
        "data-from": "0",
        "data-to": end,
        ref: countUpRef,
        children: "count"
      })
    })
  });
};

/* harmony default export */ const components_Counter = (Counter);
;// CONCATENATED MODULE: ./src/components/About.js
/* eslint-disable @next/next/no-img-element */





const About = ({
  dark
}) => {
  var _data$projects, _data$about, _data$about2;

  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)({});
  (0,external_react_.useEffect)(() => {
    async function fetchData() {
      const res = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
      const data = await res.json();
      setData(data === null || data === void 0 ? void 0 : data.user);
    }

    fetchData();
  }, []);
  console.log(data);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "dizme_tm_section",
    id: "about",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "dizme_tm_about",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "wrapper",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "left",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "image",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: `img/about/${dark ? 2 : 1}.jpg`,
                alt: "image"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "numbers year",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "wrapper",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(components_Counter, {
                      end: 18
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: "name",
                    children: ["Years of", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Success"]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "numbers project",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "wrapper",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Counter, {
                      end: data === null || data === void 0 ? void 0 : (_data$projects = data.projects) === null || _data$projects === void 0 ? void 0 : _data$projects.length
                    }), "K"]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: "name",
                    children: ["Total", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Projects"]
                  })]
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "right",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "title wow fadeInUp",
              "data-wow-duration": "1s",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: `I'm a ${data === null || data === void 0 ? void 0 : (_data$about = data.about) === null || _data$about === void 0 ? void 0 : _data$about.title}`
              }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "I Can Develope Anything You Want"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text wow fadeInUp",
              "data-wow-duration": "1s",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: data === null || data === void 0 ? void 0 : (_data$about2 = data.about) === null || _data$about2 === void 0 ? void 0 : _data$about2.description
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "dizme_tm_button wow fadeInUp",
              "data-wow-duration": "1s",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "anchor",
                href: "#contact",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Hire Me"
                })
              })
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "brush_1 wow fadeInLeft",
        "data-wow-duration": "1s",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "img/brushes/about/1.png",
          alt: "image"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "brush_2 wow fadeInRight",
        "data-wow-duration": "1s",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "img/brushes/about/2.png",
          alt: "image"
        })
      })]
    })
  });
};

/* harmony default export */ const components_About = (About);

/***/ }),

/***/ 8259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2259);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-img-element */

/* eslint-disable react-hooks/exhaustive-deps */





const Contact = () => {
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    setData(await (0,_utilits__WEBPACK_IMPORTED_MODULE_1__/* .fatchData */ .A6)("/static/info.json"));
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "dizme_tm_section",
    id: "contact",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "dizme_tm_contact",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "dizme_tm_main_title",
          "data-align": "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
            children: "Contact Me"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
            children: "I Want To Hear From You"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
            children: "Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "contact_inner",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "left wow fadeInLeft",
            "data-wow-duration": "1s",
            children: data && data.contact && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "list_inner",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "icon orangeBackground",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                      className: "icon-location orangeText"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "short",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
                      children: "Address"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                      children: data.contact.address
                    })]
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "list_inner",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "icon greenBackground",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                      className: "icon-mail-1 greenText"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "short",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
                      children: "Email"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                        href: "#",
                        children: data.contact.email
                      })
                    })]
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "list_inner",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "icon purpleBackground",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                      className: "icon-phone purpleText"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "short",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
                      children: "Phone"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                      children: data.contact.phn
                    })]
                  })]
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "right wow fadeInRight",
            "data-wow-duration": "1s",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "fields",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
                action: "/",
                method: "post",
                className: "contact_form",
                id: "contact_form",
                autoComplete: "off",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "returnmessage",
                  "data-success": "Your message has been received, We will contact you soon."
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "empty_notice",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                    children: "Please Fill Required Fields"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "input_list",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                        id: "name",
                        type: "text",
                        placeholder: "Your Name"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                        id: "email",
                        type: "text",
                        placeholder: "Your Email"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                        id: "phone",
                        type: "number",
                        placeholder: "Your Phone"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                        id: "subject",
                        type: "text",
                        placeholder: "Subject"
                      })
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "message_area",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("textarea", {
                    id: "message",
                    placeholder: "Write your message here",
                    defaultValue: ""
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "dizme_tm_button",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                    id: "send_message",
                    href: "#",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                      children: "Submit Now"
                    })
                  })
                })]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "brush_2 wow fadeInRight",
            "data-wow-duration": "1s",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
              src: "img/brushes/contact/2.png",
              alt: "image"
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "dizme_tm_map wow fadeInUp",
          "data-wow-duration": "1s",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "mapouter",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "gmap_canvas",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("iframe", {
                height: 375,
                style: {
                  width: "100%"
                },
                id: "gmap_canvas",
                src: "https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                href: "https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {})]
            })
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "brush_1 wow fadeInLeft",
        "data-wow-duration": "1s",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
          src: "img/brushes/contact/1.png",
          alt: "image"
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ 8048:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2905);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_0__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @next/next/no-img-element */

/* eslint-disable react-hooks/exhaustive-deps */





const Home = ({
  dark
}) => {
  var _data$about, _data$about2, _data$about3, _data$about4, _data$about5;

  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async () => {
    const res = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
    const data = await res.json();
    setData(data === null || data === void 0 ? void 0 : data.user);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "dizme_tm_section",
    id: "home",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "dizme_tm_hero",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "background",
        "data-img-url": `img/slider/${dark ? 2 : 1}.jpg` // style={{ backgroundImage: `img/slider/${dark ? 2 : 1}.jpg` }}

      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "details",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "hello",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
                className: "orangeText",
                children: `Hello, I'm`
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "name",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
                children: data && data !== null && data !== void 0 && (_data$about = data.about) !== null && _data$about !== void 0 && _data$about.name ? data === null || data === void 0 ? void 0 : (_data$about2 = data.about) === null || _data$about2 === void 0 ? void 0 : _data$about2.name : "name"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "job",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                children: ["A", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                  className: "greenText",
                  children: data && (data === null || data === void 0 ? void 0 : (_data$about3 = data.about) === null || _data$about3 === void 0 ? void 0 : _data$about3.title)
                }), " ", "From", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                  className: "purpleText",
                  children: data === null || data === void 0 ? void 0 : (_data$about4 = data.about) === null || _data$about4 === void 0 ? void 0 : _data$about4.address
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "text",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                children: data === null || data === void 0 ? void 0 : (_data$about5 = data.about) === null || _data$about5 === void 0 ? void 0 : _data$about5.subTitle
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "button",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "dizme_tm_button",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                  className: "anchor",
                  href: "#about",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                    children: "About Me"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "social",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("ul", {
                  children: data && (data === null || data === void 0 ? void 0 : data.social_handles) && data.social_handles.map((social, i) => {
                    var _social$image;

                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                        href: "#",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                          width: 23,
                          height: 23,
                          src: social === null || social === void 0 ? void 0 : (_social$image = social.image) === null || _social$image === void 0 ? void 0 : _social$image.url,
                          alt: "socila_icon"
                        })
                      })
                    }, i);
                  })
                })
              })]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "avatar",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "image",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                src: data && data.img ? data.img : "/img/slider/avatar.png",
                alt: "image"
              }), data && data.skills && data.skills.slice(1, 4).map((skill, i) => {
                var _skill$image;

                return skill.image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                  className: `skills ${skill.name} anim_moveBottom`,
                  children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__["default"])(`<img  src=${skill === null || skill === void 0 ? void 0 : (_skill$image = skill.image) === null || _skill$image === void 0 ? void 0 : _skill$image.url} >`)
                }, i);
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "dizme_tm_down",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
          className: "anchor",
          href: "#process",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            width: "26px",
            height: "100%",
            viewBox: "0 0 247 390",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            style: {
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "1.5"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
              id: "wheel",
              d: "M123.359,79.775l0,72.843",
              style: {
                fill: "none",
                stroke: dark ? "#fff" : "#000",
                strokeWidth: 20
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
              id: "mouse",
              d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
              style: {
                fill: "none",
                stroke: dark ? "#fff" : "#000",
                strokeWidth: 20
              }
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_News)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(2259);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/popup/BlogPopUp.js



/* eslint-disable @next/next/no-img-element */
const BlogPopUp = ({
  data,
  open,
  close
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `dizme_tm_modalbox ${open ? "opened" : ""}`,
    children: data && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "box_inner",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "close",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "#",
          onClick: () => close(),
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "icon-cancel"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "description_wrap",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "news_popup_informations",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "image",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "img/thumbs/4-2.jpg",
              alt: "image"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "main",
              "data-img-url": data && data.img,
              style: {
                backgroundImage: `url(${data && data.img})`
              }
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "details",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: data && data.title ? data.title : "Title"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                children: data && data.category
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {})]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text",
            children: data && data.details && data.details.map((details, i) => /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: details
            }, i))
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const popup_BlogPopUp = (BlogPopUp);
;// CONCATENATED MODULE: ./src/components/News.js
/* eslint-disable @next/next/no-img-element */

/* eslint-disable react-hooks/exhaustive-deps */






const News = () => {
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)([]);
  const {
    0: popupData,
    1: setPopupData
  } = (0,external_react_.useState)({});
  const {
    0: popup,
    1: setPopup
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(async () => {
    setData(await (0,utilits/* fatchData */.A6)("/static/blog.json"));
    (0,utilits/* aTagClick */.jd)();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "dizme_tm_section",
    id: "blog",
    children: [/*#__PURE__*/jsx_runtime_.jsx(popup_BlogPopUp, {
      open: popup,
      data: popupData,
      close: () => setPopup(false)
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "dizme_tm_news",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "dizme_tm_main_title",
          "data-align": "center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "From My Blog"
          }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: `Our Recent Updates, Blog, Tips, Tricks & More`
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "news_list",
          children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
            children: data && data.map((blog, i) => /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "wow fadeInUp",
              "data-wow-duration": "1s",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "list_inner",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "image",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "img/thumbs/42-29.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "main",
                    "data-img-url": blog && blog.img,
                    style: {
                      backgroundImage: `url(${blog && blog.img})`
                    }
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "date",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: blog && blog.date && blog.date.date
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: blog && blog.date && blog.date.month
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "dizme_tm_full_link",
                    href: "#",
                    onClick: () => {
                      setPopupData(blog && blog);
                      setPopup(true);
                    }
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "details",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "category",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: blog.category
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                    className: "title",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: blog.title
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "news_hidden_details",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "news_popup_informations",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "text",
                      children: blog.details && blog.details.map((details, i) => /*#__PURE__*/jsx_runtime_.jsx("p", {
                        children: details
                      }, i))
                    })
                  })
                })]
              })
            }, i))
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "brush_1 wow zoomIn",
        "data-wow-duration": "1s",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "img/brushes/news/1.png",
          alt: "image"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "brush_2 wow zoomIn",
        "data-wow-duration": "1s",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "img/brushes/news/2.png",
          alt: "image"
        })
      })]
    })]
  });
};

/* harmony default export */ const components_News = (News);

/***/ }),

/***/ 8288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const Newsletter = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "dizme_tm_section",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "dizme_tm_subscribe",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "inner",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "background",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                className: "dots",
                "data-img-url": "img/subscribe/dots.jpg",
                style: {
                  backgroundImage: 'url("img/subscribe/dots.jpg")'
                }
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                className: "overlay"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "left wow fadeInLeft",
                "data-wow-duration": "1s",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                  className: "subtitle",
                  children: "Subscribe Now"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
                  className: "title",
                  children: "Get My Newsletter"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
                  className: "text",
                  children: "Get latest news, updates, tips and trics in your inbox"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                className: "right wow fadeInRight",
                "data-wow-duration": "1s",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "field",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
                    type: "text",
                    placeholder: "Your email here"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
                    type: "submit",
                    defaultValue: "Send Now"
                  })]
                })
              })]
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Newsletter);

/***/ }),

/***/ 3020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2259);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @next/next/no-img-element */





const Partners = ({
  dark
}) => {
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    setData(await (0,_utilits__WEBPACK_IMPORTED_MODULE_1__/* .fatchData */ .A6)("/static/partners.json"));
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "dizme_tm_section",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "dizme_tm_partners",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "partners_inner",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("ul", {
            children: data && data.map((img, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
              className: "wow fadeIn",
              "data-wow-duration": "1s",
              "data-wow-delay": `0.${i + 1 * 2}s`,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "list_inner",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                  src: img.logo && img.logo[dark ? "dark" : "light"],
                  alt: "image"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                  className: "dizme_tm_full_link",
                  href: img.link
                })]
              })
            }, i))
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "brush_1 wow fadeInLeft",
        "data-wow-duration": "1s",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
          src: "img/brushes/partners/1.png",
          alt: "image"
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Partners);

/***/ }),

/***/ 2365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2905);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2259);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_0__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Process = ({
  dark
}) => {
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async () => {
    setData(await (0,_utilits__WEBPACK_IMPORTED_MODULE_2__/* .fatchData */ .A6)("/static/workProcess.json"));
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "dizme_tm_section",
    id: "process",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "dizme_tm_process",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "list",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
            children: data && data.map((data, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
              className: "wow fadeInUp",
              "data-wow-duration": "1s",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "list_inner",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  className: "icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                      className: "brush",
                      src: `img/brushes/process${dark ? "/dark" : ""}/${i + 1}.png`,
                      alt: "image"
                    }), (0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__["default"])(data.icons[dark ? "dark" : "light"])]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  className: "title",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                    children: data.title
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  className: "text",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                    children: data.dec
                  })
                })]
              })
            }, i))
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Process);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2728:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2905);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2259);
/* harmony import */ var _popup_ServicePopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3026);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_0__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @next/next/no-img-element */







const Service = ({
  dark
}) => {
  var _data$services;

  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: popupdata,
    1: setPopupdata
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    0: popup,
    1: setPopup
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    async function fetchData() {
      const res = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
      const data = await res.json();
      setData(data === null || data === void 0 ? void 0 : data.user);
    }

    fetchData(); // setData(await fatchData("/static/service.json"));

    setTimeout(() => {
      let VanillaTilt = __webpack_require__(5177);

      VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
        maxTilt: 6,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        transition: true
      });
    }, 1000);
  }, []);

  const onClick = index => {
    setPopup(true);
    setPopupdata(data && data[index]);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "dizme_tm_section",
    id: "service",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_popup_ServicePopup__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      data: popupdata,
      open: popup,
      close: () => setPopup(false)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "dizme_tm_services",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "dizme_tm_main_title",
          "data-align": "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
            children: "Services"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
            children: "What I Do for Clients"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
            children: "Most common methods for designing websites that work well on desktop is responsive and adaptive design"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "service_list",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("ul", {
            children: (data === null || data === void 0 ? void 0 : data.services) && (data === null || data === void 0 ? void 0 : (_data$services = data.services) === null || _data$services === void 0 ? void 0 : _data$services.map((data, i) => {
              var _data$image, _data$image2;

              return data && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                className: `wow ${i * 1 % 2 === 0 ? "fadeInLeft" : "fadeInRight"}`,
                "data-wow-duration": "1s",
                onClick: () => onClick(i),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "list_inner tilt-effect",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    className: "icon",
                    children: dark ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                      className: "back",
                      src: data === null || data === void 0 ? void 0 : (_data$image = data.image) === null || _data$image === void 0 ? void 0 : _data$image.url,
                      alt: "image"
                    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                      className: "back",
                      src: data === null || data === void 0 ? void 0 : (_data$image2 = data.image) === null || _data$image2 === void 0 ? void 0 : _data$image2.url,
                      alt: "image"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "title",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                      children: data === null || data === void 0 ? void 0 : data.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                      className: "price",
                      children: ["Starts from ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                        children: data === null || data === void 0 ? void 0 : data.charge
                      })]
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: "text",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                      children: data.desc
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                    className: "dizme_tm_full_link",
                    href: "#"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                    className: "popup_service_image",
                    src: "img/service/1.jpg",
                    alt: "image"
                  })]
                })
              }, i);
            }))
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "brush_1 wow fadeInLeft",
        "data-wow-duration": "1s",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
          src: "img/brushes/service/5.png",
          alt: "image"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "brush_2 wow zoomIn",
        "data-wow-duration": "1s",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
          src: "img/brushes/service/6.png",
          alt: "image"
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2259);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-img-element */

/* eslint-disable react-hooks/exhaustive-deps */





const Skills = ({
  dark
}) => {
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    setData(await (0,_utilits__WEBPACK_IMPORTED_MODULE_1__/* .fatchData */ .A6)("/static/info.json"));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_1__/* .activeSkillProgress */ .H8);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "dizme_tm_section",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "dizme_tm_skills",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "dizme_tm_main_title wow fadeInUp",
              "data-wow-duration": "1s",
              "data-align": "left",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                children: "Design is Life"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
                children: "I Develop Skills Regularly to Keep Me Update"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                children: "Most common methods for designing websites that work well on desktop is responsive and adaptive design"
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "dodo_progress wow fadeInUp",
              "data-wow-duration": "1s",
              children: data && data.skills && data.skills.map((skill, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "progress_inner skillsInner___",
                "data-value": skill.value,
                "data-color": skill.color,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                    className: "label",
                    children: skill.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                    className: "number",
                    children: [skill.value, "%"]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "background",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "bar",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                      className: "bar_in"
                    })
                  })
                })]
              }, i))
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "right",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
              src: `img/skills/${dark ? 2 : 1}.jpg`,
              alt: "image"
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);

/***/ }),

/***/ 5562:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2259);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */






swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.EffectFade, swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay]);

const Testimonial = () => {
  var _data$testimonials;

  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchData() {
      const res = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
      const data = await res.json();
      setData(data === null || data === void 0 ? void 0 : data.user);
    }

    fetchData(); // setData(await fatchData("/static/testimonial.json"));
  }, []);
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".owl-dots",
      clickable: true
    }
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "dizme_tm_section",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "dizme_tm_testimonials",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "dizme_tm_main_title",
        "data-align": "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          children: "Testimonials"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
          children: "What My Clients Say"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          children: "Most common methods for designing websites that work well on desktop is responsive and adaptive design"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "list_wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "total",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "in",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, _objectSpread(_objectSpread({}, props), {}, {
              className: "",
              children: (data === null || data === void 0 ? void 0 : data.testimonials) && (data === null || data === void 0 ? void 0 : (_data$testimonials = data.testimonials) === null || _data$testimonials === void 0 ? void 0 : _data$testimonials.map((data, i) => {
                var _data$image, _data$image2;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: "icon",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      xmlnsXlink: "http://www.w3.org/1999/xlink",
                      version: "1.1",
                      id: "Layer_1",
                      x: "0px",
                      y: "0px",
                      width: "200px",
                      height: "200px",
                      viewBox: "796 698 200 200",
                      enableBackground: "new 796 698 200 200",
                      xmlSpace: "preserve",
                      className: "svg replaced-svg",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("path", {
                          d: "M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("path", {
                          d: "M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z"
                        })]
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: "text",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
                      children: [data === null || data === void 0 ? void 0 : data.review, data === null || data === void 0 ? void 0 : (_data$image = data.image) === null || _data$image === void 0 ? void 0 : _data$image.url]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "short",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "image",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                        className: "main"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                        style: {
                          borderRadius: "50%"
                        },
                        src: data === null || data === void 0 ? void 0 : (_data$image2 = data.image) === null || _data$image2 === void 0 ? void 0 : _data$image2.url,
                        alt: "x"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "detail",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                        children: data === null || data === void 0 ? void 0 : data.name
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                        children: data === null || data === void 0 ? void 0 : data.position
                      })]
                    })]
                  })]
                }, i);
              }))
            })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "owl-dots"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "left_details",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "det_image one wow fadeIn",
              "data-wow-duration": "1s",
              "data-img-url": "img/testimonials/2.jpg"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "det_image two wow fadeIn",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.2s",
              "data-img-url": "img/testimonials/1.jpg"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "det_image three wow fadeIn",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.4s",
              "data-img-url": "img/testimonials/3.jpg"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "det_image four wow fadeIn",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.6s",
              "data-img-url": "img/testimonials/4.jpg"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "circle green animPulse"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "circle yellow animPulse"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "circle border animPulse"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "right_details",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "det_image one wow fadeIn",
              "data-wow-duration": "1s",
              "data-img-url": "img/testimonials/5.jpg"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "det_image two wow fadeIn",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.2s",
              "data-img-url": "img/testimonials/6.jpg"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "det_image three wow fadeIn",
              "data-wow-duration": "1s",
              "data-wow-delay": "0.4s",
              "data-img-url": "img/testimonials/7.jpg"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "circle yellow animPulse"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "circle purple animPulse"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "circle border animPulse"
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "brush_1 wow fadeInRight",
        "data-wow-duration": "1s",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
          src: "img/brushes/testimonials/1.png",
          alt: "image"
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



/* eslint-disable @next/next/no-img-element */
const ServicePopup = ({
  data,
  open,
  close
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: `dizme_tm_modalbox ${open ? "opened" : ""}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "box_inner",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "close",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: "#",
          onClick: () => close(),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: "icon-cancel"
          })
        })
      }), data && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "description_wrap",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "service_popup_informations",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "image",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "img/thumbs/4-2.jpg",
              alt: "image"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "main",
              "data-img-url": data && data.img,
              style: {
                backgroundImage: `url(${data && data.img})`
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "main_title",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
              children: data && data.title ? data.title : "Title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
              className: "price",
              children: ["Starts from ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: ["$", data && data.price]
              })]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "descriptions",
            children: data && data.dec && data.dec.map((dec, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              children: dec
            }, i))
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicePopup);

/***/ }),

/***/ 4393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/CopyRight.js



const CopyRight = ({
  brandName
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "dizme_tm_section",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dizme_tm_copyright",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "inner",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "left wow fadeInLeft",
            "data-wow-duration": "1s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["Developed with love by", " ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://themeforest.net/user/codeefly",
                target: "_blank",
                rel: "noreferrer",
                children: brandName && brandName
              }), " ", "\xA9 ", new Date().getFullYear()]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "right wow fadeInRight",
            "data-wow-duration": "1s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: `Terms & Condition`
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: "Privacy Policy"
                })
              })]
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const components_CopyRight = (CopyRight);
;// CONCATENATED MODULE: ./src/useClickOutside.js


let useClickOutside = handler => {
  let domNode = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    let maybeHandler = event => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

/* harmony default export */ const src_useClickOutside = (useClickOutside);
;// CONCATENATED MODULE: ./src/components/popup/ImageView.js
/* eslint-disable @next/next/no-img-element */





const ImgViews = ({
  close,
  src
}) => {
  let domNode = src_useClickOutside(() => {
    close(false);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mfp-bg mfp-ready",
      onClick: () => close(false)
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
      tabIndex: -1,
      style: {
        overflow: "hidden auto"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mfp-content",
          ref: domNode,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "mfp-iframe-scaler",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "mfp-img",
              src: src,
              alt: "x"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mfp-preloader",
          children: "Loading..."
        })]
      })
    })]
  });
};

const ImageView = () => {
  const {
    0: img,
    1: setImg
  } = (0,external_react_.useState)(false);
  const {
    0: imgValue,
    1: setImgValue
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      const a = document.querySelectorAll("a");
      a.forEach(a => {
        if (a.href.includes("img/")) {
          if (a.getAttribute("download") === null) {
            a.addEventListener("click", e => {
              e.preventDefault();
              setImgValue(a.href);
              setImg(true);
            });
          }
        }
      });
    }, 1500);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: img && /*#__PURE__*/jsx_runtime_.jsx(ImgViews, {
      close: () => setImg(false),
      src: imgValue
    })
  });
};

/* harmony default export */ const popup_ImageView = (ImageView);
;// CONCATENATED MODULE: ./src/components/popup/VideoPopup.js





const VideoPopup_ = ({
  close,
  videoID
}) => {
  let domNode = src_useClickOutside(() => {
    close(false);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mfp-bg mfp-ready",
      onClick: () => close(false)
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
      tabIndex: -1,
      style: {
        overflow: "hidden auto"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mfp-container mfp-s-ready mfp-iframe-holder",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mfp-content",
          ref: domNode,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mfp-iframe-scaler",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              title: "Close (Esc)",
              type: "button",
              className: "mfp-close",
              onClick: () => close(),
              children: "\xD7"
            }), /*#__PURE__*/jsx_runtime_.jsx("iframe", {
              src: videoID,
              title: "YouTube video player",
              frameBorder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mfp-preloader",
          children: "Loading..."
        })]
      })
    })]
  });
};

const VideoPopup = () => {
  const {
    0: video,
    1: setVideo
  } = (0,external_react_.useState)(false);
  const {
    0: videoValue,
    1: setVideoValue
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      const a = document.querySelectorAll("a");
      a.forEach(a => {
        if (a.href.includes("www.youtube.com") || a.href.includes("vimeo.com") || a.href.includes("soundcloud.com")) {
          a.addEventListener("click", e => {
            e.preventDefault();
            setVideoValue(a.href);
            setVideo(true);
          });
        }
      });
    }, 1500);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: video && /*#__PURE__*/jsx_runtime_.jsx(VideoPopup_, {
      close: () => setVideo(false),
      videoID: videoValue
    })
  });
};

/* harmony default export */ const popup_VideoPopup = (VideoPopup);
// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(2259);
// EXTERNAL MODULE: ./src/layout/Cursor.js
var Cursor = __webpack_require__(6456);
;// CONCATENATED MODULE: ./src/layout/Header.js



/* eslint-disable @next/next/no-img-element */
const Header = ({
  logo
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "dizme_tm_header",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inner",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "logo",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            children: logo && /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: logo ? logo : "img/logo/logo.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "menu",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "anchor_nav",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "current",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#home",
                children: "Home"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#about",
                children: "About"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#portfolio",
                children: "Portfolio"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#service",
                children: "Service"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#blog",
                children: "Blog"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#contact",
                children: "Contact"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "download_cv",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "img/cv/1.jpg",
                download: "",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Download CV"
                })
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const layout_Header = (Header);
;// CONCATENATED MODULE: ./src/layout/MobileMenu.js




const MobileMenu = ({
  logo
}) => {
  const {
    0: toggle,
    1: setToggle
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "dizme_tm_mobile_menu",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mobile_menu_inner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mobile_in",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "logo",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: logo ? logo : "img/logo/logo.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "trigger",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `hamburger hamburger--slider ${toggle ? "is-active" : ""}`,
            onClick: () => setToggle(!toggle),
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "hamburger-box",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "hamburger-inner"
              })
            })
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dropdown",
      style: {
        display: toggle ? "block" : "none"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "dropdown_inner",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "anchor_nav",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "current",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "#home",
              onClick: () => setToggle(false),
              children: "Home"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: () => setToggle(false),
              href: "#about",
              children: "About"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: () => setToggle(false),
              href: "#portfolio",
              children: "Portfolio"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: () => setToggle(false),
              href: "#service",
              children: "Service"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: () => setToggle(false),
              href: "#blog",
              children: "Blog"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: () => setToggle(false),
              href: "#contact",
              children: "Contact"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "download_cv",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "img/cv/1.jpg",
              download: "",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Download CV"
              })
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const layout_MobileMenu = (MobileMenu);
// EXTERNAL MODULE: ./src/layout/PreLoader.js
var PreLoader = __webpack_require__(4141);
;// CONCATENATED MODULE: ./src/layout/Progressbar.js




const Progressbar = () => {
  (0,external_react_.useEffect)(() => {
    let scrollUp = document.getElementById("scroll-top"),
        lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      let st = window.scrollY;

      if (st > 110) {
        scrollUp.classList.add("active");
      } else {
        scrollUp.classList.remove("active");
      }
    });
  }, []);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "progressbar",
    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
      href: "#",
      id: "scroll-top",
      onClick: () => onClick(),
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text",
        style: {
          bottom: "150.75px"
        },
        children: "To Top"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "line"
    })]
  });
};

/* harmony default export */ const layout_Progressbar = (Progressbar);
;// CONCATENATED MODULE: ./src/layout/Layout.js













const Layout = ({
  children,
  dark
}) => {
  const {
    0: siteInfo,
    1: setSiteInfo
  } = (0,external_react_.useState)({});
  (0,external_react_.useEffect)(async () => {
    setSiteInfo(await (0,utilits/* fatchData */.A6)("/static/siteSetting.json"));
    (0,utilits/* dataImage */.CC)();
  }, []);
  (0,external_react_.useEffect)(() => {
    (0,utilits/* wowJsAnimation */.OE)();
    (0,utilits/* aTagClick */.jd)();
    window.addEventListener("scroll", utilits/* scroll_ */.Ht);
    window.addEventListener("scroll", utilits/* stickyNav */.h4);
    window.addEventListener("scroll", utilits/* scrollTop */.SM);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PreLoader/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(popup_ImageView, {}), /*#__PURE__*/jsx_runtime_.jsx(popup_VideoPopup, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "dizme_tm_all_wrap",
      "data-magic-cursor": "show",
      children: [/*#__PURE__*/jsx_runtime_.jsx(layout_MobileMenu, {
        logo: siteInfo && siteInfo.logo && siteInfo.logo[dark ? "dark" : "light"]
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_Header, {
        logo: siteInfo && siteInfo.logo && siteInfo.logo[dark ? "dark" : "light"]
      }), children, /*#__PURE__*/jsx_runtime_.jsx(components_CopyRight, {
        brandName: siteInfo && siteInfo.brandName
      }), /*#__PURE__*/jsx_runtime_.jsx(Cursor/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(layout_Progressbar, {})]
    })]
  });
};

/* harmony default export */ const layout_Layout = (Layout);

/***/ })

};
;