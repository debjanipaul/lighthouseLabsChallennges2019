/*We need to complete a function called smartGarbage(trash, bins), which will be responsible 
for increasing the garbage count for waste, recycling, or compost depending on what trash is 
submitted. Our function will receive two arguments. The first argument, trash, is a string that
l tell our function what type of item is being submitted. The second argument, bins, is an 
object containing three properties (waste, recycling, and compost), which hold some numerical 
value. Our function must increase the correct value in the bins object, and the return the 
newly updated object. */


const smartGarbage = (trash, bins) => {
    if (trash == 'waste') {
        bins.waste = bins.waste + 1;

    } else if (trash == 'recycling') {
        bins.recycling = bins.recycling + 1;

    } else if (trash == 'compost') {
        bins.compost = bins.compost + 1;
    }
    return bins;
}

const bins = {
    waste: 4,
    recycling: 2,
    compost: 5
}
const trash = 'recycling';

smartGarbage(trash, bins);