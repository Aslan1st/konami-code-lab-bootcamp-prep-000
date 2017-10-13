const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var correct = []

function dotoE(Anything){
  anything(e)
}

document.body.addEventListener('keydown', function(e){

  let index = correct.length - 1
   if (correct[index] === code[index]){
     correct.push(e.which)
   } else correct = []

if (correct === code){
console.log('You did it!')
  }
})
