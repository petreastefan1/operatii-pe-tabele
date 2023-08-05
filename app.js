
//selectors

let containerCars=document.querySelector("#container-cars");
let container = document.querySelector(".container");

let nameInpt = document.getElementById('name-inpt');

let modelInpt = document.getElementById('model-inpt');

let yearInpt = document.getElementById('year-inpt');



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


//logic


attachRows();

