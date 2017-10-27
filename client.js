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
    guessWho.guess = 'Who is that?'
    
    guessWho.newPeople = function() {
        people.push({name: guessWho.name, github: guessWho.github});
        console.log('people', people);
    }

    guessWho.picture = function(person) {
        console.log('clicked picture');
        person.show = !person.show;
        guessWho.guess = person.name;

    }


})