/*
Our first function, bestOdds(), will receive two parameters. The first parameter will be an 
array of strings that are either red, green, or blue, representing the tickets that a 
particular person has. The second parameter is an object that shows how many entries there 
currently are for each raffle. By looking at the tickets that the particular person has, your
 function should return a string that lets the person know which raffle they have the highest 
 chance of winning. The format of the response should be as follows (without the square brackets): 
 "You have the best odds of winning the [COLOUR] raffle."

While we could do this all within the bestOdds() function, we want to keep our code DRY, 
so we will also need to complete a helper function. This helper function countTickets() 
will be called from within bestOdds() and receive the array of strings that are either red, 
green, or blue. The function will count how many of each string there are, and then return an 
object with the individual counts.
*/

const countTickets = (tickets) => {

    let tickObj = {
        'red': 0,
        'green': 0,
        'blue': 0
    };


    for (var i = 0; i < tickets.length; i++) {

        if (tickets[i] === 'red') {
            tickObj.red += 1;
        } else if (tickets[i] === 'green') {
            tickObj.green += 1;
        } else if (tickets[i] === 'blue') {
            tickObj.blue += 1;
        }

    }
    return tickObj;

}

const bestOdds = (tickets, raffleEntries) => {
    countTickets(tickets);
    let newArr = [];

    for (var i in raffleEntries) {
        newArr.push(raffleEntries[i]);
    }

    newArr.sort(function(a, b) {
        return a - b
    });

    for (var j in raffleEntries) {
        if (raffleEntries[j] === newArr[0]) {
            return (`You have the best odds of winning the ${j} raffle.`)
        }
    }
}

// for bestOdds() function
const tickets = [
    'red',
    'red',
    'green',
    'blue',
    'green'
]

const raffleEntries = {
    red: 10,
    green: 30,
    blue: 15
}

countTickets(tickets);