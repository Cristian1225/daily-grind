/*

    Here are the items we believe we need to produce for each day's coffee

    pic - image src
    alt - the alt tag for the image
    color - color to match image
    desc - description of coffee
    name - name of the coffee
    day - the day of the week

*/

function coffeeTemplate(coffee){


return  `<p>
        <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`

  ;

}
let myDate = new Date();

let coffee = "";

let today = myDate.getDay();

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


//today = 3;

if(urlParams.has("day")){//from querystring
  today = urlParams.get("day");
}

today = parseInt(today);

//console,log(today);

switch(today){

    case 1:
        today = "Monday";
        coffee = {
          name:"Bubble Tea",
          color: "pink",
          pic: "images/bubble-tea.jpg",
          alt: "A picture of a bubble tea",
          day: "Monday",
          desc: `I like me some bubble tea!`
        };


      break;

      case 2:
        today = "Tuesday";
        coffee = {
          name:"Drip",
          color: "black",
          pic: "images/drip.jpg",
          alt: "A picture of a drip coffee",
          day: "Tuesday",
          desc:`Give it to me Straight!`
        };


    break;

    case 3:
        today = "Wednesday";
        coffee = {
          name:"cold brew",
          color: "gray",
          pic: "images/cold-brew.jpg",
          alt: "A picture of a cold coffee",
          day: "Wednesday",
          desc:`I like it cold!`
        }
        break;

        case 4:
          today = "Thursday";
          coffee = {
            name:"mocha",
            color: "skyblue",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha coffee",
            day: "Thursday",
            desc:`Cozy Wozy!`
          }

          break;

          case 5:
        today = "Friday";
        coffee = {
          name:"Frappaccino",
          color: "purple",
          pic: "images/Frappaccino.jpg",
          alt: "A picture of a slushy coffee",
          day: "Wednesday",
          desc:`Cooler Crispy!`
        }
        break;

        case 6:
        today = "Saturday";
        coffee = {
          name:"Pumkin Spice Latte",
          color: "orange",
          pic: "images/pumpkin-spice-latte.jpg",
          alt: "A picture of a pumpkin latte coffee",
          day: "Saturday",
          desc:`Fallen Leaves!`
        }
        break;

        case 7:
        today = "Sunday";
        coffee = {
          name:"Caramel Latte",
          color: "khaki",
          pic: "images/caramel-latte.jpg",
          alt: "A picture of a sweet flavory caramel coffee",
          day: "Wednesday",
          desc:`Richie Rich!`
        }
        break;

      default:
          today = "Not sure what day it is!";
        alert("falling into alert!");

}

//alert(coffeeTemplate(coffee));

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color

//alert(today);
console.log(coffee);