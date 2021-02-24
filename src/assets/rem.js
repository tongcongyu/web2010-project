! function(win, lib) {
    // 创建一个空对象,包括dpr，px2rem，rem，rem2px
    var flexible = lib.flexible || (lib.flexible = {});
    function a() {
        // 获取页面视图宽度，判断
        var width=document.documentElement.clientWidth
      if (parseInt(width) > 720) {
        document.documentElement.style.fontSize = 720 / 7.5 + "px";
      } else {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + "px";
      }
    }
    var b = null;
    // 给对象flexible赋值
    // 设置dpr为1，chroem默认为2
    flexible.dpr = 1;
    flexible.rem = 100;
    flexible.rem2px = function(d) {
      var val = parseFloat(d * 75 / 100) * this.rem;
      if (typeof d === 'string' && d.match(/rem$/)) {
        val += 'px';
      }
      return val;
    }
    flexible.px2rem = function(d) {
      var val = parseFloat(d) / this.rem;
      if (typeof d === 'string' && d.match(/px$/)) {
        val += 'rem';
      }
      return val;
    }
    // 添加改变尺寸事件resize
    win.addEventListener("resize", function() {
      clearTimeout(b);
      b = setTimeout(a, 300);
    }, !1);
    a();
  }(window, window['lib'] || (window['lib'] = {}));