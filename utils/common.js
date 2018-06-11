// 获取data-index 属性  
function dataIndex(e) {
  let a = e.currentTarget.dataset.index;
  let b = e.currentTarget.dataset.id;
  let d = e.currentTarget.dataset.type;
  let e = e.currentTarget.dataset.name;
  let c = [a, b, d, e];
  return c
} 
// 用法 let index = fn.dataIndex(e)[0]  

// 数字隐私处理  
const passStrat = num => {
  var newTel = []
  for (let i = 0; i < num.length; i++) {
    let aa = num.substring(i, i + 1);
    if (i >= 3 && i <= 7) {
      aa = '*'
    }
    newTel.push(aa);
  }
  var newTelS = newTel.join("");
  return newTelS
}  

// 支付的封装  
function payFn(data, fn, fn2) {
  var payT = data.jsApiParameters;
  wx.requestPayment({
    'timeStamp': payT.timeStamp,
    'nonceStr': payT.nonceStr,
    'package': payT.package,
    'signType': 'MD5',
    'paySign': payT.paySign,
    'success'(res) {
      fn(res)
    },
    'fail'(res) {
      fn2(res)
    }
  })
}  