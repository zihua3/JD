/**
 * 全局过滤器
 *
 * @author  lijj
 * @created 2019-06-07
 */

import dateUtils from "@/assets/script-utils/data-utils.js";
import numUtils from "@/assets/script-utils/number-utils.js";

export default {

  // 日期过滤
  date(date) {
    return dateUtils.format(date, "YYYY-MM-DD");
  },
  dateTime(date) {
    return dateUtils.format(date, "YYYY-MM-DD HH:mm");
  },
  time(date) {
    return dateUtils.format(date, "HH:mm");
  },
  formatDate(date, format = "YY-MM-DD") {
    return dateUtils.format(date, format);
  },
  timeDuration(ts = 0) {
    return dateUtils.duration(ts);
  },


  /**
   * 金额始终保留2位小数
   * @param amount 金额(分)
   * @param symbol 金额前置符
   * @return 金额
   */
  currency(amount = 0, symbol = "￥") {
    let finalCurrency = symbol + numUtils.toFixed(amount / 100.0, 2);
    if (finalCurrency.indexOf(symbol + "-") > -1) {
      finalCurrency = finalCurrency.replace(symbol + "-", "-" + symbol);
    }
    return finalCurrency;
  },

  /**
   * 格式化金额，若金额不包含小数则返回整数
   * @param amount
   * @param symbol
   * @return 金额
   */
  currency2(amount = 0, symbol = "￥") {
    return numUtils.formatCurrency(amount, symbol);
  },

  // 格式化小数，默认保留2位
  parseFloat(num = 0, digits = 2) {
    return numUtils.toFixed(num, digits);
  },

  // 格式化正式
  parseInt(num = 0) {
    return parseInt(num + "");
  }
};
