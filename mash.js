let bannyboys=["Joel", "Jaden", "Said", "Charles", "Kaba", "DiMarcus", "Khalid"];

function lovegenerator(){
let names = Math.random()*bannyboys.length;
let names2 = Math.floor(names);
let finalname= bannyboys[names2];
//console.log(finalname);
return finalname
}
lovegenerator();



let bannygirls=["Savika", "Tenae", "Kiara", "Nia", "Sanaa", "Tay Tay Banks", "Mikaylah"];

function lovegenerator2(){
let names1 = Math.random()*bannygirls.length;
let names3 = Math.floor(names1);
let finalname2= bannygirls[names3];
//console.log(finalname2);
return finalname2
}
lovegenerator2();



let cars=["Jeep", "...SIKE! You walk", "Shopping Cart", "Lambo", "BMW", "Honda Accord", "Nissan"];

function carz(){
    let cars1 = Math.random()*cars.length;
    let cars3 = Math.floor(cars1);
    let finalcars= cars[cars3];
   // console.log(finalcars);
    return finalcars
    }
    carz();



let homes=["box on the street", "townhouse", "mansion", "shelter", "store", "hospital", "condo"];
function homez(){
        let homes1 = Math.random()*homes.length;
        let homes3 = Math.floor(homes1);
        let finalhomes= homes[homes3];
        //console.log(finalhomes);
        return finalhomes
        }
        homez();



function kidz(){
         const decimal = Math.random()
         const times50 = decimal * 50
         const final = Math.floor(times50)
        // console.log(final);
        return final
        }
        kidz();



let salary=["$1,000,000", "$1", "just enough money to survive", "$50,000", "...You wont have any income so $0", "$56.78", "$500,000"];
function moneyz(){
        let money1 = Math.random()*salary.length;
        let money3 = Math.floor(money1);
        let finalmoney= salary[money3];
       // console.log(finalmoney);
        return finalmoney
        }
        moneyz();

        console.log("You will marry " + lovegenerator2() + ", you will drive a " + carz() + ", you will live in a " + homez() + ", you guys will have " + kidz() + " kids, and you will make " +  moneyz() + " a year!"); 
