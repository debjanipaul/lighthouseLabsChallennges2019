/*Complete the function chooseStations(stations) that takes in an array of possible voting 
stations, and then only returns the names of the stations that are appropriate.

Your function will receive an array of stations, where each station itself is an array with a 
name, a capacity, and a venue type.

In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a 
school or community centre. */


const chooseStations = (stations) => {
    // Code here!
    let newStations = [];
    for (var i = 0; i < stations.length; i++) {

        if (stations[i][1] >= 20 && (stations[i][2] == 'school' || stations[i][2] == 'community centre')) {
            newStations.push(stations[i][0]);
        }
    }
    return newStations;
    // Remember to return a value!
}

const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);