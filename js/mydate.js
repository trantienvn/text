var mydate={convertTimezoneDate:function(e){console.log((new Date).getTimezoneOffset()),console.log(e.getTime());var t=new Date;return t.setTime(e.getTime()-60*(new Date).getTimezoneOffset()*1e3),console.log(t),t},_getDateDiff:function(e,t){console.log("src:"+e),console.log("dst:"+t);var o=(e.getTime()-t.getTime())/6e4,a=o/1440;return offset={},offset.year=Math.floor(a/365),offset.month=Math.floor(a/30),offset.day=Math.floor(a),offset.hour=Math.floor(o/60),offset.min=Math.floor(o),offset},_getDateObj:function(e){var t={};return t.year=e.getFullYear(),t.month=e.getMonth()+1,t.month_en=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(e.getMonth())],t.day=e.getDate(),t.hour=e.getHours(),t.min=e.getMinutes(),t.date=e,t},getWhen:function(e){var t=e,o=new Date,a=mydate._getDateDiff(o,t),n="";if(a.day>30){var r=mydate._getDateObj(t);n=r.month_en+" "+r.day+", "+r.year}else n=a.day>1?a.day+" days ago":a.day>0?"1 day ago":a.hour>1?a.hour+" hours ago":a.hour>0?"1 hour ago":a.min>1?a.min+" minutes ago":a.min>0?"1 minute ago":"now";return n}};