const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var correct = []

document.body.addEventListener('keydown', function(e){
init(e)
if (correct === code){
console.log('You did it!')
}
  })

function init() {
let index = correct.length - 1
 if (correct[index] === code[index]){
   correct.push(e.which)
 } else correct = []
}
