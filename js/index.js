
$(function() {
    setTimeout(hidePic, 4000);

    function hidePic() {
        $('.showArea').animate({
                'margin-top': '-200%',
            },
            2000
        );
    }

    $('#searchBigContent').hide();
    $('.searchBig').click(function() {
        $('#searchBigContent').slideToggle(500);
    });

    $(window).scroll(function() {
        var wh = $(this).scrollTop();
        if (wh >= 300) {
            // alert('hello');
            $('.aboutContent h1').animate({
                    opacity: '1',
                    'margin-left': '0px',
                },
                1000
            );
            $('.aboutContent p').animate({
                    opacity: '1',
                    'margin-left': '0px',
                },
                1500
            );
        }
        if (wh >= 600) {
            // alert('hello');
            $('.slogan .paragragh').animate({
                    opacity: '1',
                    'margin-top': '0px',
                },
                1000
            );
        }
        if (wh >= 950) {
            $('#features1').animate({
                    opacity: '1',
                    'margin-top': '0px',
                },
                800
            );
            $('#features2').animate({
                    opacity: '1',
                    'margin-top': '0px',
                },
                1200
            );
            $('#features3').animate({
                    opacity: '1',
                    'margin-top': '0px',
                },
                1600
            );
        }
    });

    // $(window).scroll(function() {
    //     var win = $(window),
    //         hWin = win.height(),
    //         // wWin = win.width(),
    //         // 當前視窗和滾動條頂部的距離
    //         scroll = $(window).scrollTop();
    //     var tCont = $(this).offset().top();
    //     if (scroll > tCont - hWin * 0.8) {
    //         // alert('good')
    //         $('.slogan p').addClass('showP');
    //     }
    // });

    // function setScroll() {
    //     var win = $(window),
    //         hWin = win.height(),
    //         // wWin = win.width(),
    //         // 當前視窗和滾動條頂部的距離
    //         scroll = $(window).scrollTop();
    //     move.each(function() {
    //         // 指定元素距離頂部的距離
    //         var tCont = $(this).offset().top();
    //         if (scroll > tCont - hWin * 0.8) {
    //             $('.slogan p').addClass('showP');
    //         }
    //     });
    // }

    // $('arrow-right').click(function() {
    //     count = 0;

    //     $('#pic1').fadeIn(1000).$('#pic2').fadeOut(1000);
    // });
});

