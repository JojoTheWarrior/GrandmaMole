import logo from './logo.svg';
import './App.css';
import Navbar from  './components/Navbar.js'
import Body from './components/Body.js'
import Checklist from './components/Checklist.js'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import lukasMeasuring from "./assets/lukasMeasuring.jpeg";
import lukasButter from "./assets/lukasButter.jpeg";
import lukasSmile from "./assets/lukasSmile.jpeg";
import seanSugar from "./assets/seanSugar.jpeg";
import joshButter from "./assets/joshButter.jpeg";
import seanAndJoshMixing from "./assets/seanAndJoshMixing.jpeg";
import mixingHard from "./assets/mixingHard.jpeg";
import mixedDough from "./assets/mixedDough.jpeg";
import mixedDoughBirdseye from "./assets/mixedDoughBirdseye.jpeg";
import prepOven from "./assets/prepOven.jpeg";
import seanFlattening from "./assets/seanFlattening.jpeg";
import doughBalls from "./assets/doughBalls.jpeg";
import joshFirstBatch from "./assets/joshFirstBatch.jpeg";
import joshEating from "./assets/joshEating.jpeg";


function App() {
  // for the carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const items = [
    {id: 1, img: lukasMeasuring, caption: "Lukas measuring butter stick."},
    {id: 2, img: lukasButter, caption: "Lukas carefully cutting butter."},
    {id: 3, img: lukasSmile, caption: "Lukas grinning while Sean measures oats."},
    {id: 4, img: seanSugar, caption: "Sean's measured sugar."},
    {id: 5, img: joshButter, caption: "Josh melting butter."},
    {id: 6, img: seanAndJoshMixing, caption: "Sean and Josh mixing ingredients."},
    {id: 7, img: mixingHard, caption: "Lukas mixing ingredients vigorously."},
    {id: 8, img: mixedDough, caption: "Completed dough mixture."},
    {id: 9, img: mixedDoughBirdseye, caption: "Completed dough mixture (from above)."},
    {id: 10, img: prepOven, caption: "Dough balls prepared for the oven."},
    {id: 11, img: seanFlattening, caption: "Sean flattening dough with a fork."},
    {id: 12, img: doughBalls, caption: "Lukas holding the extra dough balls."},
    {id: 13, img: joshFirstBatch, caption: "Josh posing with the first batch."},
    {id: 14, img: joshEating, caption: "Delicious cookies."},
]  

  return (
    <>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Permanent+Marker&display=swap" rel="stylesheet"></link>
      </head>
      <Navbar/>
      <div className="bg-repeat bg-center p-4" style={{backgroundImage: "url('https://creativesilhouettes.ca/wp-content/uploads/2021/09/botanical-floral_pattern.jpg')"}}>
        <Body title={"About Me"} jumpTo={"aboutMe"} text={
          <>
            Grandma Mole loves baking cookies for her grandkids. Starting from her childhood, she spent many hours in the kitchen each day baking with her own grandmother.
            Eventually, the cookie recipes were passed onto her.
            <br/><br/>
            Serving as a combat medic in Mole War II, she baked and fed her soldiers cookies throughout the war but had to stop after they kept hounding her for more.
            Her disarmingly delicious oatmeal cookies warmed the hearts of soldiers, and now she's sharing her recipe for the world to enjoy.
          </>
        }/>
        <Body title={"Ingredients"} jumpTo={"ingredients"} text={
          <>
            <Checklist/>
          </>
        }></Body>
        <Body title={"Recipe"} jumpTo={"recipe"} text={
          <>
            <b><h2>Step 1:</h2></b>
            <p>Preheat the oven to 375°F.</p>
            <br/>

            <b><h2>Step 2:</h2></b>
            <p>Add your butter to a medium bowl and microwave it for 30 seconds until it’s all creamy and beautiful!</p>
            <br/>

            <b><h2>Step 3:</h2></b>
            <p>Mix the sugars into the butter - add 1 cup of white sugar and 1 cup of brown sugar to the bowl with butter. Then, give it a good stir until it becomes one smooth mixture.</p>
            <br/>

            <b><h2>Step 4:</h2></b>
            <p>Add the eggs and vanilla - beat in 2 eggs, one at a time, to the creamy mix. Then, stir in 1 teaspoon of vanilla extract.</p>
            <br/>

            <b><h2>Step 5:</h2></b>
            <p>Prepare the dry ingredients - in another bowl, combine 2 cups of all-purpose flour, 1 teaspoon of baking soda, 1/2 teaspoons of salt, and 1 teaspoon of cinnamon powder. Stir it all together, then gradually mix it into the creamy mixture.</p>
            <br/>

            <b><h2>Step 6:</h2></b>
            <p>Slowly mix 3 cups of oat flakes into the mixture. These oats will give our cookies that wonderful chewy texture and make the mixture more firm.</p>
            <br/>

            <b><h2>Step 7:</h2></b>
            <p>Chill the dough – let the dough rest in the fridge for about an hour. The more the dough chills, the less it will spread when baking.</p>
            <br/>

            <b><h2>Step 8:</h2></b>
            <p>Place rolled balls of dough onto a cookie sheet, then use a large fork dipped in sugar to gently flatten each one. A little sugar on top gives them a lovely sparkle!</p>
            <br/>

            <b><h2>Step 9:</h2></b>
            <p>Bake the cookies – pop them into the preheated oven at 375°F and bake for 8 to 10 minutes.</p>
            <br/>

            <b><h2>Step 10:</h2></b>
            <p>Let the cookies cool for 5 minutes on the tray, then transfer them to a rack. This makes the outer crust crispy while keeping the inside soft and chewy.</p>
            <br/>

            <b><h2>Step 11:</h2></b>
            <p>Enjoy! Once the cookies are cool, gather your friends or loved ones and dig in!</p>
            <br/>
          </>
        }></Body>

        <Body title={"Gallery"} jumpTo={"gallery"} text={
          <>
            <p>Pictures of my grandkids (Sean, Lukas, and Josh) baking and eating the oatmeal cookies from this recipe:</p>
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
              {
                items.map((item) => (
                  <div key={item.id} className="carousel-item flex flex-col justify-center items-center p-4 h-full">
                    <img src={item.img} className="p-1 carousel-image bg-accent3 rounded-xl"/>
                    <p className="carousel-caption">{item.caption}</p>
                  </div>
                ))
              }
            </Carousel>
          </>
        }>
        </Body>
      </div>
    </>
  );
}

export default App;