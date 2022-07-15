const clock = document.querySelector(".clock_View");

// 시간을 구하는 함수
// ! 기존 if문의 조건형식으로 두자리를 표현하는게 아닌 'padStart'를 통해 2자리수 표현
// padStart란 문자열을 기준으로 지정된 다른 문자를 앞, 뒤에 채워 길이를 맞춰준다.
// padStart를 쓰기 위해서는 문자열 변환이 필요하기에 String으로 변환하여 준다.
// padStart는 앞쪽에 문자열을 채워주지만 반대로 padEnd는 뒤쪽에 채워준다.
function getTime() {
  const date = new Date();
  const getHour = String(date.getHours()).padStart(2, "0");
  const getMinute = String(date.getMinutes()).padStart(2, "0");
  const getSeconde = String(date.getSeconds()).padStart(2, "0");

  return (clock.innerHTML = `${getHour} : ${getMinute} : ${getSeconde}`);
  // innerHTML을 통해 clock 요소에 시간을 출력한다.
  // 템플릿 리터럴을 통해 출력한다. 그렇지 않다면
  // getHour + ':' + getMinute + ':' + getSecond라는 가시화에 좋지못한 코드를 작성한다.
}

//실행 함수
// ! setInterval을 통해 1초 단위로 시간이 작동하도록 한다.
function getTimeHandler() {
  getTime();
  setInterval(getTime, 1000);
  //setInterval (실행함수, 단위);
}

getTimeHandler();
