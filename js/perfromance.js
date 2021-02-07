(function() {
  handleAddListener("load", getTiming);

  function handleAddListener(type, fn) {
    if (window.addEventListener) {
      window.addEventListener(type, fn);
    } else {
      window.attachEvent("on" + type, fn);
    }
  }

  function getTiming() {
    try {
      var time = performance.timing;
      var timingObj = {};

      var loadTime = (time.loadEventEnd - time.loadEventStart) / 1000;

      if (loadTime < 0) {
        setTimeout(function() {
          getTiming();
        }, 200);
        return;
      }

      timingObj["重定向时间"] = (time.redirectEnd - time.redirectStart) / 1000;
      timingObj["DNS解析时间"] =
        (time.domainLookupEnd - time.domainLookupStart) / 1000;
      timingObj["TCP完成握手时间"] =
        (time.connectEnd - time.connectStart) / 1000;
      timingObj["HTTP请求响应完成时间"] =
        (time.responseEnd - time.requestStart) / 1000;
      timingObj["DOM开始加载前所花费时间"] =
        (time.responseEnd - time.navigationStart) / 1000;
      timingObj["DOM加载完成时间"] =
        (time.domComplete - time.domLoading) / 1000;
      timingObj["DOM结构解析完成时间"] =
        (time.domInteractive - time.domLoading) / 1000;
      timingObj["脚本加载时间"] =
        (time.domContentLoadedEventEnd - time.domContentLoadedEventStart) /
        1000;
      timingObj["onload事件时间"] =
        (time.loadEventEnd - time.loadEventStart) / 1000;
      timingObj["页面完全加载时间"] =
        timingObj["重定向时间"] +
        timingObj["DNS解析时间"] +
        timingObj["TCP完成握手时间"] +
        timingObj["HTTP请求响应完成时间"] +
        timingObj["DOM结构解析完成时间"] +
        timingObj["DOM加载完成时间"];
      window.$loadTime = timingObj;
    } catch (e) {
      console.log("timingObj", timingObj);
    }
  }
})();
const DADA = (_ =>
  [..."`1234567890-=~~QWERTYUIOP[]\\~ASDFGHJKL;'~~ZXCVBNM,./~"].map(
    x =>
      ((o += `/${(b = "_".repeat(
        (w =
          x < y
            ? 2
            : " 667699"[
                ((x = ["BS", "TAB", "CAPS", "ENTER"][p++] || "SHIFT"), p)
              ])
      ))}\\|`),
      (m += y + (x + "    ").slice(0, w) + y + y),
      (n += y + b + y + y),
      (l += " __" + b))[73] && (k.push(l, m, n, o), (l = ""), (m = n = o = y)),
    (m = n = o = y = "|"),
    (p = l = k = [])
  ) &&
  k.join`
`)();
