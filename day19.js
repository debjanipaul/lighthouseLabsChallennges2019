/*
Each item differs in both cost and the grams of pumpkin spice per serving. To help 
festival-goers maximize their pumpkin spice consumption, help them determine the maximum amount 
of pumpkin spice they can ingest with the amount of money they are bringing to the festival.

A slice of pumpkin pie costs $5 each, and include a whopping 30g of pumpkin spice
Pumpkin spice lattes cost $3 each, and include 15g of pumpkin spice
Pumpkin spice macarons cost $1 each, and include 3g of pumpkin spice

We need to write a function, pumpkinSpice(money) that will take in a number, or how much the 
festival-goer has to spend on treats, and return an array with the 4 elements as outlined 
below:

The first element should represent how many slices of pumpkin pie the client can buy
The second element should represent how many pumpkin spice lattes the client can buy
The third element should represent how many pumpkin spice macarons the client can buy
The fourth element should represent how many grams of pumpkin spice the client will be buying

Our function should start by calculating how many slices of pumpkin pie we can buy. Then, 
we'll want to use the remaining money to do the calculations for the lattes, followed lastly
by the macarons.
*/

const pumpkinSpice = money => {
    var newArr = [0, 0, 0, 0];

    var pumpPie = money - 5;
    var noPumpPie = Math.floor(money / 5);
    newArr[0] = noPumpPie;

    var pumpLattes = money - (noPumpPie * 5);
    var noPumpLattes = Math.floor(pumpLattes / 3);
    newArr[1] = noPumpLattes;

    var pumpMacaron = money - (noPumpPie * 5) - (noPumpLattes * 3);
    var noPumpMacaron = Math.floor(pumpMacaron / 1);
    newArr[2] = noPumpMacaron;

    var spiceGram = (noPumpPie * 30) + (noPumpLattes * 15) + (noPumpMacaron * 3);
    newArr[3] = spiceGram;

    return (newArr);
}

const money = 9
pumpkinSpice(money);