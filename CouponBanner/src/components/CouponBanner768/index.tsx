import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { dataEn, dataCh } from '../../mock/index';
import { countDown } from '@/tool/index';
import welcome from '@/image/768/banner-right.png';
import people from '@/image/768/people.png';
import { propsType, dataType } from '../type';

export default function CouponBanner768(props: propsType) {
  const { lang } = props;
  const [data, setData] = useState<dataType>({
    text: '',
    discount: '',
    unit: '',
    welCome: '',
    items: '',
    order: '',
    btntext: '',
    items1: '',
    order1: '',
    btntext1: '',
    cor: '',
  });
  const [times, setTimes] = useState<object>({ h: '', m: '', s: '' });
  useEffect(() => {
    var inputTime: any = '';
    const timeV = sessionStorage.getItem('downTime');
    if (timeV) {
      inputTime = timeV;
    } else {
      inputTime = +new Date() + 24 * 60 * 60 * 1000;
      sessionStorage.setItem('downTime', inputTime);
    }
    setTimes(countDown(inputTime));
    const timer = setInterval(() => {
      setTimes(countDown(inputTime));
    }, 1000);
    return () => {
      timer && clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    if (lang == 'en') {
      setData(dataEn);
    } else {
      setData(dataCh);
    }
  }, [lang]);
  return (
    <div className={styles.couponbanner_boxs}>
      <img src={welcome} className={styles.img_styles} />
      <img src={people} className={styles.img_ple} />
      <div className={styles.content_box}>
        <div className={styles.text_like}>{data.text}</div>
        <div className={`${styles.text_discount} ${styles.gap}`}>{data.discount}</div>
        <div className={styles.text_discount}>{data.unit}</div>
        <div className={styles.time_box}>
          <div className={styles.time_title}>Ends in</div>
          <div className={styles.box}>{times['h']}</div>
          <span>h</span>
          <div className={styles.box}>{times['m']}</div>
          <span>m</span>
          <div className={styles.box}>{times['s']}</div>
          <span>s</span>
        </div>
        <div className={styles.wel_box}>
          <div className={styles.left_box}>
            <div>{data.discount}</div>
            <div>{data.unit}</div>
          </div>
          <div className={styles.right_boxs}>
            <div>{data.welCome}</div>
            <div>{data.items1}</div>
            <div>{data.order1}</div>
            <div>{data.btntext1}</div>
          </div>
          <div className={styles.cor_style}>{data.cor}</div>
        </div>
      </div>
    </div>
  );
}
