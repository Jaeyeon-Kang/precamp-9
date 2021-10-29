const classmates = ["철수", "영희", "훈이"]
// undefined
classmates
(3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
for(let i=0; i<3; i++){
    console.log(classmates[i])
}
// VM2617:2 철수
// VM2617:2 영희
// VM2617:2 훈이
// undefined
for(let i=0; i<3; i++){
    console.log(classmates[i] + "입니다")
}
// VM2641:2 철수입니다
// VM2641:2 영희입니다
// VM2641:2 훈이입니다
// undefined
const classmates2 = [
    { name: "철수", age:10, school: "다람쥐초등학교" },
    { name: "영희", age:11, school: "공룡초등학교" },
    
]
// undefined
classmates2
// (2) [{…}, {…}]
classmates2[0]
// {name: '철수', age: 10, school: '다람쥐초등학교'}
classmates[0].school
// undefined
classmates2[0].school
// '다람쥐초등학교'
classmates2[1].age
// 11





// 랜덤한 숫자 뽑아내는 명령어
Math.random()
0.8335161912508915
​
// 자릿수를 옮긴 후 그 아래 나머지 수 버리는 명령어
Math.floor(Math.random() * 1000000)
928865
​
// 숫자열을 문자열로 변환하는 명령어
String(Math.floor(Math.random() * 1000000))
'846819'
​
// 첫 번째 자리의 숫자가 0일 경우 생략되는 경우를 방지하기 위한 명령어
String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
'074872'
​
// 실무에서는 주로 핸드폰 인증번호나 token으로 변수를 지정해 저장한다.
const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// undefined
​
// 출력 예시
token
'224763'



// 여기서부터 10/18

String(Math.floor(Math.random()*1000000)).padStart(6,"0")
'371729'
const token=String(Math.floor(Math.random()*1000000)).padStart(6,"0")
undefined
token
'487930'
function aaa(){
 alert("안녕하세요!!!")   
}
undefined
aaa()
undefined
aaa()
undefined
function getToken(){
    const token=String(Math.floor(Math.random()*1000000)).padStart(6,"0")
}
undefined
function getToken(){
    const token=String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    console.log(token)
}
undefined
getToken()
VM960:3 278018
undefined
getToken()
VM960:3 437873
undefined
getToken()
VM960:3 433883
undefined
getToken()
VM960:3 209843
undefined
getToken()
VM960:3 759068
undefined
getToken()
VM960:3 008354


