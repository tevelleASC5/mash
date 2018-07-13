

////////////////            1          ///////////////////
let homes = ["Mansion", "Apartment", "Shack", "House", "box on the street", process.argv[2]];
function getHome(somehomes){
    let homes2 = Math.random()*somehomes.length;
    let homes3 = Math.floor(homes2);
    let homes4 = somehomes[homes3];
    console.log(process.argv[2]);
    return homes4;
}
getHome(homes);

/////////////////             2             /////////////////
function getChildrenCount(){
        const decimal = Math.random()
        const times100 = decimal * 100
        const five = times100 * .50
        const final = Math.floor(five);
        if(Math.random() > 0.5){
            return process.argv[3];
        }else{
        return final;
        }
}

getChildrenCount();

///////////////////////        3         ///////////////////


///////////////////////        4          /////////////////////
let cars = ["Jeep", "Nissan", "...SIKE!! You walk bro", "car owned by your mom", "church van", process.argv[2]];
function getCar(somecars){
    let cars2 = Math.random()*somecars.length;
    let cars3 = Math.floor(cars2);
    let cars4 = somecars[cars3];
    console.log(process.argv[3]);
    return cars4;
    }
getHome(cars);



function mash(){
    console.log("You will live in a " + getHome(homes) + " , and you will have " + getChildrenCount() + " kids!, and you will drive a " + getCar(cars));
}
mash();