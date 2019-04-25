module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/config.mjs
/* harmony default export */ var src_config = ({
  ctxNamespace: "documentHead",
  stateNamespace: "documentHead",
  documentTitleFormatter: title => title,
  toHtml: {
    tagSeparator: "\n",
    groupSeparator: "\n\n"
  }
});
// CONCATENATED MODULE: ./src/set-title/index.mjs
/* harmony default export */ var set_title = ((config, ctx) => title => {
  const simpleTitle = typeof title === "string";
  const documentTitle = simpleTitle ? title : config.documentTitleFormatter(title);
  ctx.state[config.stateNamespace].title = documentTitle;
});
// CONCATENATED MODULE: ./src/add-meta-tag/index.mjs
/* harmony default export */ var add_meta_tag = ((config, ctx) => prop => {
  ctx.state[config.stateNamespace].metaTags.push(prop);
});
// CONCATENATED MODULE: ./src/add-link/index.mjs
/* harmony default export */ var add_link = ((config, ctx) => prop => {
  ctx.state[config.stateNamespace].links.push(prop);
});
// CONCATENATED MODULE: ./src/add-style/index.mjs
/* harmony default export */ var add_style = ((config, ctx) => style => {
  const styleObj = typeof style === "string" ? {
    cssText: style
  } : { ...style
  };

  if (!styleObj.type) {
    styleObj.type = "text/css";
  }

  ctx.state[config.stateNamespace].styles.push(styleObj);
});
// CONCATENATED MODULE: ./src/add-script/index.mjs
/* harmony default export */ var add_script = ((config, ctx) => script => {
  const scriptObj = typeof script === "string" ? {
    jsText: script
  } : { ...script
  };

  if (!scriptObj.type) {
    scriptObj.type = "text/javascript";
  }

  ctx.state[config.stateNamespace].scripts.push(scriptObj);
});
// CONCATENATED MODULE: ./src/to-html/render-title/index.mjs
/* harmony default export */ var render_title = ((config, ctx) => title => {
  return `<title>${title}</title>`;
});
// CONCATENATED MODULE: ./src/to-html/render-meta-tag/index.mjs
/* harmony default export */ var render_meta_tag = (tag => {
  let html = "<meta ";
  Object.keys(tag).forEach(key => {
    html += `${key}="${tag[key]}" `;
  });
  html += "/>";
  return html;
});
// CONCATENATED MODULE: ./src/to-html/render-link/index.mjs
/* harmony default export */ var render_link = (tag => {
  let html = "<link ";
  Object.keys(tag).forEach(key => {
    html += `${key}="${tag[key]}" `;
  });
  html += "/>";
  return html;
});
// CONCATENATED MODULE: ./src/to-html/render-style/index.mjs
/* harmony default export */ var render_style = (style => {
  let html = "<style";
  Object.keys(style).filter(key => key !== "cssText").forEach((key, i, all) => {
    if (i === 0) {
      html += " ";
    }

    html += `${key}="${style[key]}"`;

    if (i < all.length - 1) {
      html += " ";
    }
  });
  html += ">";
  html += style.cssText;
  html += "</style>";
  return html;
});
// CONCATENATED MODULE: ./src/to-html/render-script/index.mjs
/* harmony default export */ var render_script = (script => {
  let html = "<script";
  Object.keys(script).filter(key => key !== "jsText").forEach((key, i, all) => {
    if (i === 0) {
      html += " ";
    }

    html += `${key}="${script[key]}"`;

    if (i < all.length - 1) {
      html += " ";
    }
  });
  html += ">";
  html += script.jsText;
  html += "</script>";
  return html;
});
// CONCATENATED MODULE: ./src/to-html/index.mjs





/* harmony default export */ var to_html = ((config, ctx) => () => {
  const renderFunctions = new Map([["title", render_title(config, ctx)], ["metaTags", renderGroup(render_meta_tag, config)], ["links", renderGroup(render_link, config)], ["styles", renderGroup(render_style, config)], ["scripts", renderGroup(render_script, config)]]);
  let headHtml = "";
  const documentHead = ctx.state[config.stateNamespace];
  Object.keys(documentHead).forEach(headPart => {
    if (!renderFunctions.has(headPart)) {
      return;
    }

    const renderFunction = renderFunctions.get(headPart);
    headHtml += renderFunction(documentHead[headPart]);
    headHtml += config.toHtml.groupSeparator;
  });
  return headHtml;
});

function renderGroup(renderItem, config) {
  return items => items.reduce((html, item) => {
    html += renderItem(item);
    html += config.toHtml.tagSeparator;
    return html;
  }, "");
}
// CONCATENATED MODULE: ./src/index.mjs







/* harmony default export */ var src = __webpack_exports__["default"] = (function (opts) {
  const config = { ...src_config,
    ...opts
  };
  return async function (ctx, next) {
    ctx.state[config.stateNamespace] = {};
    ctx.state[config.stateNamespace].title = "";
    ctx.state[config.stateNamespace].metaTags = [];
    ctx.state[config.stateNamespace].links = [];
    ctx.state[config.stateNamespace].styles = [];
    ctx.state[config.stateNamespace].scripts = [];
    const middlewareApi = {
      setTitle: set_title(config, ctx),
      addMetaTag: add_meta_tag(config, ctx),
      addLink: add_link(config, ctx),
      addStyle: add_style(config, ctx),
      addScript: add_script(config, ctx),
      toHtml: to_html(config, ctx)
    };
    ctx[config.ctxNamespace] = middlewareApi;
    await next();
  };
});

/***/ })
/******/ ]);