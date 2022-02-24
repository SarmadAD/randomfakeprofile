import './style.css'
import Chance from "chance"; 

const chance = new Chance();
const name = chance.name();
document.querySelector('#app').innerHTML = `
<img src="${chance.avatar()}" class="avater"; style=border-color:${chance.color()}  />
  <h1>${name}</h1>
  <p>${chance.email()}</p>
  <p>${chance.phone()}</p>
  <div class="text">
    <p>Hi, my name is ${name} and I am a ${chance.profession()}. I was born in the year of ${chance.year({max:2022, min:1800})} in the city of ${chance.city()}.
      My favorite animal is the ${chance.animal()}. But I also love numbers! My favorite number is ${chance.integer({min:0, max:1000})}
    </p>
  </div>
`
