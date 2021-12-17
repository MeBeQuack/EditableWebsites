(function() {
    console.log("bookmarklet starting");
    document.body.contentEditable = true;
    let all_links = document.getElementsByTagName("a");
    for(i=1; i<all_links.length; i++){
        all_links[i].removeAttribute("href");
    }
})();
