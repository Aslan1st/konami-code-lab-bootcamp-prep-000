const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var correct = []

document.body.addeventlistener('keydown', function(e){
  do {correct.push(e.which)
  }
  while (init())
})

function init() {
  for (let i = 0; i < correct.length; i++){
   correct[i] === code[i]
  }
}
