var TRange = null

function findString (str) {
 if (parseInt(navigator.appVersion)<4) return;
 var strFound;
 if (window.find) {

  // CODE FOR BROWSERS THAT SUPPORT window.find

  strFound=self.find(str);
  if (!strFound) {
   strFound=self.find(str,0,1);
   while (self.find(str,0,1)) continue;
  }
 }
 else if (navigator.appName.indexOf("Microsoft")!=-1) {
  alert ("Sorry but Internet Exploer broswers are currently not supported :(. Fell free to install Chrome, to use this piece of softwere ")
  return;
 }

 else if (navigator.appName=="Opera") {
  alert ("Sorry but Oprea broswers are currently not supported :(. Fell free to install Chrome ")
  return;
 }
 
  else if (navigator.appName=="Safari") {
  alert ("Sorry but Oprea broswers are currently not supported :(. Fell free to install Chrome ")
  return;
 }
 
 if (!strFound) alert ("This project is not marked NFE")
 return;
}
