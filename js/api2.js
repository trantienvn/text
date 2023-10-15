var api2={sessionKey:null,getParam:function(e){return null!==api2.sessionKey&&void 0!==api2.sessionKey&&""!==api2.sessionKey?(e.sessionkey=api2.sessionKey,e):e}},HOST="";HOST=0===window.location.href.indexOf("chrome")?"https://write-box.appspot.com":"",api2.host=HOST,api2.dropbox={},api2.googledrive={},api2.box={},api2.onedrive={},api2.dropbox.getFiles=function(e){$.ajax({type:"GET",url:HOST+"/api/2/dropbox/files",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){result=[];for(var i=0;i<o.result.length;i++){var a=o.result[i],r=a.path.split("/").pop(),t=mydate.convertTimezoneDate(new Date(a.modified));result.push({storage:"dropbox",fileID:a.path,fileName:r,type:a.is_dir?"folder":"file",mimeType:a.mime_type,modifiedDate:t})}e.success(result)},error:function(o,i,a){console.log("GET:/api/2/dropbox/files <<< ERROR: "+o.status),e.error(o.status)}})},api2.googledrive.getFiles=function(e){$.ajax({type:"GET",url:HOST+"/api/2/googledrive/files",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){result=[];for(var i=0;i<o.result.length;i++){var a=o.result[i],r="application/vnd.google-apps.folder"===a.mimeType?"folder":"file";result.push({storage:"googledrive",fileID:a.id,fileName:a.title,type:r,mimeType:a.mimeType,modifiedDate:a.modified,obj:a})}e.success(result)},error:function(o,i,a){console.log("GET:/api/2/googledrive/files <<< ERROR: "+o.status),e.error(o.status)}})},api2.box.getFiles=function(e){$.ajax({type:"GET",url:HOST+"/api/2/box/files",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){result=[];for(var i=0;i<o.result.entries.length;i++){var a=o.result.entries[i];result.push({storage:"box",fileID:a.id,fileName:a.name,type:"folder"===a.type?"folder":"file",mimeType:"text",modifiedDate:a.modified})}e.success(result)},error:function(o,i,a){console.log("GET:/api/2/box/files <<< ERROR: "+o.status),e.error(o.status)}})},api2.onedrive.getFiles=function(e){$.ajax({type:"GET",url:HOST+"/api/2/onedrive/files",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){if(result=[],o.result)for(var i=0;i<o.result.length;i++){var a=o.result[i];("folder"in a||"file"in a)&&result.push({storage:"onedrive",fileID:a.id,fileName:a.name,type:"folder"in a?"folder":"file",mimeType:"file"in a?a.file.mimeType:"",modifiedDate:a.lastModifiedDateTime})}e.success(result)},error:function(o,i,a){console.log("GET:/api/2/box/files <<< ERROR: "+o.status),e.error(o.status)}})},api2.dropbox.getTextData=function(e){$.ajax({type:"GET",url:HOST+"/api/2/dropbox/file/text",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){e.success(o.result.text,new Date(Date.parse(o.result.modified)))},error:function(o,i,a){console.log("GET:/api/2/dropbox/file/text <<< ERROR: "+i),e.error()}})},api2.googledrive.getTextData=function(e){$.ajax({type:"GET",url:HOST+"/api/2/googledrive/file/text",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){e.success(o.result.text,new Date(Date.parse(o.result.modified)),o.result.mimetype)},error:function(o,i,a){console.log("GET:/api/2/dropbox/file/text <<< ERROR: "+i),e.error()}})},api2.box.getTextData=function(e){$.ajax({type:"GET",url:HOST+"/api/2/box/file/text",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){e.success(o.result.text,new Date(Date.parse(o.result.modified)),o.result.mimetype)},error:function(o,i,a){console.log("GET:/api/2/dropbox/file/text <<< ERROR: "+i),e.error()}})},api2.onedrive.getTextData=function(e){console.log("getTextData: "+e.query),$.ajax({type:"GET",url:HOST+"/api/2/onedrive/file/text",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){e.success(o.result.text,new Date(Date.parse(o.result.modified)),o.result.mimetype)},error:function(o,i,a){console.log("GET:/api/2/dropbox/file/text <<< ERROR: "+i),e.error()}})},api2.dropbox.getMetaData=function(e){$.ajax({type:"GET",url:HOST+"/api/2/dropbox/file/meta",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){e.success({modified:o.result.modified})},error:function(o,i,a){console.log("GET:/api/2/box/file/meta <<< ERROR: "+i),e.error()}})},api2.googledrive.getMetaData=function(e){$.ajax({type:"GET",url:HOST+"/api/2/googledrive/file/meta",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){e.success({modified:o.result.modifiedDate})},error:function(o,i,a){console.log("GET:/api/2/googledrive/file/meta <<< ERROR: "+i),e.error()}})},api2.box.getMetaData=function(e){$.ajax({type:"GET",url:HOST+"/api/2/box/file/meta",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){e.success({modified:o.result.modified_at})},error:function(o,i,a){console.log("GET:/api/2/dropbox/file/meta <<< ERROR: "+i),e.error()}})},api2.onedrive.getMetaData=function(e){$.ajax({type:"GET",url:HOST+"/api/2/onedrive/file/meta",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){e.success({modified:o.result.modifiedDate})},error:function(o,i,a){console.log("GET:/api/2/dropbox/file/meta <<< ERROR: "+i),e.error()}})},api2.dropbox.saveTextData=function(e){$.ajax({type:"POST",url:HOST+"/api/2/dropbox/file/text",data:api2.getParam({fileid:e.fileID,contents:e.contents}),dataType:"json",success:function(o){e.success(o.fileid,o.modified)},error:function(o,i,a){console.log("GET:/api/data <<< ERROR: "+i),e.error()}})},api2.googledrive.saveTextData=function(e){$.ajax({type:"POST",url:HOST+"/api/2/googledrive/file/text",data:api2.getParam({fileid:e.fileID,filename:e.fileName,parentfolderid:e.parentFolderID,contents:e.contents,mimetype:e.mimeType}),dataType:"json",success:function(o){e.success(o.fileid,o.modified)},error:function(o,i,a){console.log("GET:/api/data <<< ERROR: "+i),e.error()}})},api2.box.saveTextData=function(e){$.ajax({type:"POST",url:HOST+"/api/2/box/file/text",data:api2.getParam({fileid:e.fileID,filename:e.fileName,parentfolderid:e.parentFolderID,contents:e.contents}),dataType:"json",success:function(o){e.success(o.result.id,o.result.modified_at)},error:function(o,i,a){console.log("GET:/api/data <<< ERROR: "+i),e.error()}})},api2.onedrive.saveTextData=function(e){$.ajax({type:"POST",url:HOST+"/api/2/onedrive/file/text",data:api2.getParam({fileid:e.fileID,filename:e.fileName,parentfolderid:e.parentFolderID,contents:e.contents}),dataType:"json",success:function(o){e.success(o.fileid,o.modified)},error:function(o,i,a){console.log("GET:/api/data <<< ERROR: "+i),e.error()}})},api2.dropbox.moveFile=function(e){$.ajax({type:"GET",url:HOST+"/api/2/dropbox/file/ops/move",data:api2.getParam({srcpath:e.query,dstpath:e.destination}),dataType:"json",success:function(o){e.success({})},error:function(o,i,a){console.log("GET:/api/2/dropbox/file/ops/move <<< ERROR: "+i),e.error()}})},api2.googledrive.moveFile=function(e){$.ajax({type:"GET",url:HOST+"/api/2/googledrive/file/ops/move",data:api2.getParam({q:e.query,parentfolderid:e.destination}),dataType:"json",success:function(o){e.success({})},error:function(o,i,a){console.log("GET:/api/2/googledrive/file/ops/move <<< ERROR: "+i),e.error()}})},api2.box.moveFile=function(e){$.ajax({type:"GET",url:HOST+"/api/2/box/file/ops/move",data:api2.getParam({q:e.query,parentfolderid:e.parentFolderId}),dataType:"json",success:function(o){e.success({modified:o.result.modified_at})},error:function(o,i,a){console.log("GET:/api/2/box/file/ops/move <<< ERROR: "+i),e.error()}})},api2.dropbox.renameFile=function(e){$.ajax({type:"GET",url:HOST+"/api/2/dropbox/file/ops/move",data:api2.getParam({srcpath:e.query,dstpath:e.fileName}),dataType:"json",success:function(o){e.success({fileID:o.result.path,modified:o.result.modified})},error:function(o,i,a){console.log("GET:/api/2/dropbox/file/ops/move <<< ERROR: "+i),e.error()}})},api2.googledrive.renameFile=function(e){$.ajax({type:"GET",url:HOST+"/api/2/googledrive/file/ops/move",data:api2.getParam({q:e.query,filename:e.fileName}),dataType:"json",success:function(o){e.success({modified:o.result.modifiedDate})},error:function(o,i,a){console.log("GET:/api/2/googledrive/file/ops/move <<< ERROR: "+i),e.error()}})},api2.box.renameFile=function(e){$.ajax({type:"GET",url:HOST+"/api/2/box/file/ops/move",data:api2.getParam({q:e.query,filename:e.fileName}),dataType:"json",success:function(o){e.success({modified:o.result.modified_at})},error:function(o,i,a){console.log("GET:/api/2/box/file/ops/move <<< ERROR: "+i),e.error()}})},api2.dropbox.deleteFile=function(e){$.ajax({type:"GET",url:HOST+"/api/2/dropbox/file/ops/delete",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){e.success({})},error:function(o,i,a){console.log("GET:/api/2/dropbox/file/ops/delete <<< ERROR: "+i),e.error()}})},api2.googledrive.deleteFile=function(e){$.ajax({type:"GET",url:HOST+"/api/2/googledrive/file/ops/delete",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){e.success({})},error:function(o,i,a){console.log("GET:/api/2/googledrive/file/ops/delete <<< ERROR: "+i),e.error()}})},api2.box.deleteFile=function(e){$.ajax({type:"GET",url:HOST+"/api/2/box/file/ops/delete",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){e.success({})},error:function(o,i,a){console.log("GET:/api/2/box/file/ops/delete <<< ERROR: "+i),e.error()}})},api2.onedrive.deleteFile=function(e){$.ajax({type:"GET",url:HOST+"/api/2/onedrive/file/ops/delete",data:api2.getParam({q:e.query}),dataType:"json",success:function(o){e.success({})},error:function(o,i,a){console.log("GET:/api/2/onedrive/file/ops/delete <<< ERROR: "+i),e.error()}})},api2.getAccount=function(e){$.ajax({type:"GET",url:HOST+"/api/2/account",data:api2.getParam({}),dataType:"json",success:function(o){e.success(o)},error:function(o,i,a){console.log("GET:/api/2/dropbox/file/text <<< ERROR: "+i),e.error()}})},api2.dropbox.link=function(){location.href="/api/2/dropbox/link"},api2.dropbox.getLinkUrl=function(){return linkUrl=HOST+"/api/2/dropbox/link?returnkey=yes",null!==api2.sessionKey&&void 0!==api2.sessionKey&&""!==api2.sessionKey&&(linkUrl+="&sessionkey="+api2.sessionKey),linkUrl},api2.dropbox.unlink=function(e){$.ajax({type:"GET",url:HOST+"/api/2/dropbox/unlink",data:api2.getParam({}),success:function(){e.success()},error:function(o,i,a){console.log("GET:/api/2/dropbox/unlink <<< ERROR: "+i),e.error()}})},api2.googledrive.link=function(){location.href="/api/2/googledrive/link"},api2.googledrive.getLinkUrl=function(){return linkUrl=HOST+"/api/2/googledrive/link?returnkey=yes",null!==api2.sessionKey&&void 0!==api2.sessionKey&&""!==api2.sessionKey&&(linkUrl+="&sessionkey="+api2.sessionKey),linkUrl},api2.googledrive.unlink=function(e){$.ajax({type:"GET",url:HOST+"/api/2/googledrive/unlink",data:api2.getParam({}),success:function(){e.success()},error:function(o,i,a){console.log("GET:/api/2/googledrive/unlink <<< ERROR: "+i),e.error()}})},api2.box.link=function(){location.href="/api/2/box/link"},api2.box.getLinkUrl=function(){return linkUrl=HOST+"/api/2/box/link?returnkey=yes",null!==api2.sessionKey&&void 0!==api2.sessionKey&&""!==api2.sessionKey&&(linkUrl+="&sessionkey="+api2.sessionKey),linkUrl},api2.box.unlink=function(e){$.ajax({type:"GET",url:HOST+"/api/2/box/unlink",data:api2.getParam({}),success:function(){e.success()},error:function(o,i,a){console.log("GET:/api/2/box/unlink <<< ERROR: "+i),e.error()}})},api2.onedrive.link=function(){location.href="/api/2/onedrive/link"},api2.onedrive.getLinkUrl=function(){return linkUrl=HOST+"/api/2/onedrive/link?returnkey=yes",null!==api2.sessionKey&&void 0!==api2.sessionKey&&""!==api2.sessionKey&&(linkUrl+="&sessionkey="+api2.sessionKey),linkUrl},api2.onedrive.unlink=function(e){$.ajax({type:"GET",url:HOST+"/api/2/onedrive/unlink",data:api2.getParam({}),success:function(){e.success()},error:function(o,i,a){console.log("GET:/api/2/onedrive/unlink <<< ERROR: "+i),e.error()}})},api2.dropbox.linkWithNewTab=function(e){chrome.extension.getBackgroundPage().openLoginPage({loginUrl:HOST+"/api/2/dropbox/link",callbackUrl:HOST,success:function(){e()}})},api2.googledrive.linkWithNewTab=function(e){chrome.extension.getBackgroundPage().openLoginPage({loginUrl:HOST+"/api/2/googledrive/link",callbackUrl:HOST,success:function(){e()}})},api2.box.linkWithNewTab=function(e){chrome.extension.getBackgroundPage().openLoginPage({loginUrl:HOST+"/api/2/box/link",callbackUrl:HOST,success:function(){e()}})},api2.onedrive.linkWithNewTab=function(e){chrome.extension.getBackgroundPage().openLoginPage({loginUrl:HOST+"/api/2/onedrive/link",callbackUrl:HOST,success:function(){e()}})},api2.setSessionKey=function(e){api2.sessionKey=e};