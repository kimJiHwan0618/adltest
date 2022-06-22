const toCommaString = (number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

const randomArr = [30000, 50000, 100000, 150000, 200000, 250000, 300000];

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};
shuffle(randomArr);

document.querySelector(".random__text").textContent = toCommaString(
  randomArr[0]
);
// 테스트 수정 06_22
// $(".random__text").text(toCommaString(randomArr[0]));

const step1Click = (txt) => {
  if (txt === "예금인출") {
    $(".first__step__wrap").css("display", "none");
    $(".second__step__wrap").css("display", "flex");
  } else {
    alert("지문을 다시 읽고\n지시에 따라 행동하세요");
  }
};

// 테스트 수정 06_22
// $(".first__step__wrap ul li").click(function () {});

const step2Click = (txt) => {
  if (txt !== "취소") {
    if ($(".random__text").text() === txt) {
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
};

// 테스트 수정 06_22
// $(".second__step__wrap ul li").click(function () {});
