import React, { memo, useState, useEffect } from "react";
import { moment } from "@/utils/util";
import SvgIcon from "@/components/SvgIcon";
import styles from "./index.scss";

SvgIcon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_624956_br6r8nb9msp.js"
});

const Header = memo(() => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.header}>
      <div className={styles.time}>
        <SvgIcon icon='icon-time' className={styles.timeIcon} />
        {moment(time).format()}
      </div>
      <div className={styles.title}>实时数据看板</div>
      <div className={styles.desc}>
        <SvgIcon icon='icon-shezhi' className={styles.setIcon} />
        统计维度：昨天
      </div>
    </div>
  );
});

export default Header;
