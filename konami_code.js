const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var correct = []

document.body.addEventListener('keydown', function(e){

  let index = correct.length - 1

  if (correct[index] === code[index]){
     correct.push(e.which)
   } else if (correct[index] != code[index]) {
     correct = []
} 
if (correct[index] === code[index]){
console.log('You did it!')
  }
})
