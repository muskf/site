document.onreadystatechange = function () {
    if (document.readyState == "complete") {    
        $(".spinner").hide();
        $('body').css('overflow','hidden');
    }
  }