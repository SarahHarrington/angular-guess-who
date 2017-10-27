var myApp = angular.module('myApp', []);

myApp.controller('guessWhoController', function(){
    var guessWho = this;
    var people = [
            {name: 'Sarah', github: 'SarahHarrington', show: false}, 
            {name: 'Chris', github: 'christopher-black', show: false},
            {name: 'Kris', github: 'kdszafranski', show: false},
            {name: 'Zack', github: 'zackstout', show: false },
            {name: 'Josh', github: 'joshnothum', show: false},
            {name: 'Marta', github: 'martajopp', show: false}
    ];
    
    guessWho.people = people;
    guessWho.guess = 'Who is that?' //default value that is replaced when the function below runs
    
    //pushes what is put in the inputs in HTML to the people array
    guessWho.newPeople = function() {
        people.push({name: guessWho.name, github: guessWho.github, show: false});
    }

    //shows the persons name on the top of the page if the image is clicked
    guessWho.picture = function(person) {
        person.show = !person.show; //changes the person.show from false/true
        guessWho.guess = person.name; //guessWho.guess is the expression that person.name goes to for display

    }
})