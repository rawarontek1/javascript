function getData(){$.ajaxSetup({cache:false});$.getJSON('live-2.json',function(data){for(var i in data){var Id=data[i].Id;var Tanggal_draw=data[i].Tanggal_draw;var P1=data[i].P1;var P2=data[i].P2;var P3=data[i].P3;var P4=data[i].P4;var P5=data[i].P5;var P6=data[i].P6;var P7=data[i].P7;var P8=data[i].P8;var P9=data[i].P9;var P10=data[i].P10;var P11=data[i].P11;var P12=data[i].P12;var P13=data[i].P13;var P14=data[i].P14;var P15=data[i].P15;}
var periode="";var tgl="";var v1="";var v2="";var v3="";var v4="";var v5="";var v6="";var v7="";var v8="";var v9="";var v10="";var v11="";var v12="";var v13="";var v14="";var v15="";for(var i in data){periode+=Id;tgl+=Tanggal_draw;v1+=P1;v2+=P2;v3+=P3;v4+=P4;v5+=P5;v6+=P6;v7+=P7;v8+=P8;v9+=P9;v10+=P10;v11+=P11;v12+=P12;v13+=P13;v14+=P14;v15+=P15;}
if(v1==''){document.getElementById("data-3").innerHTML='<span class="blink_me"><span style="font-weight:bold;font-size:28px;">......</b></span>';}else{document.getElementById("data-3").innerHTML=v1;}
if(v2==''){document.getElementById("data-4").innerHTML='<span class="blink_me">......</span>';}else{document.getElementById("data-4").innerHTML=v2;}
if(v3==''){document.getElementById("data-5").innerHTML='<span class="blink_me">......</span>';}else{document.getElementById("data-5").innerHTML=v3;}
if(v4==''){document.getElementById("data-6").innerHTML='<span class="blink_me">......</span>';}else{document.getElementById("data-6").innerHTML=v4;}
if(v5==''){document.getElementById("data-7").innerHTML='<span class="blink_me">......</span>';}else{document.getElementById("data-7").innerHTML=v5;}
if(v6==''){document.getElementById("data-8").innerHTML='<span class="blink_me">......</span>';}else{document.getElementById("data-8").innerHTML=v6;}
if(v7==''){document.getElementById("data-9").innerHTML='<span class="blink_me">......</span>';}else{document.getElementById("data-9").innerHTML=v7;}
if(v8==''){document.getElementById("data-10").innerHTML='<span class="blink_me">......</span>';}else{document.getElementById("data-10").innerHTML=v8;}
if(v9==''){document.getElementById("data-11").innerHTML='<span class="blink_me">......</span>';}else{document.getElementById("data-11").innerHTML=v9;}
if(v10==''){document.getElementById("data-12").innerHTML='<span class="blink_me">......</span>';}else{document.getElementById("data-12").innerHTML=v10;}
if(v11==''){document.getElementById("data-13").innerHTML='<span class="blink_me">......</span>';}else{document.getElementById("data-13").innerHTML=v11;}
if(v12==''){document.getElementById("data-14").innerHTML='<span class="blink_me">......</span>';}else{document.getElementById("data-14").innerHTML=v12;}
if(v13==''){document.getElementById("data-15").innerHTML='<span class="blink_me">......</span>';}else{document.getElementById("data-15").innerHTML=v13;}
if(v14==''){document.getElementById("data-16").innerHTML='<span class="blink_me">......</span>';}else{document.getElementById("data-16").innerHTML=v14;}
if(v15==''){document.getElementById("data-17").innerHTML='<span class="blink_me">......</span>';}else{document.getElementById("data-17").innerHTML=v15;}
document.getElementById("data-1").innerHTML=periode;document.getElementById("data-2").innerHTML=tgl;});}
setInterval(getData,3000);$(function(){getData();});