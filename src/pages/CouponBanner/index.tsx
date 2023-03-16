import { useEffect, useState } from 'react';
import CouponBanner1440 from '@/components/CouponBanner1440';
import CouponBanner768 from '@/components/CouponBanner768';

export default function Home() {
  const [size, setSize] = useState<number>();
  const [isWidth, setIsWidth] = useState<boolean>();
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
  //   return (
  //     <div>
  //       <CouponBanner1440 />
  //     </div>
  //   );
  return <div>{isWidth ? <CouponBanner1440 /> : <CouponBanner768 />}</div>;
}
