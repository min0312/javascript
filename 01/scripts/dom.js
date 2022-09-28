//function 키워드로 함수 만들기
// function show() {
//   console.log("안녕하세요.")
// }

//es6+ 부터 함수는 화살표 함수로 만들
const show = () => {
  //1. 태그만들기
  let tag = "";
  for(let i=1; i <= 3; i++) { 
    //tag = tag + '<div class="divMsg">' + i + '</div>' ;
    //템플릿문자열
    tag = tag + `<div class="divMsg">${i}</div>`
  }
  console.log(tag);

  //2.DOM에서 태그를 넣을 요소 선택
  const msgDiv = document.querySelector('#msg')

  //3.선택된 요소의 HTML 변경
  msgDiv.innerHTML = tag
  
}
