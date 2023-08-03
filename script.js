let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.querySelector("#main-title").textContent = "DOM TORETTO";

  // Part 2
  this.body.style.backgroundColor = "green"

  // Part 3
  const favoriteLi = document.getElementById("favorite-things");
  const last = favoriteLi.lastElementChild
  favoriteLi.removeChild(last);
  // Part 4
  const sTel=document.querySelectorAll(".special-title")
  sTel.forEach(element => {
  element.style.fontSize = '2rem'
});
  // Part 5
  const prLi = document.getElementById("past-races")
const races = prLi.children
for(let i=0; i<races.length; i++){
  if(races[i].textContent === 'Chicago'){
    prLi.removeChild(races[i]);
  }
}
  // Part 6
const newList = document.createElement("li")
newList.innerHTML = 'Freetown'
document.getElementById('past-races').appendChild(newList)

  
  // Part 7 //couldnt get it to make a new div and put text inside
  const cityDiv = document.createElement('div')
  cityDiv.classList.add('.blog-post')
  const cityH2 = document.createElement('h2')
  cityH2.innerText = "Freetowm"
  const cityBody= document.createElement('p')
  cityBody.innerText = 'Doing something unrealistic'
const Blog = document.querySelector('.blog-post')
 

  Blog.appendChild(cityDiv);
  cityDiv.appendChild(cityH2)
  cityDiv.appendChild(cityBody)


 
  // Part 8
  const randomQuoteEvt = function() {
   const rQ = document.querySelector('#quote-title');
    rQ.addEventListener('click', function(){
      randomQuote();
    })
  };
  randomQuoteEvt(); //call func outside like top

  // Part 9

const BlogFlipper = document.querySelectorAll(".blog-post")

BlogFlipper.forEach((blogged)=> {
  blogged.addEventListener('mouseout', ()=>{
    blogged.classList.remove('red')
    blogged.classList.add('purple')
  })
  blogged.addEventListener('mouseenter', ()=>{
    blogged.classList.remove('purple')
    blogged.classList.toggle('red') 
  });
});



});
