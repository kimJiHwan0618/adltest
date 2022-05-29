window.onpageshow = function () {
  const randomArr = [
    "에스프레소",
    "아메리카노",
    "라떼",
    "홍차",
    "녹차",
    "민트차",
    "아이스티",
    "오렌지 주스",
    "수박 주스",
    "블루베리 주스",
    "딸기 주스",
    "케일 주스",
    "당근 주스",
    "호밀빵",
    "참깨빵",
    "초코칩 쿠키",
    "아이싱 쿠키",
    "도넛",
  ];

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };
  shuffle(randomArr);

  $(".random__text").text(randomArr[0]);

  $(".tab__title__list li").click(function () {
    $(".tab__title__list li").removeClass("on");
    $(this).addClass("on");

    $(".img__wrap").removeClass("on");
    $(".img__wrap").eq($(this).index()).addClass("on");
  });

  $(".img__wrap .item").click(function () {
    $(".img__wrap").removeClass("on");
    $(".tab__title__list").removeClass("on");
    $(".order__history__wrap ul li")
      .eq(0)
      .children("dl")
      .children("dt")
      .text($(this).children("dl").children("dt").text());
    $(".order__history__wrap ul li")
      .eq(0)
      .children("dl")
      .children("dd")
      .text($(this).children("dl").children("dd").text());

    if (
      $(".random__text").text() === $(this).children("dl").children("dt").text()
    ) {
      alert("성공");
      fn_callNative(true);
    } else {
      alert("실패");
      fn_callNative(false);
    }
  });

  $(".back__btn").click(function () {
    $(".tab__title__list").addClass("on");
    let activeIndex = 0;
    for (let i = 0; i < $(".tab__title__list").children().length; i++) {
      if ($(".tab__title__list li").eq(i).hasClass("on")) {
        activeIndex = i;
      }
    }
    $(".img__wrap").eq(activeIndex).addClass("on");
  });
};
