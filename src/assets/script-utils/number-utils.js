/**
 * 数字处理工具
 *
 * @author  lijj
 * @created 2019-06-07
 */

export default {
  /**
   * 格式化人民币输出
   *
   * @param currency 金额（分）
   * @param symbol   金额符号，默认￥
   */
  formatCurrency: function (currency = 0, symbol = "￥") {
    let rmb = "";
    currency = parseFloat(currency / 100.0).toFixed(2);
    if (currency.lastIndexOf(".") > 0) {
      let numbers = currency.split(".");
      let digits = numbers[1];

      if (digits.indexOf("0") > -1) {
        rmb = parseInt(digits, 10) > 0 ? parseFloat(currency).toFixed(2) : parseInt(currency);
      } else {
        rmb = parseFloat(currency).toFixed(2);
      }
    } else {
      rmb = currency;
    }

    let finalCurrency = symbol + rmb;
    if (finalCurrency.indexOf(symbol + "-")) {
      finalCurrency = finalCurrency.replace(symbol + "-", "-" + symbol);
    }
    return finalCurrency;
  },

  /**
   * 转换为整型
   * @param number 数字或小数
   */
  parseInt: function (number) {
    return parseInt(number + "");
  },

  /**
   * 保留N位小数
   * @param number 数字或小数
   * @param digits 默认保留2位小数
   */
  toFixed: function (number, digits = 0) {
    number = Number(number + "");
    if (digits > 0) {
      return parseFloat(number + "").toFixed(digits);
    } else {
      if (number === 0) {
        return number;
      } else {
        if ((number + "").indexOf(".") > -1) {
          digits = (number + "").split(".")[1].length;
        }
        if (digits > 2) {
          digits = 2;
        }
        return parseFloat(number + "").toFixed(digits);
      }
    }
  },

  /**
   * 像素值转REM值
   * @param px   像素值
   * @param unit 是需要单位
   */
  pxToRem: function (px = 0, unit = true) {
    let val = (px / 75);
    if (unit) {
      val = val + "rem";
    }
    return val;
  },

  /**
   * 默认随机生成0~100数字
   * @param minNum
   * @param maxNum
   * @return {number}
   */
  random(minNum = 0, maxNum = 100) {
    if (maxNum <= minNum) {
      return parseInt(Math.random() * minNum + 1, 10);
    }
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
  }
};
