const toCommaString = (number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

const randomArr = [30000, 50000, 100000, 150000, 200000, 250000, 300000];

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};
shuffle(randomArr);

$(".random__text").text(toCommaString(randomArr[0]));

$(".first__step__wrap ul li").click(function () {
  if ($(this).text() === "예금인출") {
    $(".first__step__wrap").css("display", "none");
    $(".second__step__wrap").css("display", "flex");
  } else {
    alert("지문을 다시 읽고\n지시에 따라 행동하세요");
  }
});

$(".second__step__wrap ul li").click(function () {
  if ($(this).text() !== "취소") {
    if (
      $(".random__text").text() ===
      toCommaString($(this).text().replace("만원", "") + "0000")
    ) {
      alert("성공");
      fn_callNative(true);
    } else {
      alert("실패");
      fn_callNative(false);
    }
  } else {
    $(".first__step__wrap").css("display", "flex");
    $(".second__step__wrap").css("display", "none");
  }
});
