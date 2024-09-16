import {
  require_dayjs_min
} from "./chunk-3ABNPE72.js";
import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// ../.yarn/berry/cache/dayjs-npm-1.11.13-d478bb9479-10c0.zip/node_modules/dayjs/locale/ko.js
var require_ko = __commonJS({
  "../.yarn/berry/cache/dayjs-npm-1.11.13-d478bb9479-10c0.zip/node_modules/dayjs/locale/ko.js"(exports, module) {
    !function(e, _) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = _(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], _) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_ko = _(e.dayjs);
    }(exports, function(e) {
      "use strict";
      function _(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var d = _(e), t = { name: "ko", weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), ordinal: function(e2) {
        return e2 + "일";
      }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm" }, meridiem: function(e2) {
        return e2 < 12 ? "오전" : "오후";
      }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" } };
      return d.default.locale(t, null, true), t;
    });
  }
});
export default require_ko();
//# sourceMappingURL=dayjs_locale_ko.js.map