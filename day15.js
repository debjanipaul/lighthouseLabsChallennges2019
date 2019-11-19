/* For this challenge you'll have to implement a function called finalPosition(), 
which will calculate the position of the parade based on an array of directional moves. 
The parade will move on an X-Y grid. Your function will receive an array of moves, which are 
strings that say either north, south, west, or east, these represent the parade moving in a 
particular direction by a single space on the grid. By looking at the path that the parade
 moves in, your function should calculate and then return an array representing the position 
 of the parade after completing all of the moves. The first element of the array should be 
 the X position, and the second element of the array should be the Y position. The parade 
 begins at [0,0].
 */


const finalPosition = (moves) => {
    var newArr = [0, 0]

    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === 'north') {
            newArr[1] = newArr[1] + 1;
        } else if (moves[i] === 'south') {
            newArr[1] = newArr[1] - 1;
        } else if (moves[i] === 'east') {
            newArr[0] = newArr[0] + 1;
        } else if (moves[i] === 'west') {
            newArr[0] = newArr[0] - 1;
        }
    }
    return newArr;
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']
finalPosition(moves);