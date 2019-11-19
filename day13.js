/* We will be implementing this using three functions.

The first two functions will receive an array of objects that represent street lights which may
 be on or off.

Our first function, lightsOn, must set all of the lights to on and then return the array of 
lights.
The second function, lightsOff, must set all the lights to "off" and then return the array of 
lights.
The third function, toggleLights, will receive an array of many street lights, as well as a
 boolean value lightsAreOn which tells you whether or not all the lights are currently on. If 
 lightsAreOn is true, your function should turn all of the lights off. If lightsAreOn is false,
  your function should turn all of the lights on. */

const lightsOn = function(lights) {
    for (var item in lights) {

        if (lights[item].on === false) {
            lights[item].on = true;
        }
    }
    return (lights)
}

const lightsOff = function(lights) {
    for (var item in lights) {

        if (lights[item].on === true) {
            lights[item].on = false;
        }
    }
    return (lights)
}

const toggleLights = function(lights, lightsAreOn) {
    if (lightsAreOn === true) {
        lightsOff(lights);
    } else {
        lightsOn(lights);
    }
    return lights
}

const lights = [{
        id: 1,
        on: true
    },
    {
        id: 2,
        on: true
    },
    {
        id: 3,
        on: true
    },
    {
        id: 4,
        on: true
    },
    {
        id: 5,
        on: true
    }
]

lightsOn(lights);