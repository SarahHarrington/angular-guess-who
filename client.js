var myApp = angular.module('myApp', []);

myApp.controller('guessWhoController', function(){
    var guessWho = this;
    var people = [
            {name: 'Sarah', github: 'SarahHarrington'}, 
            {name: 'Chris', github: 'christopher-black'},
            {name: 'Kris', github: 'kdszafranski'}
    ];
    guessWho.people = people;

    console.log('people', people);
    
    guessWho.newPeople = function() {
        people.push({name: guessWho.name, github: guessWho.github});
        console.log('people', people);
        
    }
})