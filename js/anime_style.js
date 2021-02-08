$(function(){
    var menu = $(".header_box > a");
	var content = $("#content > section");
	
	menu.click(function(){
		/*preventDefault 는 a 태그 처럼 클릭 이벤트 외에 
별도의 브라우저 행동을 막기 위해 사용됩니다.*/
		
		//사용자가 클릭한 li
		var tg = $(this);
		//순서값을 찾는 함수 index()
		var idx = tg.index();
		//선택한 li와 순서가 같은 content 를 찾음 eq()
		var section = content.eq(idx);
		//선택된 영역의 top 의 좌표값을 저장
		//.offset()은 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동하게 합니다.
		var tt = section.offset().top;

		//스크롤이 tt의 값에 맞게 움직이게
		$("html,body").stop().animate({scrollTop:tt});
		});//menu.click() 끝
		
		// 윈도우에서 scroll() 스크롤이 작동될 때 일어날 일.
		$(window).scroll(function(){
		//.scrollTop()은 선택한 요소의 스크롤바 수직 위치를 반환하거나 스크롤바 수직 위치를 정합니다.
		var location = $(window).scrollTop()
		
		content.each(function() {
			//반복문(each)
      var tg = $(this);
			var idx = tg.index();
			
			if(tg.offset().top <= location){  //active 위치가 안맞으면 location + 위치값 을 추가하면 됨
				menu.removeClass("active");
				menu.eq(idx).addClass("active");
				}

    });//each() 끝
		
			
			});//scroll() 끝

    $('#sec1 .letter_one').animate({top:31},1500);
    //$('#sec1 .letter').slideDown();              
    $('#sec1 .sec1_box_three img').delay(1000).animate({top:1},1500);
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