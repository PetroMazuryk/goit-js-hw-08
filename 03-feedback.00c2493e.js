!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var r,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,f=setTimeout(h,t),d?g(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function h(){var e=b();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?p(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?g(e):(r=i=void 0,u)}function x(){var e=b(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(h,t),g(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},x.flush=function(){return void 0===f?u:w(b())},x}function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=u.test(e);return o||f.test(e)?l(e.slice(2),o?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var O="feedback-form-state",S={},h={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector(".feedback-form label input"),textarea:document.querySelector(".feedback-form label textarea")};addEventListener("DOMContentLoaded",(function(){!function(){var e=localStorage.getItem(O);if(e)try{var t=JSON.parse(e),n=t.email,r=t.message;n&&(h.inputEmail.value=n,S.email=n),r&&(h.textarea.value=r,S.message=r)}catch(e){console.log(e)}}()})),h.form.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(O),console.log(S)})),h.form.addEventListener("input",n((function(e){var t=e.target.name,n=e.target.value;S[t]=n,localStorage.setItem(O,JSON.stringify(S))}),500))}();
//# sourceMappingURL=03-feedback.00c2493e.js.map
