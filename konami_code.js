const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var correct = []

document.body.addEventListener('keydown', function(e)){
  correct.push(e.which)
  init()
}

function init(){

  let index = correct.length - 1

if (correct[index] != code[index]) {
     correct = [];
}
if ((code.length == correct.length) && code.every(function(element, index) {
    return element === correct[index];
}))
{
console.log('You did it!')
correct = []
  }
}
