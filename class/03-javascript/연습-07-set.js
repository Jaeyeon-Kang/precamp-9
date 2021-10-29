setTimeout() //특정시간 지나고 나서 실행되는 함수
setTimeout(기능, 초) // 1000이 1초임. 밀리세컨즈. 0.5초는 500. 0.3초는 300. 기능은 function... function 다음엔 () 가 반드시 있어야 하고, {}안에는 내가 실행시키고 싶은 기능 쓰면 됨
setTimeout(function(){
    console.log("3초후 실행됩니다!!")   
  
}, 3000)
//2
//3초후 실행됩니다!!
//setInterval(기능, 밀리초) // 위에랑 똑같이 밀리초... 위에 못지워서 여기는 그냥 밀리초라고 씀. 특정시간마다 실행
setInterval(function(){
    console.log("1초 마다 실행됩니다!!")},1000)
//3
// 1초 마다 실행됩니다!! //옆에 숫자로 카운팅되고있음
clearInterval(3) // 위 3은 아이디로서 clearIPnterval하면 3번에 해당되는 카운터가 멈추는거임



let time = 10 //time이라는 상자에 10을 넣어줌
undefined
setInterval(function(){
    console.log(time)
    time = time-1 //지금 time이 10인데 -1했으니 9...또 9에서 1을 빼는 식으로 time이 1씩 줄음
}, 1000) 



// 아래 조건문 사용했음 0보다 크게만 작용하라고
setInterval(function(){
    if (time> 0){


    console.log(time)
    time = time-1 
    }

}, 1000) 




//3분 -> 180초
//180을 60으로 나누면 몫이 3이 됨 //179를 60으로 나누면 몫이 2이고 나머지가 59가 됨 ----> 이런 규칙을 이용해서 초를 60으로 나누었을때 몫이 '분' 나머지를 '초'가 됨.

Math.floor(179/60) 
//2
179 % 60 // 나머지를 구하는 연산자
//59



setInterval(
    function(){
        const minutes= Math.floor(time / 60) // 분이라는 상자에 값을 넣기
        const seconds= time%60 //초 구하기
    
         if(time >= 0)
              {
            console.log(minutes + ":" + seconds) 
            time = time-1
                        }
    
    
                }, 1000)
    2

    //이러고 아래 타이머 나옴....