export function countDown(inputTime) {
      //获取当前时间的时间戳（单位毫秒）
      const nowTime = +new Date();
      //把剩余时间毫秒数转化为秒
      var times:any = (inputTime - nowTime) / 1000;
      //计算小时数 转化为整数
      var h:any = parseInt((times / 60 / 60 % 24).toString());
      //如果小时数小于 10，要变成 0 + 数字的形式 赋值给盒子
      h=h < 10 ? "0" + h : h
      // console.log(h < 10 ? "0" + h : h); 
      //计算分钟数 转化为整数
      var m:any = parseInt((times / 60 % 60).toString());
      m=m < 10 ? "0" + m : m
      //如果分钟数小于 10，要变成 0 + 数字的形式 赋值给盒子
      // console.log(m < 10 ? "0" + m : m);
      //计算描述 转化为整数
      var s:any = parseInt((times % 60).toString());
      s=s < 10 ? "0" + s : s
      //如果秒钟数小于 10，要变成 0 + 数字的形式 赋值给盒子
      return{
        h,
        m,
        s
      }
}