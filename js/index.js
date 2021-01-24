const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards();
window.addEventListener('load', event => {
  let html = '';

  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('turned')
        memoryGame.pickedCards.push(card);
        console.log(memoryGame.pickedCards);
        if (memoryGame.pickedCards.length === 3) {
          console.log(memoryGame.pickedCards[0].innerText)
          if (memoryGame.checkIfPair(memoryGame.pickedCards[0].innerHTML, memoryGame.pickedCards[1].innerHTML)) {
            memoryGame.pickedCards[0].classList.add('blocked')
            memoryGame.pickedCards[1].classList.add('blocked')
            memoryGame.pickedCards[2].classList.remove('turned')
          }
          else {
            memoryGame.pickedCards[0].classList.remove('turned')
            memoryGame.pickedCards[1].classList.remove('turned')
            memoryGame.pickedCards[2].classList.remove('turned')
          }
          
          memoryGame.pickedCards = [];
          if (  memoryGame.isFinished()) {
            console.log('you win')
          }
        }              
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
    });
    

  });



});