/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding binds
* 2.
* 3.
* 4.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
windowBindLog = function(){
  console.log(this)
};

windowBindLog();


// Principle 2
// code example for Implicit Binding
houstonSportsTeams = {
  basketball: "Rockets",
  baseball: "Astros",
  soccer: "Dynamos",
  basketballTeam: function(){
    return `The basketball team for the city of Houston is the ${this.basketball}!`
  }
};

console.log(houstonSportsTeams.basketballTeam())


// Principle 3
// code example for New Binding
function NbaTeams(info){
  this.name = info.name;
  this.city = info.city;
}

raptors = new NbaTeams({
  name: "Raptors",
  city: "Toronto"
})

console.log(raptors)


// Principle 4
// code example for Explicit Binding
