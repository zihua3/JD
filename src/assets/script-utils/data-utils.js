/**
 * 日期处理工具类
 *
 * @author  lijj
 * @created 2019-06-07
 */

import dayjs from "dayjs";

export default {
  /**
   * 转换为dayjs对象操作
   * @param date 日期
   */
  toDayjs(date) {
    return dayjs(date);
  },

  /**
   * 格式化日期时间
   * @param date   日期
   * @param format 格式化 YYYY-MM-DD|YYYY-MM-DD HH:mm
   */
  format(date, format = "YYYY-MM-DD") {
    return dayjs(date).format(format);
  },

  /**
   * 判断第一个时间是否在第二个时间之前
   * @param date1
   * @param date2
   */
  isBefore(date1, date2) {
    return dayjs(date1).isBefore(dayjs(date2));
  },

  /**
   * 判断第一个时间是否在第二个时间之后
   * @param date1
   * @param date2
   */
  isAfter(date1, date2) {
    return dayjs(date1).isAfter(dayjs(date2));
  },

  /**
   * 判断2个时间是否相同
   * @param date1
   * @param date2
   */
  isSame(date1, date2) {
    return dayjs(date1).isSame(dayjs(date2));
  },

  /**
   * 转成日期类型
   * @param date
   */
  toDate(date = new Date()) {
    return dayjs(date).toDate();
  },

  /**
   * 计算2个时间差，默认毫秒数
   * @param date1
   * @param date2
   * @param type  相差类型，可选：year(年) | month(月) | day(天) | hour(小时) | second(秒)
   */
  diff(date1, date2, type = "millisecond") {
    return dayjs(date1).diff(dayjs(date2), type);
  },

  /**
   * 增加时间
   * @param date 时间
   * @param num  数量
   * @param unit 单位，year|month|day|hour|minute|second
   */
  add(date = new Date(), num = 0, unit = "year") {
    return dayjs(date).add(num, unit);
  },

  /**
   * 减少时间
   * @param date 时间
   * @param num  数量
   * @param unit 单位，year|month|day|hour|minute|second
   */
  subtract(date = new Date(), num = 0, unit = "year") {
    return dayjs(date).subtract(num, unit);
  },

  /**
   * 设置时间
   * @param date 时间
   * @param val  数量
   * @param unit 单位，year|month|day|hour|minute|second
   */
  set(date = new Date(), unit = "year", val = 0) {
    return dayjs(date).set(unit, val);
  },

  // 获取时间戳
  getTimestamp() {
    return new Date().getTime();
  },

  // 当前时间
  now() {
    return dayjs();
  },

  // 获取明天时间
  tomorrow() {
    return dayjs().add(1, "day").toDate();
  },

  isNull(date) {
    return date === null || typeof date === "undefined" || date <= 0;
  },

  /**
   * 转换为时间戳
   * @param date
   */
  toTimestamp(date) {
    return this.toDate(date).getTime();
  },

  /**
   * 时长间隔格式化显示，如2年3月5分3秒
   * @param ts 时长(毫秒)
   */
  duration(ts = 0) {
    let diffStr = "";

    // 相差年份
    const yeaarts = 365 * 24 * 60 * 60 * 1000;
    const diffYear = Math.floor(ts / yeaarts);
    if (diffYear > 0) {
      diffStr += diffYear + "年";
      // 去除年份差
      ts = ts - diffYear*yeaarts;
    }
    if (ts <= 0) {
      return diffStr;
    }

    // 相差月份
    const monthts = 30 * 24 * 60 * 60 * 1000;
    const diffMonth = Math.floor(ts / monthts);
    if (diffMonth > 0) {
      diffStr += diffMonth + "月";
      // 去除月份差
      ts = ts - diffMonth*monthts;
    }
    if (ts <= 0) {
      return diffStr;
    }

    // 相差周
    const weekts = 7 * 24 * 60 * 60 * 1000;
    const diffWeeks = Math.floor(ts / weekts);
    if (diffWeeks > 0) {
      diffStr += diffWeeks + "周";
      // 去除月份差
      ts = ts - diffWeeks*weekts;
    }
    if (ts <= 0) {
      return diffStr;
    }

    // 相差天数
    const dayts = 24 * 60 * 60 * 1000;
    const diffDays = Math.floor(ts / dayts);
    if (diffDays > 0) {
      diffStr += diffDays + "天";
      // 去除天数差
      ts = ts - diffDays*dayts;
    }
    if (ts <= 0) {
      return diffStr;
    }

    // 相差小时
    const hourts = 60 * 60 * 1000;
    const diffHours = Math.floor(ts / hourts);
    if (diffHours > 0) {
      diffStr += diffHours + "小时";
      // 去除分钟差
      ts = ts - diffHours*hourts;
    }
    if (ts <= 0) {
      return diffStr;
    }

    // 相差分钟
    const minutets = 60 * 1000;
    const diffMinutes = Math.floor(ts / minutets);
    if (diffMinutes > 0) {
      diffStr += diffMinutes + "分";
      // 去除分钟差
      ts = ts - diffMinutes*minutets;
    }
    if (ts <= 0) {
      return diffStr;
    }

    // 相差秒
    const secondts = 1000;
    const diffSeconds = Math.floor(ts / secondts);
    if (diffSeconds > 0) {
      diffStr += diffSeconds + "秒";
      // 去除秒差
      ts = ts - diffSeconds*secondts;
    }
  },

  /**
   * 计算2个时间差描述，如2年3月5分3秒
   * @param date1
   * @param date2
   * @param type
   */
  diffStr(date1, date2) {
    let d1 = dayjs(date1);
    let d2 = dayjs(date2);
    // 反转时间
    if (dayjs(date2).isBefore(dayjs(date1))) {
      d1 = dayjs(date2);
      d2 = dayjs(date1);
    }
    // 2个时间相差毫秒数
    let ts = d2.toDate().getTime() - d1.toDate().getTime();
    return this.duration(ts);
  },
};
