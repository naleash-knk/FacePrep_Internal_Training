function loadPage(url,name){

    document.getElementById("frame").src=url;

    document.getElementById("currentSite").innerHTML=
    "Current Page : "+name;

}