import { useEffect, useState } from 'react';
import CouponBanner1440 from '@/components/CouponBanner1440';
import CouponBanner768 from '@/components/CouponBanner768';
import styles from './index.module.scss';

export default function Home() {
  const [size, setSize] = useState<number>();
  const [isWidth, setIsWidth] = useState<boolean>();
  const [lang, setLang] = useState<string>('en');
  useEffect(() => {
    setIsWidth(document.body.clientWidth > 768 ? true : false);
    window.onresize = () => {
      return (() => {
        setSize(document.body.clientWidth);
      })();
    };
  }, []);
  useEffect(() => {
    if (size) {
      if (size > 768) {
        setIsWidth(true);
      } else {
        setIsWidth(false);
      }
    }
  }, [size]);
  const selectChanage = (e) => {
    setLang(e.target.value);
  };
  return (
    <div>
      {isWidth ? <CouponBanner1440 lang={lang} /> : <CouponBanner768 lang={lang} />}
      <select className={styles.language_box} onChange={selectChanage}>
        <option value="en">英文</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
}
