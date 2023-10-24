$(document).ready(function () {



    $(".ca").on('click', function (){
        var text = $(this).text()
        console.log(text)
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
        alert('Contract copied to clipboard');
        event.preventDefault();
    });

});