// setTimeout(() => {
//   test.innerHTML = '不好'
// }, 2000);

// 使用script发送请求 
button.addEventListener('click', function (e) {
  let script = document.createElement('script')
  let functionName = 'fangxiaohang' + parseInt(Math.random() * 100000, 10)
  script.src = 'http://jack.com:8001/pay?callback=' + functionName
  document.body.appendChild(script)
  window[functionName] = function (result) {
    if (result === 'success') {
      amount.innerText = amount.innerText - 1
    }
    else {

    }
  }
  script.onload = function (e) {
    e.currentTarget.remove()
    delete window[functionName]
  }
  script.onerror = function (e) {
    delete window[functionName]
    e.currentTarget.remove()
  }
})