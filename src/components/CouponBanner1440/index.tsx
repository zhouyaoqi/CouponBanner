import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import people from '@/image/1440/people.png';
import { dataEn, dataCh } from '../../mock/index';
import { countDown } from '@/tool/index';
import { propsType, dataType } from '../type';

export default function CouponBanner1440(props: propsType) {
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
    <div className={styles.couponbanner_box}>
      <img src={people} className={styles.img} />
      <div className={styles.text_box}>
        <div className={styles.text_one}>{data.text}</div>
        {/* <div className={styles.text_one}>{data.text1}</div> */}
        <div className={styles.text_two}>
          {data.discount} {data.unit}
        </div>
      </div>
      <div className={styles.right_box}>
        <div className={styles.move_about_box}>
          <div className={styles.time_box}>
            <div>Ends in</div>
            <div className={styles.box}>{times['h']}</div>
            <span>h</span>
            <div className={styles.box}>{times['m']}</div>
            <span>m</span>
            <div className={styles.box}>{times['s']}</div>
            <span>s</span>
          </div>
          <div className={styles.content_box}>
            <div className={styles.left_box}>
              <div>{data.discount}</div>
              <div>{data.unit}</div>
            </div>
            <div className={styles.right_boxs}>
              <div>{data.welCome}</div>
              <div>{data.items}</div>
              <div>{data.order}</div>
              <div>{data.btntext}</div>
            </div>
            <div className={styles.cor_style}>{data.cor}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
