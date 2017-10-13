const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var correct = []

document.body.addeventlistener('keydown', function(e){
  do {correct.push(e.which)
  }
  while (init())
})

function init() {

  while (correct.length < code.length){
    let i = 0
    
    if (code[i] === correct[i]){

    for (i; i < correct.length; i++){

      code[i] === correct[i]
  }
  conosole.log('You did it!')
}  else
  false
}
}
