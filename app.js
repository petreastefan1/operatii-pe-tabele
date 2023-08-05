
//selectors

let containerCars=document.querySelector("#container-cars");
let container = document.querySelector(".container");

let nameInpt = document.getElementById('name-inpt');

let modelInpt = document.getElementById('model-inpt');

let yearInpt = document.getElementById('year-inpt');

let addBtn = document.getElementById('btn-add-car');

// let removeBtn = document.getElementById('btn-remove-car');


//functions

function createRow(cars) {

    let text = `
<tr>
 <td>
    <a href="book_detail.html">${cars.car}</a> </td>
    <td>${cars.model}</td>
    <td>${cars.year}</td>
</tr> 
    
    `
    return text;
}


function createRows(arr){


    let all="";

    for(let i=0;i<arr.length;i++){

        all+=createRow(arr[i])+"\n";
    }

    return all;
}

function createRows(arr){


	let all="";

	for(let i=0;i<arr.length;i++){

		all+=createRow(arr[i])+"\n";
	}

	return all;
}

function attachRows(){
    containerCars.innerHTML=createRows(cars);

}


//todo:validator modle : ce: 1)-unicitare  2)-required 3)min-lenght sa fie 3


function validateModel(model){


   
    if(findCarByModel(model)!==null){

        return  false;
    }

    if(model.length<5){

        return false;
    }

    return true;
}


//todo:find car by model

function findCarByModel(model){

    

    for(let i=0;i<cars.length;i++){

         if(cars[i].model==model){

            return cars[i];
         }
    }

    return null;
}


//logic


attachRows();

addBtn.addEventListener("click",()=>{


    let newCar = {
        car: nameInpt.value,
        model: modelInpt.value,
        year: yearInpt.value
    }
    cars.push(newCar);


    attachRows();
    findCarByMode();
    validateModel();

})

// removeBtn.addEventListener("click",()=>{

//     cars.pop()
// })

