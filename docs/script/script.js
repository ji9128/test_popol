// 공통헤더
// 0516 수정 코드
$(document).ready(function () {
	$('#header').load('header.html', function () {
		TopBar_init(); // 공통 header 로딩 되면서 탑바 함수도 같이 실행
	});

	$('#footer').load('footer.html');
});


// 탑바 메뉴 
function TopBar_init() {
	let topmenu = $(".content_menu_equip > ul");
	let header = $("header");

	topmenu.mouseenter(function () {
		header.stop().animate({ height: "195px" });
	});

	topmenu.mouseleave(function () {
		header.stop().animate({ height: "50px" }, 200);
	});
}
TopBar_init();


// 상품페이지 탑바 탭메뉴
function Content_menu__init() {
	$('.content_menu_equip > ul > li').click(function () {

		let $this = $(this);

		console.log("실행");
		
		let thisIndex = $this.index();

		$this.siblings('.active').removeClass('active');

		$this.addClass('active');

		let $box1 = $this.closest('.content_menu');
		let $shopping = $box1.find('.shopping');

		$shopping.find(' > ul > li').removeClass('active');
		$shopping.find(' > ul > li').eq(thisIndex).addClass('active');		
 
	})
}

Content_menu__init();


// 메인페이지 스위치 main_sw 스와이퍼
function Swslider__init() {
	let swiper = new Swiper('.sw_img-slider .swiper', {
		slidesPerView: 5,
		spaceBetween: 10,
		loop: true,
		pagination: {
			clickable: true,
			type: 'bullets'
		},
		autoplay: {
			delay: 1000,
			disableOnInteraction: false // swiper 일시 정지 해제
		}
	});

	const swImgSliderEl = document.querySelector('.sw_img-slider');
	// swiper 일시 정지
	swImgSliderEl.addEventListener('mouseenter', function () {
		swiper.autoplay.stop();
	});
	// swiper 다시 시작
	swImgSliderEl.addEventListener('mouseleave', function () {
		swiper.autoplay.start();
	});
}

Swiperlider__init();


// 상품페이지 좋아요(하트) 버튼
// $(function () {
// 	var $likeBtn = $('.icon.heart');

// 	$likeBtn.click(function () {
// 		$likeBtn.toggleClass('active');

// 		if ($likeBtn.hasClass('active')) {
// 			$(this).find('img').attr({
// 				'src': 'https://cdn-icons-png.flaticon.com/512/803/803087.png',
// 				alt: '찜하기 완료'
// 			});

// 		} else {
// 			$(this).find('i').removeClass('fas').addClass('far')
// 			$(this).find('img').attr({
// 				'src': 'https://cdn-icons-png.flaticon.com/512/812/812327.png',
// 				alt: "찜하기"
// 			})
// 		}
// 	})
// })


// 메인 / 상품페이지 상단 이동 버튼 oneclickBTN
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 250) {
			$('.oneclickBTN').addClass('active');
		} else {
			$('.oneclickBTN').removeClass('active');
		}
	});

	$('.oneclickBTN').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});


// 메인페이지 aos초기화 
AOS.init({
	easing: 'ease-out-back',
	duration: 1000
});