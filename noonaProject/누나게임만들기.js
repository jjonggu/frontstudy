// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go 라는 버튼 클릭
// 만약 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 랜덤번호가 < 유저번호 Down!!
// 랜덤번호가 > 유저번호 up!!
// Rest버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다. (버튼 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깍지 않는다.

// 생성 객체
let randomNum = 0;
let userInput = document.getElementById('user-input')
let randomBtn = document.getElementById('random-btn')
let UserMag = document.getElementById('user-mag')
let resetBtn = document.getElementById('reset-btn')
let chance = document.getElementById('chance')
let chances = 5;


// 이벤트
randomBtn.addEventListener('click', playGame)
resetBtn.addEventListener('click', resetGame)


function randomMath(){
    randomNum = Math.floor(Math.random() * 100 + 1)
    console.log(randomNum)
}

randomMath();

function playGame(){
    let userValue = document.getElementById('user-input').value
    
    // 랜덤번호 UP! DOWN!
    if(userValue < randomNum){
        UserMag.textContent = 'UP! 높은 숫자가 필요한걸?'
    }else if(userValue > randomNum) {
        UserMag.textContent = 'DOWN! 숫자가 필요한걸?'
    }else if(userValue == randomNum){
        UserMag.textContent = '축하해! 정답이야!'
    }

}

// reset 초기화 버튼
function resetGame(){
    userInput.value = null;
}

