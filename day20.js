/*

Each shape has a different calculation for determining volume, so we'll need to create a few functions that will help us figure out the volume of the various inflatable attractions.

In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

sphereVolume()will calculate the volume of a sphere given a radius
coneVolume() will calculate the volume of a cone given a radius and a height
prismVolume() will calculate the volume of a prism given a height, a width, and a depth

The fourth function, totalVolume(), will receive an array containing the different shapes that 
make up a single attraction. The totalVolume function should use the previous three functions 
to calculate the total volume of an attraction.
*/


// Use the value below whenever you need the value of Pi

const PI = 3.14159

const sphereVolume = function(radius) {
    var vol = (4 / 3) * PI * radius * radius * radius;
    return vol;
}

const coneVolume = function(radius, height) {
    var vol = PI * radius * radius * (height / 3);
    return vol;
}

const prismVolume = function(height, width, depth) {
    var vol = depth * width * height;
    return vol;
}

const totalVolume = function(solids) {
    let tVol = 0;
    let sVol = 0;
    let cVol = 0;
    let pVol = 0;

    for (var i in solids) {

        if (solids[i].type === 'sphere') {
            sVol += sphereVolume(solids[i].radius);
        } else if (solids[i].type === 'cone') {
            cVol += coneVolume(solids[i].radius, solids[i].height);
        } else if (solids[i].type === 'prism') {
            pVol += prismVolume(solids[i].height, solids[i].width, solids[i].depth);
        }
    }
    tVol = sVol + cVol + pVol;
    return tVol;
}


const largeSphere = {
    type: 'sphere',
    radius: 40
}

const smallSphere = {
    type: 'sphere',
    radius: 10
}

const cone = {
    type: 'cone',
    radius: 3,
    height: 5
}

const duck = [
    largeSphere,
    smallSphere,
    cone
]

totalVolume(duck)