function hasClass(a,b){return new RegExp(" "+b+" ").test(" "+a.className+" ")}window.getComputedStyle||(window.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"==b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this}),function(a){function b(){j.setAttribute("content",m),n=!0}function c(){j.setAttribute("content",l),n=!1}function d(d){i=d.accelerationIncludingGravity,f=Math.abs(i.x),g=Math.abs(i.y),h=Math.abs(i.z),!a.orientation&&(f>7||(h>6&&8>g||8>h&&g>6)&&f>5)?n&&c():n||b()}if(/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1){var e=a.document;if(e.querySelector){var f,g,h,i,j=e.querySelector("meta[name=viewport]"),k=j&&j.getAttribute("content"),l=k+",maximum-scale=1",m=k+",maximum-scale=10",n=!0;j&&(a.addEventListener("orientationchange",b,!1),a.addEventListener("devicemotion",d,!1))}}}(this),document.onclick=function(a){a=a||window.event;var b=a.target||a.srcElement;return b.nodeName&&"IMG"==b.nodeName&&(b=b.parentNode),hasClass(b,"external")?(a.preventDefault&&a.preventDefault(),window.open(b.href,"_blank"),!1):void 0},WebFontConfig={google:{families:["Open+Sans:400,700"]}},function(){var a=document.createElement("script");a.src="https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",a.type="text/javascript",a.async="true";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}();var contactform=document.getElementById("contactForm");contactform.setAttribute("action","//formspree.io/arnaud.valle+contact@gmail.com");