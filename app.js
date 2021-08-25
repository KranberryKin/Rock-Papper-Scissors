//Variables
let con = ''
//Elements
const GAME_CON_ELEMENT = document.getElementById('choiceMade')



function getNpcChoice() {
  let num = Math.floor(Math.random() * 10)
  switch (num) {
    case 0:
    case 1:
    case 2:
    case 3:
      return 'Rock'
    case 4:
    case 5:
    case 6:
      return 'Papper'
    case 7:
    case 8:
    case 9:
      return 'Scissors'
  }
}

function pickRock() {
  let x = getNpcChoice();
  switch (x) {
    case 'Rock':
      con = 'Tie';
      break;
    case 'Papper':
      con = 'Lose';
      break;
    case 'Scissors':
      con = 'Win';
      break;
  }
  drawNpcChoice(con)
}

function pickPapper() {
  let x = getNpcChoice();
  switch (x) {
    case 'Rock':
      con = 'Win';
      break;
    case 'Papper':
      con = 'Tie';
      break;
    case 'Scissors':
      con = 'Lose';
      break;
  }
  drawNpcChoice(con)
}

function pickScissors() {
  let x = getNpcChoice();
  switch (x) {
    case 'Rock':
      con = 'Lose';
      break;
    case 'Papper':
      con = 'Win';
      break;
    case 'Scissors':
      con = 'Tie';
      break;
  }
  drawNpcChoice(con)
}

function drawNpcChoice(con){
let template = " ";
if(con == 'Win'){
  template = /*HTML*/`
  <div class="text-center justify-content-center">
  <img src="https://images.8tracks.com/cover/i/001/132/573/68696.original-6467.jpg?rect=0,0,400,400&q=98&fm=jpg&fit=max" alt="">
  <h6 class="pt-3">You Win!</h6>
  </div>
  `
}
if(con == 'Tie'){
  template = /*HTML*/`
  <div class="text-center justify-content-center">
  <img src="https://partycity5.scene7.com/is/image/PartyCity/762828?wid=400" alt="">
  <h6 class="pt-3">It's a Tie.</h6>
  </div>
  `
}
if(con == 'Lose'){
  template = /*HTML*/`
  <div class="text-center justify-content-center">
  <img src="https://memegenerator.net/img/instances/53286795/hahah-you-lose.jpg" alt="">
  <h6 class="pt-3">You Lost!</h6>
  </div>
  `
}
GAME_CON_ELEMENT.innerHTML = template
}
