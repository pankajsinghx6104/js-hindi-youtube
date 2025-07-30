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



```