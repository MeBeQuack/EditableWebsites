var element = document.getElementsByTagName("p")[0];
var text = element.innerHTML;
if(text.startsWith("https://")){
    text = "<a href='" + text + "'>" + text + "</a>";
}