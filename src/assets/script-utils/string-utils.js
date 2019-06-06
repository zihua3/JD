/**
 * 字符串处理工具
 *
 * @author  lijj
 * @created 2019-06-07
 */

export default {

  /**
   * 判断是否Undefined
   * @param str 字符串
   * @returns {boolean}
   */
  isNull(str) {
    return typeof str === "undefined" || str === null || str === "" || str.length === 0;
  },

  /**
   * 判断是否数字
   * @param str
   * @returns {boolean}
   */
  isNumber(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
  },

  /**
   * 判断是否空HTML字符串
   * @param str
   * @returns {*}
   */
  isNullHtml(str) {
    if (str === null || typeof str === 'undefined') {
      return true;
    }
    if (str.indexOf("<img") > -1) {
      return false;
    }

    str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
    str = str.replace(/ /ig, '');//去掉
    return this.isNull(str);
  },

  /**
   * 字符串是否包含某个字符串
   * @param str
   * @param q
   */
  contains(str, q) {
    if (this.isNull(str) || this.isNull(q)) {
      return false;
    }
    return str.indexOf(q) > -1;
  },
};
