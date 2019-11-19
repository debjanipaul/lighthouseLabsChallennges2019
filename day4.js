/* Complete the function registerToVote(name, unregisteredVoters) that takes in the name 
of a newly registered voter and an array of names of those who have not yet registered to vote. 
function must return an array, with the newly registered voter's name removed.*/

const registerToVote = (name, unregisteredVoters) => {
    // Code here!
    let indVoters = unregisteredVoters.indexOf(name);

    unregisteredVoters.splice(indVoters, 1);

    return unregisteredVoters

    // Remember to return a value!
}

const name = 'Bradley';
const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];
registerToVote(name, unregisteredVoters);