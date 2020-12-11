// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/DOM.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMSelectors = void 0;
var DOMSelectors = {
  heroContainer: document.querySelector(".heroContainer")
};
exports.DOMSelectors = DOMSelectors;
},{}],"js/hero.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heroList = void 0;
var heroList = [{
  img: "https://images-na.ssl-images-amazon.com/images/I/41%2BSdVy0ytL.jpg",
  name: "Black Panther"
}, {
  img: "https://insidethemagic-119e2.kxcdn.com/wp-content/uploads/2018/04/AIW_Online_1_Sheet_BlkWidow_v1_sm.jpg",
  name: "Black Widow"
}, {
  img: "https://i.etsystatic.com/15963200/r/il/66b2eb/1730781305/il_1588xN.1730781305_iihp.jpg",
  name: "Captain America"
}, {
  img: "https://i.pinimg.com/originals/83/1e/86/831e867af0b14642c2d035baafd8a781.jpg",
  name: "The Collector"
}, {
  img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18698e00-244d-4a74-9598-fb07c7144eee/dbm926p-bd12a8c4-7e59-4c22-9e42-1c64d7bcc890.jpg/v1/fill/w_1024,h_1537,q_75,strp/poster__infinity_war___corvus_glaive___villains_by_4n4rkyx_dbm926p-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNTM3IiwicGF0aCI6IlwvZlwvMTg2OThlMDAtMjQ0ZC00YTc0LTk1OTgtZmIwN2M3MTQ0ZWVlXC9kYm05MjZwLWJkMTJhOGM0LTdlNTktNGMyMi05ZTQyLTFjNjRkN2JjYzg5MC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WuuxT55IVVWFopFYxs0p9mg8A6I8Ym4C06WvSu79ZwU",
  name: "Corvus Glaive"
}, {
  img: "https://cellularnews.com/wp-content/uploads/2020/06/96-avengers-infinity-war-character-poster-doctor-strange-325x485.jpg",
  name: "Doctor Strange"
}, {
  img: "https://vignette.wikia.nocookie.net/marveldcuniverse/images/f/f2/Drax_AIW_Profile.jpg/revision/latest/top-crop/width/360/height/450?cb=20180707000750",
  name: "Drax"
}, {
  img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18698e00-244d-4a74-9598-fb07c7144eee/dbm92bz-1a7fe029-5853-4778-9036-70f2da862a86.jpg/v1/fill/w_1024,h_1537,q_75,strp/poster__infinity_war___ebony_maw___villains_by_4n4rkyx_dbm92bz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNTM3IiwicGF0aCI6IlwvZlwvMTg2OThlMDAtMjQ0ZC00YTc0LTk1OTgtZmIwN2M3MTQ0ZWVlXC9kYm05MmJ6LTFhN2ZlMDI5LTU4NTMtNDc3OC05MDM2LTcwZjJkYTg2MmE4Ni5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wvJnlZU9g6HeyYYSqj0_upemn0LFD6G26OY-PeQkQbM",
  name: "Ebony Maw"
}, {
  img: "https://i.ebayimg.com/images/g/7rkAAOSw90xaxc4Z/s-l400.jpg",
  name: "Falcon"
}, {
  img: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Gamora-Infinity-War-Poster.jpg",
  name: "Gamora"
}, {
  img: "https://i.pinimg.com/originals/3b/f0/43/3bf043f9c2fa807532241ec71c1784cc.jpg",
  name: "Groot"
}, {
  img: "https://static.wikia.nocookie.net/disney/images/0/06/Heimdall-ThorTDW.png/revision/latest?cb=20131112005404",
  name: "Heimdall"
}, {
  img: "https://imgc.allpostersimages.com/img/print/u-g-Q1BXG3N0.jpg?w=550&h=550&p=0",
  name: "Hulk"
}, {
  img: "https://www.herocollector.com/uploads/media/Avengers_Infinity_War_poster_Iron_Man.jpg",
  name: "Iron Man"
}, {
  img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/01d00181-cc7e-491c-b80e-ead14c4f6dc6/dcay2i0-a7d9529a-07e4-4382-a49c-dad2f33caa6c.jpg/v1/fill/w_600,h_888,q_75,strp/loki_infinity_war_poster_by_t_luminareth_dcay2i0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04ODgiLCJwYXRoIjoiXC9mXC8wMWQwMDE4MS1jYzdlLTQ5MWMtYjgwZS1lYWQxNGM0ZjZkYzZcL2RjYXkyaTAtYTdkOTUyOWEtMDdlNC00MzgyLWE0OWMtZGFkMmYzM2NhYTZjLmpwZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YFRL_HsZ-G-3SfFPgTirND5adVO9y89bizmN2uABK6I",
  name: "Loki"
}, {
  img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7229d393-c3b8-4703-a41e-e876546d2612/dc7wdj6-3fbd6471-ebe9-4186-a4c0-ff6100a038bd.jpg/v1/fill/w_1024,h_1517,q_75,strp/avengers__infinity_war_mantis_poster_by_artlover67_dc7wdj6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNTE3IiwicGF0aCI6IlwvZlwvNzIyOWQzOTMtYzNiOC00NzAzLWE0MWUtZTg3NjU0NmQyNjEyXC9kYzd3ZGo2LTNmYmQ2NDcxLWViZTktNDE4Ni1hNGMwLWZmNjEwMGEwMzhiZC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.EQ5-qClCpaLuGPsIZ1YPnfdMj3o_3ITpUoM1UyVMZbw",
  name: "Mantis"
}, {
  img: "https://bleedingcool.com/wp-content/uploads/2018/04/avengers-nebula.jpg",
  name: "Nebula"
}, {
  img: "https://i.pinimg.com/originals/10/ab/96/10ab96f41a06503bcce89c089c350268.jpg",
  name: "Okoye"
}, {
  img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18698e00-244d-4a74-9598-fb07c7144eee/dbm921j-daaa9efa-434e-471f-8e3f-526801c9e386.jpg/v1/fill/w_1024,h_1537,q_75,strp/poster__infinity_war___proxima_midnight___villains_by_4n4rkyx_dbm921j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNTM3IiwicGF0aCI6IlwvZlwvMTg2OThlMDAtMjQ0ZC00YTc0LTk1OTgtZmIwN2M3MTQ0ZWVlXC9kYm05MjFqLWRhYWE5ZWZhLTQzNGUtNDcxZi04ZTNmLTUyNjgwMWM5ZTM4Ni5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.aMBKf3mIeBmtn373apBRHwSyY1Ysu-LA97SkVg18CO0",
  name: "Proxima Midnight"
}, {
  img: "https://images-na.ssl-images-amazon.com/images/I/41GB-fHO6cL._AC_.jpg",
  name: "Rocket"
}, {
  img: "https://lh3.googleusercontent.com/proxy/JyxqSuhSisQzj8jCbbCyY9C8WO6Xknw0qmu_dj-CU7VQYwBddpp7va8VnlY8eAiyRFklZGaSL2fzHT8vCS4Xng0u6Iv92G_s1lf9HiD5Bm_yBP1cYzbrqw3b9Pg1Uk6lh4NOmB4lZ3zkELWTRGFTRT-5WstZuNFA",
  name: "Wanda Maximoff"
}, {
  img: "https://i.pinimg.com/originals/fb/47/50/fb4750f1724871bd947f8ad6d02174b0.jpg",
  name: "Shuri"
}, {
  img: "https://i.pinimg.com/564x/e6/12/39/e612391ab8447476c0e723f46c99bd73.jpg",
  name: "Spider-Man"
}, {
  img: "https://media.comicbook.com/2018/04/avengers-infinity-war-character-posters-star-lord-1099256.jpeg",
  name: "Star-Lord"
}, {
  img: "https://i.pinimg.com/736x/30/20/27/302027ea811397c1aacce805e1fda4cb.jpg",
  name: "Thanos"
}, {
  img: "https://d9nvuahg4xykp.cloudfront.net/-3707385309016252472/7301595684107671378.jpg",
  name: "Thor"
}, {
  img: "https://i.pinimg.com/736x/ad/67/ad/ad67ad25cad27a9d79f95b35c299db25.jpg",
  name: "Vision"
}, {
  img: "https://cellularnews.com/wp-content/uploads/2020/06/91-avengers-infinity-war-character-poster-war-machine-325x485.jpg",
  name: "War Machine"
}, {
  img: "https://vignette.wikia.nocookie.net/marveldcuniverse/images/4/41/Winter_Soldier_AIW_Profile.jpg/revision/latest/scale-to-width-down/620?cb=20180706220755",
  name: "Winter Soldier"
}, {
  img: "https://thefutureoftheforce.com/wp-content/uploads/2018/04/img_8550.jpg",
  name: "Wong"
}];
exports.heroList = heroList;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _DOM = require("./DOM");

var _hero = require("./hero");

var init = function init() {
  _hero.heroList.forEach(function (hero) {
    return _DOM.DOMSelectors.heroContainer.insertAdjacentHTML("beforeend", "\n      <div class = \"heroCard\">\n      </span>\n        <div class= \"imgCard\">\n        <img\n            class=\"heroImage\"\n              src=\"".concat(hero.img, "\"\n        />\n        </div>\n          <h1 class=\"heroName\">").concat(hero.name, "\n          <i id=\"").concat(hero.name, "\" class=\"heart\"></i>\n          </h1>\n      </div>\n    "));
  });
};

init();

var heartButton = function heartButton() {
  var heart = document.getElementsByClassName("heart");
  heart.addEventListener("click", function () {
    heart.classList.toggle("press");
  });
};

heartButton();
},{"./DOM":"js/DOM.js","./hero":"js/hero.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59504" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map