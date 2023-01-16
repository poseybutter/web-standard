//탭 메뉴
//변수란? 데이터를 저장하는 저장소
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e) {
  e.preventDefault();

  var $this = $(this);
  //버튼을 클릭하면 버튼의 타겟이 this의 변수에 저장됨
  //두 번째 버튼을 클릭하면 두 번째 버튼의 변수가 저장되고, 세 번째 버튼을 클릭하면 세 번째 버튼의 변수가 저장됨

  $this
    .next("ul")
    .show() //버튼을 클릭했을 때 ul이 보임
    .parent("li") //ul의 부모인 li에
    .addClass("active") //active class를 붙여줌
    .siblings("li") //형제 li에 있는
    .removeClass("active") //active class는 제거해줌
    .find(">ul") //형제 li에서 밑에 있는 ul들도 찾아서
    .hide(); //숨겨줌
}

$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

//배너
// html 마크업 세팅 -> css 연동 -> 제이쿼리 연동 -> 제이쿼리 호출
$(".ban").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
});

//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn").click(function (e) {
  e.preventDefault(); // 클릭했을 때 값을 0,0으로 이동하게 하는 걸 차단시킴

  // $("#cont_nav").css("display", "block");
  // $("#cont_nav").show();
  // $("#cont_nav").fadeIn();
  // $("#cont_nav").slideDown();
  // $("#cont_nav").toggle();
  // $("#cont_nav").fadeToggle();
  $("#cont_nav").slideToggle(350);
  $(this).toggleClass("on");
});
