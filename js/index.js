$(window).scroll(function () {
    //检测屏幕滚动高度 高过一个值的时候修改nav的属性
    if ($(this).scrollTop() > 150) {
        $("#navbarWrapper").addClass("fixed-top");
        $("#navbarWrapper").removeClass("mt-3");
        $("#navbarWrapper").addClass("floating_header");

    } else {
        $("#navbarWrapper").removeClass("fixed-top");
        $("#navbarWrapper").addClass("mt-3");
        $("#navbarWrapper").removeClass("floating_header");
    }
})

$(".nav-button").click(function () {
    $("#navbarWrapper").addClass("fixed-top");
})

$("#login-use-password").on('click', function () {
    $('#login-password').removeClass('login-hide');
    $('#login-code').addClass('login-hide');

})

$('#login-use-code').on('click', function () {
    $('#login-code').removeClass('login-hide');
    $('#login-password').addClass('login-hide');
})

var downloadCode = `<div style="width: 240px; height: 240px;text-align: center"> 
    <div style="margin: 20px 20px 10px 20px;" >
    <img src="imgs/clazz-code.svg" alt=" " width="200px" height="200px">
    </div>
    <p><small>扫描二维码下载</small></p>   
    <div>`;

$("[data-toggle='popover']").popover({
    trigger: 'click',
    html: true,
    content: downloadCode
})





