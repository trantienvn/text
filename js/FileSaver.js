/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||navigator.msSaveBlob&&navigator.msSaveBlob.bind(navigator)||function(t){"use strict";var e=t.document,n=t.URL||t.webkitURL||t,r=e.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,i=t.webkitRequestFileSystem,a=t.requestFileSystem||i||t.mozRequestFileSystem,c=function(e){(t.setImmediate||t.setTimeout)((function(){throw e}),0)},s="application/octet-stream",u=0,f=[],l=function(t,e,n){for(var r=(e=[].concat(e)).length;r--;){var o=t["on"+e[r]];if("function"==typeof o)try{o.call(t,n||t)}catch(t){c(t)}}},d=function(n,c){var d,v,w,p,y,h=this,R=n.type,E=!1,m=function(){var e=(t.URL||t.webkitURL||t).createObjectURL(n);return f.push(e),e},S=function(){l(h,"writestart progress write writeend".split(" "))},b=function(){!E&&d||(d=m()),v&&(v.location.href=d),h.readyState=h.DONE,S()},g=function(t){return function(){if(h.readyState!==h.DONE)return t.apply(this,arguments)}},N={create:!0,exclusive:!1};if(h.readyState=h.INIT,c||(c="download"),o&&(d=m(),r.href=d,r.download=c,p=r,(y=e.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,t,0,0,0,0,0,!1,!1,!1,!1,0,null),p.dispatchEvent(y)))return h.readyState=h.DONE,void S();t.chrome&&R&&R!==s&&(w=n.slice||n.webkitSlice,n=w.call(n,0,n.size,s),E=!0),i&&"download"!==c&&(c+=".download"),v=R===s||i?t:t.open(),a?(u+=n.size,a(t.TEMPORARY,u,g((function(t){t.root.getDirectory("saved",N,g((function(t){var e=function(){t.getFile(c,N,g((function(t){t.createWriter(g((function(e){e.onwriteend=function(e){v.location.href=t.toURL(),f.push(t),h.readyState=h.DONE,l(h,"writeend",e)},e.onerror=function(){var t=e.error;t.code!==t.ABORT_ERR&&b()},"writestart progress write abort".split(" ").forEach((function(t){e["on"+t]=h["on"+t]})),e.write(n),h.abort=function(){e.abort(),h.readyState=h.DONE},h.readyState=h.WRITING})),b)})),b)};t.getFile(c,{create:!1},g((function(t){t.remove(),e()})),g((function(t){t.code===t.NOT_FOUND_ERR?e():b()})))})),b)})),b)):b()},v=d.prototype;return v.abort=function(){var t=this;t.readyState=t.DONE,l(t,"abort")},v.readyState=v.INIT=0,v.WRITING=1,v.DONE=2,v.error=v.onwritestart=v.onprogress=v.onwrite=v.onabort=v.onerror=v.onwriteend=null,t.addEventListener("unload",(function(){for(var t=f.length;t--;){var e=f[t];"string"==typeof e?n.revokeObjectURL(e):e.remove()}f.length=0}),!1),function(t,e){return new d(t,e)}}(self);