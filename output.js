//Thu Aug 22 2024 06:40:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("青椒");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ae) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ag) {
      return typeof ag;
    } : function (ag) {
      return ag && "function" == typeof Symbol && ag.constructor === Symbol && ag !== Symbol.prototype ? "symbol" : typeof ag;
    };
    return b(ae);
  }
  function c(ae, af) {
    var ah = "undefined" != typeof Symbol && ae[Symbol.iterator] || ae["@@iterator"];
    if (!ah) {
      if (Array.isArray(ae) || (ah = d(ae)) || af && ae && "number" == typeof ae.length) {
        ah && (ae = ah);
        var ai = 0,
          aj = function () {};
        return {
          s: aj,
          n: function () {
            var ao = {
              done: !0
            };
            return ai >= ae.length ? ao : {
              done: !1,
              value: ae[ai++]
            };
          },
          e: function (ao) {
            throw ao;
          },
          f: aj
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ak,
      al = !0,
      am = !1;
    return {
      s: function () {
        ah = ah.call(ae);
      },
      n: function () {
        var ar = ah.next();
        al = ar.done;
        return ar;
      },
      e: function (aq) {
        am = !0;
        ak = aq;
      },
      f: function () {
        try {
          al || null == ah.return || ah.return();
        } finally {
          if (am) {
            throw ak;
          }
        }
      }
    };
  }
  function d(ae, af) {
    if (ae) {
      if ("string" == typeof ae) {
        return f(ae, af);
      }
      var ag = {}.toString.call(ae).slice(8, -1);
      "Object" === ag && ae.constructor && (ag = ae.constructor.name);
      return "Map" === ag || "Set" === ag ? Array.from(ae) : "Arguments" === ag || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ag) ? f(ae, af) : void 0;
    }
  }
  function f(ae, af) {
    (null == af || af > ae.length) && (af = ae.length);
    for (var ah = 0, ai = Array(af); ah < af; ah++) {
      ai[ah] = ae[ah];
    }
    return ai;
  }
  function g() {
    'use strict';

    g = function () {
      return ag;
    };
    var af,
      ag = {
        wrap: ap
      },
      ah = Object.prototype,
      ai = ah.hasOwnProperty,
      aj = Object.defineProperty || function (aL, aM, aN) {
        aL[aM] = aN.value;
      },
      ak = "function" == typeof Symbol ? Symbol : {},
      al = ak.iterator || "@@iterator",
      am = ak.asyncIterator || "@@asyncIterator",
      an = ak.toStringTag || "@@toStringTag";
    function ao(aL, aM, aN) {
      var aP = {
        value: aN,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aL, aM, aP);
      return aL[aM];
    }
    try {
      ao({}, "");
    } catch (aM) {
      ao = function (aN, aO, aP) {
        return aN[aO] = aP;
      };
    }
    function ap(aO, aP, aQ, aR) {
      var aS = aP && aP.prototype instanceof aw ? aP : aw,
        aT = Object.create(aS.prototype),
        aU = new aJ(aR || []);
      aj(aT, "_invoke", {
        value: aF(aO, aQ, aU)
      });
      return aT;
    }
    function aq(aO, aP, aQ) {
      try {
        return {
          type: "normal",
          arg: aO.call(aP, aQ)
        };
      } catch (aV) {
        var aS = {
          type: "throw",
          arg: aV
        };
        return aS;
      }
    }
    var ar = "suspendedStart",
      as = "suspendedYield",
      at = "executing",
      au = "completed",
      av = {};
    function aw() {}
    function ax() {}
    function ay() {}
    var az = {};
    ao(az, al, function () {
      return this;
    });
    var aA = Object.getPrototypeOf,
      aB = aA && aA(aA(aK([])));
    aB && aB !== ah && ai.call(aB, al) && (az = aB);
    ay.prototype = aw.prototype = Object.create(az);
    var aC = ay.prototype;
    function aD(aO) {
      ["next", "throw", "return"].forEach(function (aQ) {
        ao(aO, aQ, function (aS) {
          return this._invoke(aQ, aS);
        });
      });
    }
    function aE(aO, aP) {
      function aT(aU, aV, aW, aX) {
        var aZ = aq(aO[aU], aO, aV);
        if ("throw" !== aZ.type) {
          var b0 = aZ.arg,
            b1 = b0.value;
          return b1 && "object" == b(b1) && ai.call(b1, "__await") ? aP.resolve(b1.__await).then(function (b3) {
            aT("next", b3, aW, aX);
          }, function (b3) {
            aT("throw", b3, aW, aX);
          }) : aP.resolve(b1).then(function (b3) {
            b0.value = b3;
            aW(b0);
          }, function (b3) {
            return aT("throw", b3, aW, aX);
          });
        }
        aX(aZ.arg);
      }
      var aR;
      aj(this, "_invoke", {
        value: function (aU, aV) {
          function aX() {
            return new aP(function (b0, b1) {
              aT(aU, aV, b0, b1);
            });
          }
          return aR = aR ? aR.then(aX, aX) : aX();
        }
      });
    }
    function aF(aO, aP, aQ) {
      var aS = ar;
      return function (aU, aV) {
        if (aS === at) {
          throw Error("Generator is already running");
        }
        if (aS === au) {
          if ("throw" === aU) {
            throw aV;
          }
          var aX = {
            value: af,
            done: !0
          };
          return aX;
        }
        for (aQ.method = aU, aQ.arg = aV;;) {
          var aY = aQ.delegate;
          if (aY) {
            var aZ = aG(aY, aQ);
            if (aZ) {
              if (aZ === av) {
                continue;
              }
              return aZ;
            }
          }
          if ("next" === aQ.method) {
            aQ.sent = aQ._sent = aQ.arg;
          } else {
            if ("throw" === aQ.method) {
              if (aS === ar) {
                throw aS = au, aQ.arg;
              }
              aQ.dispatchException(aQ.arg);
            } else {
              "return" === aQ.method && aQ.abrupt("return", aQ.arg);
            }
          }
          aS = at;
          var b0 = aq(aO, aP, aQ);
          if ("normal" === b0.type) {
            if (aS = aQ.done ? au : as, b0.arg === av) {
              continue;
            }
            var b1 = {
              value: b0.arg,
              done: aQ.done
            };
            return b1;
          }
          "throw" === b0.type && (aS = au, aQ.method = "throw", aQ.arg = b0.arg);
        }
      };
    }
    function aG(aO, aP) {
      var aT = aP.method,
        aU = aO.iterator[aT];
      if (aU === af) {
        aP.delegate = null;
        "throw" === aT && aO.iterator.return && (aP.method = "return", aP.arg = af, aG(aO, aP), "throw" === aP.method) || "return" !== aT && (aP.method = "throw", aP.arg = new TypeError("The iterator does not provide a '" + aT + "' method"));
        return av;
      }
      var aV = aq(aU, aO.iterator, aP.arg);
      if ("throw" === aV.type) {
        aP.method = "throw";
        aP.arg = aV.arg;
        aP.delegate = null;
        return av;
      }
      var aS = aV.arg;
      return aS ? aS.done ? (aP[aO.resultName] = aS.value, aP.next = aO.nextLoc, "return" !== aP.method && (aP.method = "next", aP.arg = af), aP.delegate = null, av) : aS : (aP.method = "throw", aP.arg = new TypeError("iterator result is not an object"), aP.delegate = null, av);
    }
    function aH(aO) {
      var aS = {
        tryLoc: aO[0]
      };
      1 in aO && (aS.catchLoc = aO[1]);
      2 in aO && (aS.finallyLoc = aO[2], aS.afterLoc = aO[3]);
      this.tryEntries.push(aS);
    }
    function aI(aO) {
      var aP = aO.completion || {};
      aP.type = "normal";
      delete aP.arg;
      aO.completion = aP;
    }
    function aJ(aO) {
      var aP = {
        tryLoc: "root"
      };
      this.tryEntries = [aP];
      aO.forEach(aH, this);
      this.reset(!0);
    }
    function aK(aO) {
      if (aO || "" === aO) {
        var aP = aO[al];
        if (aP) {
          return aP.call(aO);
        }
        if ("function" == typeof aO.next) {
          return aO;
        }
        if (!isNaN(aO.length)) {
          var aQ = -1,
            aR = function aT() {
              for (; ++aQ < aO.length;) {
                if (ai.call(aO, aQ)) {
                  aT.value = aO[aQ];
                  aT.done = !1;
                  return aT;
                }
              }
              aT.value = af;
              aT.done = !0;
              return aT;
            };
          return aR.next = aR;
        }
      }
      throw new TypeError(b(aO) + " is not iterable");
    }
    ax.prototype = ay;
    aj(aC, "constructor", {
      value: ay,
      configurable: !0
    });
    aj(ay, "constructor", {
      value: ax,
      configurable: !0
    });
    ax.displayName = ao(ay, an, "GeneratorFunction");
    ag.isGeneratorFunction = function (aO) {
      var aQ = "function" == typeof aO && aO.constructor;
      return !!aQ && (aQ === ax || "GeneratorFunction" === (aQ.displayName || aQ.name));
    };
    ag.mark = function (aO) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aO, ay) : (aO.__proto__ = ay, ao(aO, an, "GeneratorFunction"));
      aO.prototype = Object.create(aC);
      return aO;
    };
    ag.awrap = function (aO) {
      var aP = {
        __await: aO
      };
      return aP;
    };
    aD(aE.prototype);
    ao(aE.prototype, am, function () {
      return this;
    });
    ag.AsyncIterator = aE;
    ag.async = function (aO, aP, aQ, aR, aS) {
      void 0 === aS && (aS = Promise);
      var aU = new aE(ap(aO, aP, aQ, aR), aS);
      return ag.isGeneratorFunction(aP) ? aU : aU.next().then(function (aW) {
        return aW.done ? aW.value : aU.next();
      });
    };
    aD(aC);
    ao(aC, an, "Generator");
    ao(aC, al, function () {
      return this;
    });
    ao(aC, "toString", function () {
      return "[object Generator]";
    });
    ag.keys = function (aO) {
      var aQ = Object(aO),
        aR = [];
      for (var aS in aQ) aR.push(aS);
      aR.reverse();
      return function aT() {
        for (; aR.length;) {
          var aU = aR.pop();
          if (aU in aQ) {
            aT.value = aU;
            aT.done = !1;
            return aT;
          }
        }
        aT.done = !0;
        return aT;
      };
    };
    ag.values = aK;
    aJ.prototype = {
      constructor: aJ,
      reset: function (aO) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = af, this.done = !1, this.delegate = null, this.method = "next", this.arg = af, this.tryEntries.forEach(aI), !aO) {
          for (var aQ in this) "t" === aQ.charAt(0) && ai.call(this, aQ) && !isNaN(+aQ.slice(1)) && (this[aQ] = af);
        }
      },
      stop: function () {
        this.done = !0;
        var aO = this.tryEntries[0].completion;
        if ("throw" === aO.type) {
          throw aO.arg;
        }
        return this.rval;
      },
      dispatchException: function (aO) {
        if (this.done) {
          throw aO;
        }
        var aQ = this;
        function aX(aY, aZ) {
          aT.type = "throw";
          aT.arg = aO;
          aQ.next = aY;
          aZ && (aQ.method = "next", aQ.arg = af);
          return !!aZ;
        }
        for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
          var aS = this.tryEntries[aR],
            aT = aS.completion;
          if ("root" === aS.tryLoc) {
            return aX("end");
          }
          if (aS.tryLoc <= this.prev) {
            var aU = ai.call(aS, "catchLoc"),
              aV = ai.call(aS, "finallyLoc");
            if (aU && aV) {
              if (this.prev < aS.catchLoc) {
                return aX(aS.catchLoc, !0);
              }
              if (this.prev < aS.finallyLoc) {
                return aX(aS.finallyLoc);
              }
            } else {
              if (aU) {
                if (this.prev < aS.catchLoc) {
                  return aX(aS.catchLoc, !0);
                }
              } else {
                if (!aV) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aS.finallyLoc) {
                  return aX(aS.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aO, aP) {
        for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
          var aS = this.tryEntries[aR];
          if (aS.tryLoc <= this.prev && ai.call(aS, "finallyLoc") && this.prev < aS.finallyLoc) {
            var aT = aS;
            break;
          }
        }
        aT && ("break" === aO || "continue" === aO) && aT.tryLoc <= aP && aP <= aT.finallyLoc && (aT = null);
        var aU = aT ? aT.completion : {};
        aU.type = aO;
        aU.arg = aP;
        return aT ? (this.method = "next", this.next = aT.finallyLoc, av) : this.complete(aU);
      },
      complete: function (aO, aP) {
        if ("throw" === aO.type) {
          throw aO.arg;
        }
        "break" === aO.type || "continue" === aO.type ? this.next = aO.arg : "return" === aO.type ? (this.rval = this.arg = aO.arg, this.method = "return", this.next = "end") : "normal" === aO.type && aP && (this.next = aP);
        return av;
      },
      finish: function (aO) {
        for (var aP = this.tryEntries.length - 1; aP >= 0; --aP) {
          var aQ = this.tryEntries[aP];
          if (aQ.finallyLoc === aO) {
            this.complete(aQ.completion, aQ.afterLoc);
            aI(aQ);
            return av;
          }
        }
      },
      catch: function (aO) {
        for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
          var aR = this.tryEntries[aQ];
          if (aR.tryLoc === aO) {
            var aS = aR.completion;
            if ("throw" === aS.type) {
              var aT = aS.arg;
              aI(aR);
            }
            return aT;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aO, aP, aQ) {
        this.delegate = {
          iterator: aK(aO),
          resultName: aP,
          nextLoc: aQ
        };
        "next" === this.method && (this.arg = af);
        return av;
      }
    };
    return ag;
  }
  function h(ae, af, ag, ah, ai, aj, ak) {
    try {
      var am = ae[aj](ak),
        an = am.value;
    } catch (aq) {
      return void ag(aq);
    }
    am.done ? af(an) : Promise.resolve(an).then(ah, ai);
  }
  function i(ae) {
    return function () {
      var ah = this,
        ai = arguments;
      return new Promise(function (aj, ak) {
        var an = ae.apply(ah, ai);
        function ao(aq) {
          h(an, aj, ak, ao, ap, "next", aq);
        }
        function ap(aq) {
          h(an, aj, ak, ao, ap, "throw", aq);
        }
        ao(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.QingJiao : $.getdata("QingJiao")) || "",
    k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    l = void 0,
    m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "",
    w = "23",
    x = "34",
    y = "FR*r!isE5W",
    z = "9080827ac7bea8dd4f8987a4bfc85b15",
    A = "",
    B = "0",
    D = "",
    E = "";
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function ag() {
      var ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX;
      return g().wrap(function (aZ) {
        for (;;) {
          switch (aZ.prev = aZ.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                aZ.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              aZ.next = 5;
              return ac("先去boxjs填写账号密码");
            case 5:
              return aZ.abrupt("return");
            case 6:
              aZ.next = 8;
              return aa();
            case 8:
              l = aZ.sent;
              ai = j.split(" ");
              aj = c(ai);
              aZ.prev = 11;
              aj.s();
            case 13:
              if ((ak = aj.n()).done) {
                aZ.next = 186;
                break;
              }
              al = ak.value;
              console.log("随机生成UA");
              am = a6();
              t = am.ua;
              u = am.commonUa;
              v = am.uuid;
              console.log(t);
              console.log(u);
              q = al.split("&")[0];
              r = al.split("&")[1];
              s = al.split("&")[2];
              console.log("用户：".concat(q, "开始任务"));
              console.log("获取sessionId");
              aZ.next = 29;
              return N("/api/account/init");
            case 29:
              an = aZ.sent;
              o = an.data.session.id;
              console.log(o);
              console.log("获取signature_key");
              aZ.next = 35;
              return H("/web/init?client_id=".concat(x));
            case 35:
              ao = aZ.sent;
              m = ao.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              aZ.next = 41;
              return J("/web/oauth/credential_auth");
            case 41:
              if (ap = aZ.sent, ap.data) {
                aZ.next = 45;
                break;
              }
              console.log(ap.message);
              return aZ.abrupt("continue", 184);
            case 45:
              aq = ap.data.authorization_code.code;
              console.log(aq);
              console.log("登录");
              aZ.next = 50;
              return N("/api/zbtxz/login", "check_token=&code=".concat(aq, "&token=&type=-1&union_id="));
            case 50:
              if (ar = aZ.sent, console.log("登录成功"), p = ar.data.session.account_id, o = ar.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), E) {
                aZ.next = 64;
                break;
              }
              aZ.next = 60;
              return L("/api/app_start_page/list/new?height=2260&width=1080");
            case 60:
              as = aZ.sent;
              at = /\/module-lottery\/home\/home\?hide_back=1&id=([a-zA-Z0-9]+)/;
              au = JSON.stringify(as).match(at);
              au && (E = au[1]);
            case 64:
              if (E) {
                aZ.next = 67;
                break;
              }
              console.log("获取id失败");
              return aZ.abrupt("continue", 184);
            case 67:
              console.log(E);
              console.log("获取apiDt");
              aZ.next = 71;
              return P("/aosbase/_auth_dt");
            case 71:
              av = aZ.sent;
              A = av.data.substring(32, 68);
              console.log(A);
              aw = {
                app_user_token: o,
                appid: "jiaojiang",
                noncestr: a9(6, !1),
                phone: q,
                portrait_url: ar.data.account.image_url,
                timestamp: Math.round(new Date().getTime() / 1000).toString(),
                user_id: ar.data.account.id,
                user_name: ar.data.account.nick_name,
                wx_openid: "",
                wx_unionid: ""
              };
              aw.signature = l.md5(a7(aw) + "&appkey=".concat(z));
              aZ.next = 78;
              return W("/aosbase/_auth_appuserinit", aw);
            case 78:
              ax = aZ.sent;
              D = ax.data.access_token;
              B = ax.data.data.user_id;
              ay = Date.now() + "" + Math.floor(10000000 * Math.random());
              az = E;
              aZ.next = 85;
              return R("/aoslottery/ac_lottery_times?id=".concat(az));
            case 85:
              if (aA = aZ.sent, console.log("拥有".concat(aA.data.day_remain, "次抽奖")), !(aA.data.day_remain > 0)) {
                aZ.next = 150;
                break;
              }
              console.log("获取抽奖滑块token");
              aB = "";
              aC = 0;
            case 91:
              if (!(aC < 3)) {
                aZ.next = 130;
                break;
              }
              aD = a9(10, !1);
              aE = Math.round(new Date().getTime() / 1000).toString();
              aF = "https://jiaojiang.y-h5.iyunxh.com/module-lottery/home/home?hide_back=1";
              aG = a4({
                once: aD,
                referer: aF,
                timestamp: aE,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              aZ.next = 98;
              return R("/basemodule/_captcha_get?once=".concat(aD, "&referer=").concat(aF, "&timestamp=").concat(aE, "&type=1&signature=").concat(encodeURIComponent(aG)));
            case 98:
              aH = aZ.sent;
              console.log("滑块：".concat(aH.data.block));
              console.log("背景：".concat(aH.data.background));
              aZ.next = 103;
              return Y({
                slidingImage: aH.data.block,
                backImage: aH.data.background
              });
            case 103:
              if (aI = aZ.sent, aI) {
                aZ.next = 109;
                break;
              }
              console.log("ddddocr服务异常");
              aZ.next = 108;
              return ac("ddddocr服务异常");
            case 108:
              return aZ.abrupt("continue", 127);
            case 109:
              console.log(aI);
              aJ = aI.result;
              aK = a4({
                x: aJ,
                width: 384,
                track: [{
                  x: Math.floor(aJ / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aJ / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aJ / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aJ / 4),
                  y: 0,
                  time: 100
                }, {
                  x: aJ / 2,
                  y: 0,
                  time: 100
                }, {
                  x: aJ,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              aZ.next = 115;
              return W("/basemodule/_captcha_check", {
                token: aH.data.token,
                data: aK,
                referer: aF,
                type: aH.data.type
              });
            case 115:
              if (aL = aZ.sent, !aL.data.result) {
                aZ.next = 126;
                break;
              }
              console.log("验证成功");
              aZ.next = 120;
              return W("/aosbasemodule/intelverifcode_check", {
                validate: aL.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 120:
              aM = aZ.sent;
              aB = aM.data.tokenid;
              console.log("滑块token：".concat(aB));
              return aZ.abrupt("break", 130);
            case 126:
              console.log("验证失败");
            case 127:
              aC++;
              aZ.next = 91;
              break;
            case 130:
              if (aB) {
                aZ.next = 132;
                break;
              }
              return aZ.abrupt("continue", 184);
            case 132:
              aZ.next = 134;
              return R("/aoslottery/_ac_detail?id=".concat(az));
            case 134:
              aN = aZ.sent;
              aO = 0;
            case 136:
              if (!(aO < aA.data.day_remain)) {
                aZ.next = 150;
                break;
              }
              aZ.next = 139;
              return W("/aosstat/_event_sub", {
                _need_stat: 0,
                _need_task: 0,
                _need_behavior: 1,
                event: "lotteryTake",
                action: "take",
                brief: "抽奖提交",
                client_type: 3,
                module_id: aN.data.m_id,
                content_id: aN.data.id,
                num: 1,
                duration: 0,
                column_id: 0,
                column_title: "",
                title: aN.data.title,
                device_token: ay,
                user_id: ax.data.data.user_id,
                user_name: ax.data.data.user_name,
                phone_num: q,
                page_path: "module-study/home/home",
                version: "1.0.0",
                network: "wifi",
                client_model: "android",
                system_version: "Android 11",
                resolution: "",
                baidu_longitude: "",
                baidu_latitude: "",
                longitude: 0,
                latitude: 0,
                province: "",
                city: "",
                area: "",
                street: "",
                address: ""
              });
            case 139:
              if (aP = aZ.sent, console.log("抽奖提交：".concat(aP.msg)), 0 == aP.code) {
                aZ.next = 143;
                break;
              }
              return aZ.abrupt("continue", 147);
            case 143:
              var b1 = {
                id: az,
                verif_uuid: "",
                verif_code: "",
                afs_tokenid: aB,
                collect_info: "",
                longitude: 0,
                latitude: 0,
                device_token: ay
              };
              aZ.next = 145;
              return W("/aoslottery/ac_sub", b1);
            case 145:
              aQ = aZ.sent;
              0 == aQ.code ? console.log("抽奖获得：".concat(null == aQ || null === (aR = aQ.data) || void 0 === aR ? void 0 : aR.title)) : "o d w" == aQ.msg ? console.log("谢谢参与") : console.log(aQ.msg);
            case 147:
              aO++;
              aZ.next = 136;
              break;
            case 150:
              aZ.next = 152;
              return R("/aoslottery/_ac_detail?id=".concat(az));
            case 152:
              aS = aZ.sent;
              aZ.next = 155;
              return R("/aoslottery/act_user?offset=0&count=20&activity_id=".concat(az, "&module_id=").concat(aS.data.m_id));
            case 155:
              if (aT = aZ.sent, !aT.data) {
                aZ.next = 184;
                break;
              }
              aU = c(aT.data);
              aZ.prev = 158;
              aU.s();
            case 160:
              if ((aV = aU.n()).done) {
                aZ.next = 176;
                break;
              }
              if (aW = aV.value, 3 != aW.type || 0 != aW.state) {
                aZ.next = 174;
                break;
              }
              if (console.log("奖品：".concat(aW.title)), !s) {
                aZ.next = 172;
                break;
              }
              console.log("领取奖品");
              aZ.next = 168;
              return U("/aosbasemodule/cash_send?module_id=".concat(aW.module_id, "&activity_id=").concat(aW.id, "&cash_code=").concat(aW.code, "&cash_sign=").concat(aW.cash_data.cash_sign));
            case 168:
              aX = aZ.sent;
              0 == aX.code ? (console.log("领取成功"), n += "用户：".concat(q, " 抽奖获得：").concat(aW.title, " 领取结果：领取成功\n")) : (console.log(aX.msg), n += "用户：".concat(q, " 抽奖获得：").concat(aW.title, " 领取结果：").concat(aX.msg, "\n"));
              aZ.next = 174;
              break;
            case 172:
              console.log("请配置wxToken");
              n += "用户：".concat(q, " 请配置wxToken\n");
            case 174:
              aZ.next = 160;
              break;
            case 176:
              aZ.next = 181;
              break;
            case 178:
              aZ.prev = 178;
              aZ.t0 = aZ.catch(158);
              aU.e(aZ.t0);
            case 181:
              aZ.prev = 181;
              aU.f();
              return aZ.finish(181);
            case 184:
              aZ.next = 13;
              break;
            case 186:
              aZ.next = 191;
              break;
            case 188:
              aZ.prev = 188;
              aZ.t1 = aZ.catch(11);
              aj.e(aZ.t1);
            case 191:
              aZ.prev = 191;
              aj.f();
              return aZ.finish(191);
            case 194:
              if (!n) {
                aZ.next = 197;
                break;
              }
              aZ.next = 197;
              return ac(n);
            case 197:
            case "end":
              return aZ.stop();
          }
        }
      }, ag, null, [[11, 188, 191, 194], [158, 178, 181, 184]]);
    }));
    return G.apply(this, arguments);
  }
  function H(ae) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function ag(ah) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (an) {
                var ap = {
                  url: "https://passport.tmuyun.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a3(),
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  }
                };
                $.get(ap, function () {
                  var ar = i(g().mark(function at(au, av, aw) {
                    return g().wrap(function (az) {
                      for (;;) {
                        switch (az.prev = az.next) {
                          case 0:
                            try {
                              au ? (console.log("".concat(JSON.stringify(au))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : an(JSON.parse(aw));
                            } catch (aC) {
                              $.logErr(aC, av);
                            } finally {
                              an();
                            }
                          case 1:
                          case "end":
                            return az.stop();
                        }
                      }
                    }, at);
                  }));
                  return function (au, av, aw) {
                    return ar.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, ag);
    }));
    return I.apply(this, arguments);
  }
  function J(ae) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function af(ag) {
      var ah;
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              ah = a0();
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://passport.tmuyun.com".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ah.uuid,
                    "X-SIGNATURE": ah.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  },
                  body: ah.body
                };
                $.post(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            try {
                              aq ? (console.log("".concat(JSON.stringify(aq))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(as));
                            } catch (aw) {
                              $.logErr(aw, ar);
                            } finally {
                              ak();
                            }
                          case 1:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return K.apply(this, arguments);
  }
  function L(ae) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function af(ag) {
      var ai;
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ai = a1(ag);
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://vapp.tmuyun.com".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ai.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": ai.uuid,
                    "X-SIGNATURE": ai.signature,
                    "X-TENANT-ID": w,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  }
                };
                $.get(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !ar) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            al(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            al();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, aq, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return M.apply(this, arguments);
  }
  function N(ae, af) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function af(ag, ah) {
      var aj;
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              aj = a1(ag);
              return ak.abrupt("return", new Promise(function (am) {
                var ao = {
                  url: "https://vapp.tmuyun.com".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": aj.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": aj.uuid,
                    "X-SIGNATURE": aj.signature,
                    "X-TENANT-ID": w,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  },
                  body: ah
                };
                $.post(ao, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !ar) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(at));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, as);
                          case 14:
                            av.prev = 14;
                            am();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, aq, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ak.stop();
          }
        }
      }, af);
    }));
    return O.apply(this, arguments);
  }
  function P(ae) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function af(ag) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-T-Id-In": "2414",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_jiaojiang;xsb_jiaojiang;1.2.4;native_app;6.8.0",
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": Date.now(),
                    "Access-T-Id": "2414",
                    Accept: "*/*",
                    Origin: "https://jiaojiang.y-h5.iyunxh.com",
                    "X-Requested-With": "com.zjonline.jiaojiang",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaojiang.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !aq) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, ar);
                          case 14:
                            at.prev = 14;
                            ak();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, af);
    }));
    return Q.apply(this, arguments);
  }
  function R(ae) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function af(ag) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": B,
                    "Access-Api-Signature": a2(),
                    "Access-T-Id-In": "2414",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_jiaojiang;xsb_jiaojiang;1.2.4;native_app;6.8.0",
                    "Access-Token": D,
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": A,
                    "Access-T-Id": "2414",
                    Accept: "*/*",
                    Origin: "https://jiaojiang.y-h5.iyunxh.com",
                    "X-Requested-With": "com.zjonline.jiaojiang",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaojiang.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(al, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ao) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(aq));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, ap);
                          case 14:
                            as.prev = 14;
                            aj();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, af);
    }));
    return T.apply(this, arguments);
  }
  function U(ae) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://ya.iyunxh.com/api".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-T-Id-In": "1",
                    "Access-Wxclient-Type": "wx_minipro",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                    "Access-Token": s,
                    "Access-Api-Unique-Token": "1",
                    "Access-T-Id": "1",
                    Accept: "*/*",
                    Referer: "https://servicewechat.com/wx57d3a2086852ddcd/14/page-frame.html",
                    "Accept-Encoding": "gzip,compress,br,deflate"
                  }
                };
                $.get(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !aq) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, ar);
                          case 14:
                            au.prev = 14;
                            ak();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return V.apply(this, arguments);
  }
  function W(ae, af) {
    return X.apply(this, arguments);
  }
  function X() {
    X = i(g().mark(function af(ag, ah) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (al) {
                var am = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": B,
                    "Access-Api-Signature": a2(),
                    "Access-T-Id-In": "2414",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_jiaojiang;xsb_jiaojiang;1.2.4;native_app;6.8.0",
                    "Access-Token": D,
                    "Access-Api-Unique-Token": "1",
                    "Content-Type": "application/json",
                    "Access-Api-Dt": A,
                    "Access-T-Id": "2414",
                    Accept: "*/*",
                    Origin: "https://jiaojiang.y-h5.iyunxh.com",
                    "X-Requested-With": "com.zjonline.jiaojiang",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaojiang.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ah)
                };
                $.post(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !aq) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            al(JSON.parse(as));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, ar);
                          case 14:
                            at.prev = 14;
                            al();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return X.apply(this, arguments);
  }
  function Y(ae) {
    return Z.apply(this, arguments);
  }
  function Z() {
    Z = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (aj) {
                var al = {
                  "Content-Type": "application/json"
                };
                var am = {
                  url: "".concat(k, "/capcode"),
                  headers: al,
                  body: JSON.stringify(ag)
                };
                $.post(am, function (an, ao, ap) {
                  try {
                    an ? (console.log("".concat(JSON.stringify(an))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aj(JSON.parse(ap));
                  } catch (aq) {
                    $.logErr(aq, ao);
                  } finally {
                    aj();
                  }
                });
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return Z.apply(this, arguments);
  }
  function a0() {
    var aj = new (l.loadJSEncrypt())();
    aj.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = aj.encrypt(r);
    var ag = a3(),
      ah = "client_id=".concat(x, "&password=").concat(r, "&phone_number=").concat(q),
      ai = "post%%/web/oauth/credential_auth?".concat(ah, "%%").concat(ag, "%%");
    ah = "client_id=".concat(x, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var al = CryptoJS.HmacSHA256(ai, m),
      am = CryptoJS.enc.Hex.stringify(al);
    var ak = {
      uuid: ag,
      signature: am,
      body: ah
    };
    return ak;
  }
  function a1(ae) {
    var af = a3(),
      ag = Date.now();
    ae.indexOf("?") > 0 && (ae = ae.substring(0, ae.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ah = CryptoJS.SHA256("".concat(ae, "&&").concat(o, "&&").concat(af, "&&").concat(ag, "&&").concat(y, "&&").concat(w)).toString(),
      ai = {
        uuid: af,
        time: ag,
        signature: ah
      };
    return ai;
  }
  function a2() {
    var ae = Date.now(),
      af = a9(32, !1),
      ag = "jiaojiang".concat(af).concat(ae, "60b56a9e29ea4cdbe7e6544bee4b6f9c"),
      ah = l.md5(ag);
    return "jiaojiang;".concat(af, ";").concat(ae, ";").concat(ah);
  }
  function a3() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ae) {
      var af = 16 * Math.random() | 0,
        ag = "x" === ae ? af : 3 & af | 8;
      return ag.toString(16);
    });
  }
  function a4(ae, af, ag) {
    var ah = l.createCryptoJS(),
      ai = ah.enc.Utf8.parse(af),
      aj = ah.enc.Utf8.parse(ag),
      ak = ah.enc.Utf8.parse(JSON.stringify(ae)),
      al = ah.AES.encrypt(ak, ai, {
        iv: aj,
        mode: ah.mode.CBC,
        padding: ah.pad.Pkcs7
      });
    return ah.enc.Base64.stringify(al.ciphertext);
  }
  function a5(ae) {
    return ae[Math.floor(Math.random() * ae.length)];
  }
  function a6() {
    var ae = "1.2.4",
      af = a3(),
      ag = a5(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ah = "Xiaomi " + ag,
      ai = "Android",
      aj = "".concat(ai.toUpperCase(), ";").concat("11", ";").concat(x, ";").concat(ae, ";1.0;null;").concat(ag),
      ak = "".concat(ae, ";").concat(af, ";").concat(ah, ";").concat(ai, ";").concat("11", ";Release;").concat("6.8.0"),
      al = {
        ua: aj,
        commonUa: ak,
        uuid: af
      };
    return al;
  }
  function a7() {
    var ae = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      af = [];
    for (var ag in ae) {
      var ah = ae[ag];
      af.push(ag + "=" + a8(ah));
    }
    return af.length ? "" + af.join("&") : "";
  }
  function a8(ae) {
    ae = (ae + "").toString();
    return encodeURIComponent(ae).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+").replace(/~/g, "%7E");
  }
  function a9() {
    var ae = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
      af = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      ag = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      ah = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
      ai = [];
    if (ag = ag || ah.length, ae) {
      for (var aj = 0; aj < ae; aj++) {
        ai[aj] = ah[0 | Math.random() * ag];
      }
    } else {
      var ak;
      ai[8] = ai[13] = ai[18] = ai[23] = "-";
      ai[14] = "4";
      for (var al = 0; al < 36; al++) {
        ai[al] || (ak = 0 | 16 * Math.random(), ai[al] = ah[19 == al ? 3 & ak | 8 : ak]);
      }
    }
    return af ? (ai.shift(), "u" + ai.join("")) : ai.join("");
  }
  function aa() {
    return ab.apply(this, arguments);
  }
  function ab() {
    ab = i(g().mark(function af() {
      var ah;
      return g().wrap(function ai(aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              if (ah = $.getdata("Utils_Code") || "", !ah || !Object.keys(ah).length) {
                aj.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ah);
              return aj.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return aj.abrupt("return", new Promise(function () {
                var al = i(g().mark(function am(an) {
                  return g().wrap(function ap(aq) {
                    for (;;) {
                      switch (aq.prev = aq.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ar) {
                            $.setdata(ar, "Utils_Code");
                            eval(ar);
                            console.log("✅ Utils加载成功, 请继续");
                            an(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aq.stop();
                      }
                    }
                  }, am);
                }));
                return function (an) {
                  return al.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return ab.apply(this, arguments);
  }
  function ac(ae) {
    return ad.apply(this, arguments);
  }
  function ad() {
    ad = i(g().mark(function ag(ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              if (!$.isNode()) {
                ai.next = 5;
                break;
              }
              ai.next = 3;
              return notify.sendNotify($.name, ah);
            case 3:
              ai.next = 6;
              break;
            case 5:
              $.msg($.name, "", ah);
            case 6:
            case "end":
              return ai.stop();
          }
        }
      }, ag);
    }));
    return ad.apply(this, arguments);
  }
  i(g().mark(function ae() {
    return g().wrap(function (ag) {
      for (;;) {
        switch (ag.prev = ag.next) {
          case 0:
            ag.next = 2;
            return F();
          case 2:
          case "end":
            return ag.stop();
        }
      }
    }, ae);
  }))().catch(function (af) {
    $.log(af);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}