/*jshint esversion: 6 */


// Object & Methods -------------------------------

   // dot notation vs bracket notation
      //dot notation is preferable to bracket notation (as a shorthand), there are limits to both
         // It is indirectly said that square bracket notation should be used when property names are to be dynamically determined (aka when the property name is not determined until runtime).
         // Using bracket notation can be very flexible though. If you're doing a for/in loop, you can use bracket notation to loop through every single property in an object without knowing what properties are there beforehand (see example below).
         // Simply put, dot notation is the shorthand version of bracket notation (I read that on here somehwere) and there isn't a benefit to using either or (there might be performance benefits, but I'm assuming they'd be very marginal).
         // The standard practice from what I've seen is to use dot notation as it's easier on the eyes, but in no way does that mean you can't use bracket notation. Choose a coding style that you like and stick to it. Don't go mixing around with dot and bracket notation if you're not using the notation differences to your advantage (e.g. in a for/in loop).
            // ^ above at -->  https://www.codecademy.com/en/forum_questions/5103f9a6b7cd04aaea004dce

         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
         // http://www.dev-archive.net/articles/js-dot-notation/





   var myCoffee = {
      flavor  : 'espresso',
      temp    : 'pipping hot',
      oz      : 100,
      milk    : true,

      reheat  : function() {
         if(this['temp'] === 'cold' || this['temp'] === 'luke warm' ) {
            this['temp'] = 'hot';
            console.log('This cup needs to be warmed up a bit.');

         }
         else if (this.temp === 'pipping hot') {
            this.temp = 'hot';
            console.log('Let the coffee cool down for five minutes.');
         }
         else if (this.temp === 'hot') {
            console.log('Perfect temp. Enjoy your joe!');
         } {

         }
      }
   };

myCoffee['temp'] = 'cold';
// myCoffee.reheat();

myCoffee.temp = 'luke warm';
// myCoffee.reheat();

myCoffee.temp = 'pipping hot';
// myCoffee.reheat();
// myCoffee.reheat();




// Creating Object literals and instances of objects -------------------------------------------


      let ariana = {
         eyeColor  : 'brown',
         hairColor : 'auburn',
         height    : 5.10,
         interests : ['photography', 'hiking', 'biking', 'creativity', 'design'],
         birthday  : '9.7.1993'
      };

      let aaron = {
         eyeColor  : 'blue',
         hairColor : 'sandy brown',
         height    : 5.11,
         interests : ['environment', 'hiking', 'basketball', 'yoga', 'learning'],
         birthday  : '2.28.1994'
      };

      console.log(ariana);
      console.log(aaron);



// Object Constructers (utilizing the 'this' keyword to create instances) ------------------------------------

   // learn about arrow functions & constructors

      // You can't use an arrow function when a dynamic context is required: defining methods, create objects with constructors, get the target from this when handling events.
      // ^ above at: https://rainsoft.io/when-not-to-use-arrow-functions-in-javascript/


      let Friend = function(eyeColor, hairColor, height, interests, birthday)  {
         this.eyeColor  = eyeColor;
         this.hairColor = hairColor;
         this.height    = height;
         this.interests = interests;
         this.birthday  = birthday;
      };

      let kevin = new Friend('black','black', '5.7', ['basketball', 'sports therapy', 'skiing'], '5.2.1990');
      console.log(kevin);


// Object Oriented Programming -----------------------------------------------
/*
   1. Compared to a procedural approach writing code where the engine runs top to bottom according to a list of instructions:

      a) JavaScript (an object Oriented language) where we create objects
      b) the objects themselves then pass code back and forth among each other as needed
      c) in JS there are things, a cat say (objects) - objects are then descibed by:
         i) properties - or characteristics of the object (fluffiness, color, breed, ect)
        ii) methods - or actions that the object can act out (pur, meow, pounce, sleep)

   2. Two ways to create objects in JS

      a) object literals - where we define and create an object at the same time or create an instance of the object
      b) object constructor - where we define a template for an object or an object prototype
         i) from the prototype we can create as many instances as of our object as needed

   3) Three different types of objects in JS

      a) Host Objects - are defined by the environment in which the code is run
         i) a web browser is one such type of environment
            1) the browser has many objects that it defines, such as:
               A) document, window, element, event, node, console, comment
        ii) one downfall of using host objects is that if the code is run outside the specific environment - the code will likely break or not function properly

      b) Core Objects - are defined by and built into the JS language itself
         i) math, array, object, string, date, number
            1) these tend to come with their own properties and methods that is built into the language

      c) Any other Objects - must be defined and created by the individual programmer or that are provided by compatible frameworks like jQuery and AngularJS

*/






// 'this' Keyword and the Global Object ----------------------------------------
      



























// end
