function ajaxLoad(myUl)
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
         xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
      
    xmlhttp.open("GET",myUl,true);
    xmlhttp.send();
	
	var url = location.href;
	if(url.indexOf('?') != -1)
	{
		var ary1 = url.split('?');
		var ary2 = ary1[1].split('&');
		var ary3 = ary2[1].split('=');
		if(ary3[1] == 0) {
			document.getElementById("page01").style.display='none';
		}else {
			document.getElementById("page01").style.display='';
		}
	}
	
}

function myClose(){
    document.getElementById("myPopup").style.display='none';
}