const classmates = ["철수", "영희", "훈이"]
//undefined
classmates
//(3) ['철수', '영희', '훈이']
classmates[0]
//'철수'
classmates[1]
//'영희'
classmates.includes("훈이")
//true
classmates.includes("맹구")
//false
classmates.push("맹구")
//4
classmates
//(4) ['철수', '영희', '훈이', '맹구']
classmates.includes("맹구")
//true
classmates.pop()
//'맹구'
classmates
//(3) ['철수', '영희', '훈이']
classmates.length
//3
const aaa[1,2,3]
//VM679:1 Uncaught SyntaxError: Missing initializer in const declaration
const aaa = [1,2,3]
//undefined
aaa = [4,5,6]