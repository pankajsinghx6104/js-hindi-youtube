# Projects related to Dom

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-idxj5ee2?file=index.html) 

# Solution code

## project 1 solution

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")


buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    // body.style.backgroundColor = e.target.id;


  })

})


```
## project 2 solution

```javascript
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results');
  const weightguide = document.querySelector('#weight-guide'); 
  

 if(height === '' || height < 0 || isNaN(height)){
   results.innerHTML = `Please give a valid height ${height}`
 } else if(weight === '' || weight < 0 || isNaN(weight)){
  results.innerHTML = `Please give a valid weight ${weight}`
 } else{
   const bmi = (weight/((height*height)/10000)).toFixed(2);
   // show result
   //results.innerHTML= `<span>${bmi}</span>`;
  //  results.appendChild(document.createTextNode(bmi))
 
  //  if(bmi < 18.6){
  //   weightguide.appendChild(document.createTextNode(`Under Weight`))
  //   }else if (bmi >= 18.6 && bmi <= 24.9){
  //     weightguide.appendChild(document.createTextNode(`Normal Weight`))
  //   } else{
  //     weightguide.appendChild(document.createTextNode(`Over-Weight`))
  //   }
  let category = '';
    if (bmi < 18.6) {
      category = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = 'Normal Weight';
    } else {
      category = 'Overweight';
    }
    results.appendChild(document.createTextNode(`Your BMI is ${bmi} and you are ${category}`));
    weightguide.appendChild(document.createTextNode(`You are ${category}`));
  }


 })


```

## project 3 solution 

```javascript
const clock = document.getElementById('clock');

setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
},1000);

```

## project 4 solution 

```javascript
let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess)
  })
}




function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please Enter a valid Number')
  }else if (guess < 1) {
    alert('Please Enter a Number More than 1')
  }else if (guess > 100) {
    alert('Please Enter a Number less than 100')
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random Number was ${randomNumber}`)
      endGame()
    }else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it Right`)
    endGame()
  }else if (guess< randomNumber){
    displayMessage(`Number is Tooo low`)
  }else if (guess> randomNumber){
    displayMessage(`Number is Tooo High`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.innerHTML = `<h2 id = "newGame"> Start New Game </h2>`
  startOver.appendChild(p)
  playGame = false
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function (e){
    randomNumber = parseInt(Math.random()*100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true

  })
}


```

## project 5 solution


```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown',function(e){
  insert.innerHTML = ` <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th> 
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td> 
    <td>${e.code}</td>
  </tr>
  
</table>
  </div>`
});


```

## project 6 solution


```javascript
// generate random colour

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

//console.log(randomColor());
let intervalid;
const startChangingColor = function () {
  // setInterval(function(){document.body.style.backgroundColor = randomColor()},1000) this is also we can write

 if(!intervalid) { intervalid = setInterval(changeByColor, 1000);}

  function changeByColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalid);
  intervalid = null;
};
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);



```