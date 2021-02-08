$(function(){
    $('#sec1 .letter_one').animate({top:31},1500);
    //$('#sec1 .letter').slideDown();              
    $('#sec1 .sec1_box_three img').delay(1000).animate({top:-1},1500);
    $('#sec1 .letter_two').delay(1500).animate({top:30},1500);
    $('#sec1 .sec1_box_four img').delay(1900).animate({top:110},1500);

    $('.sec2_btn_box').each(function(){
        $('.sec2_btn').click(function(e){
            e.preventDefault(); 
        })
        $(this).click(function(){
            $(this).find('.show').stop().slideToggle(1200);
        })
    })
    $('.sec3_btn_box').each(function(){
        $('.sec3_btn').click(function(e){
            e.preventDefault(); 
        })
        $(this).click(function(){
            $(this).find('.show').stop().slideToggle(1200);
        })
    })
    $('.sec4_btn_box').each(function(){
        $('.sec4_btn').click(function(e){
            e.preventDefault(); 
        })
        $(this).click(function(){
            $(this).find('.show').stop().slideToggle(1200);
        })
    })
    $('.sec5_top').click(function(){
        $('body,html').animate({scrollTop:0},1500);
    })
    /* if else 구문 정답
    $('.sec2_btn_box').each(function(){
        $('.sec2_btn').click(function(e){
            e.preventDefault(); 
        })
    
      var sta = 1
      $(this).click(function(){
        if (sta == 1) {
            $(this).find('.show').stop().slideDown(1200);
            sta = 2
        } else {         
            $(this).find('.show').stop().slideUp(1200);
            sta = 1
     } })
    })*/
    /*var sta = 1
    $('.sec2_btn_box').each(function(){
        $('.sec2_btn').click(function(e){
            e.preventDefault(); 
        })
     if (sta == 1) {
      $(this).click(function(){
            $(this).find('.show').stop().slideDown(1200);
        })
      sta = 2
     } else {
            $(this).click(function(){
                $(this).find('.show').stop().slideUp(1200);
            })
      sta = 1
     }
    })*/
    /* 
    $('.sec2_btn_box').each(function(){
        $('.sec2_btn').click(function(e){
            e.preventDefault(); 
        })
    
      var sta = 1
      $(this).click(function(){
        if (sta == 1) {
            $(this).find('.show').stop().slideDown(1200);
            sta = 2
        } else {         
            $(this).find('.show').stop().slideUp(1200);
            sta = 1
     } })
    })
    */
    /*
        var sta = 1
        $('.sec2_btn_box').each(function(){
        $(this).click(function(){
            $(this).find('.show').slideDown(1200);
        })
        sta = 2
        $('.sec2_btn').click(function(e){
            e.preventDefault(); 
        })
        var sta = 1
    })*/
    })