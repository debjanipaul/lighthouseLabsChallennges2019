/*We need to go through the survey responses to see what your constituents would like you to 
focus on over the course of your term in office. The array that you are given contains many 
phrases and words pulled from a number of interviews. We only want to focus on the following
 three key phrases: "smart city", "arts funding", and "transportation".

Our termTopics function needs to count how many times each of those topics was mentioned in the 
surveys, and then return an array with the number of mentions in the following order: smart 
city, arts funding, and then transportation. */


const termTopics = (interviews) => {
    // Code here!
    newArr = [0, 0, 0]
    for (var i = 0; i < interviews.length; i++) {
        if (interviews[i] == 'smart city') {
            newArr[0] = newArr[0] + 1
        } else if (interviews[i] == 'arts funding') {
            newArr[1] = newArr[1] + 1
        } else if (interviews[i] == 'transportation') {
            newArr[2] = newArr[2] + 1
        }
    }
    return (newArr);
}

const interviews = [
    'smart city',
    'rebuild the lighthouse',
    'arts funding',
    'transportation',
    'arts funding',
    'rebuild the lighthouse',
    'sports funding',
    'tax cuts',
    'smart city',
    'arts funding',
    'smart city'
]
termTopics(interviews);