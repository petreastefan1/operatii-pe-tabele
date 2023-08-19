
//selectors

let containerCars=document.querySelector("#container-cars");
let container = document.querySelector(".container");

let nameInpt = document.getElementById('name-inpt');

let modelInpt = document.getElementById('model-inpt');

let yearInpt = document.getElementById('year-inpt');

let addBtn = document.getElementById('btn-add-car');

let removeBtn = document.getElementById('btn-remove-car');

let saveBtnText = `<i class="fa-solid fa-floppy-disk"></i>`
                

//functions

function createRow(cars) {

    let text = `
<tr>
 <td>
    <a >${cars.company}</a> </td>
    <td>${cars.model}</td>
    <td>${cars.year}</td>
    <td>
        <button class="btn-edit ${cars.company}">
           <i class="fa-solid fa-pen-to-square  btn-edit ${cars.company}"></i>
        </button>    
        <button  class="btn-delete ${cars.company}">  
           <i class="fa-solid fa-trash  btn-delete ${cars.company}"></i>
        </button>

        <button  class="btn-save ${cars.company}">  
        <i class="fa-solid fa-floppy-disk  btn-save ${cars.company}"></i>
        </button>
       

        
    </td>
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



function attachRows(){
    containerCars.innerHTML=createRows(cars);
}

function deleteCar(company){
   
    let aux=[];


    for(let i=0;i<cars.length;i++){

        if(cars[i].company!=company){

            aux.push(cars[i]);
        }
    }


    cars=aux;

}

//todo:validator model : ce: 1)-unicitare  2)-required 3)min-lenght sa fie 3

function validateModel(model){


   
    if(findCarByModel(model)!==null){
        return  {

            msg:"modelul exista deja",
            valid:false
        };
    }

    if(model.length<3){

        return{

            msg:"modelul nu are lungimea necesara!",
            valid:false
        };
    }

    return{

        msg:"Model valid",
        valid:true
    };
}
//validator car EU

function validateCompany(company){
    if(findCarByName(company)!==null){
        return  {

            msg:"numele companiei exista deja",
            valid:false
        };
    }

    if(company.length<3){

        return  {
            msg:"numele companiei nu are lungimea necesara!",
            valid:false
        };
    }

    if(findNumberInString(company) == true){
        return{
            msg:"Numele companiei nu trebuie sa contina numere",
            valid:false
        }
    }
  

    if(company.length >10){
        return{
            msg:"numele companiei este prea lung!",
            valid:false
        };
    }

    if(company == company.toLowerCase()){
        return{
            msg:"Compania nu are litera mare!",
            valid:false
        };
    }


    if(findCarByModel(company)){
        return{
            msg:"Compania exista in model!",
            valid:false
        }
    }


    return{

        msg:"Model valid",
        valid:true
    };

}

function validateYear(year){

    if(year.length < 4){
        return{   
        msg:"An invalid",
        valid:false
        };
    }

    if(year.length >= 5){
        return{   
        msg:"An invalid",
        valid:false
        };
    }

    if(isNaN(year)){
        return{
            msg:"anul trebuie sa contina cifre",
            valid:false
        }
    }

    return{
        msg:"An valid",
        valid:true
    };
}
//CRUD -create read update delete 



//find car by Name EU
function findCarByName(company){

    for(let i=0;i<cars.length;i++){
        if(cars[i].company==company){
            return cars[i]
        }
    }
    return null
}  



//findPositionCarByName

function findPositionCarByName(company){
    for(let i=0;i<cars.length;i++){
        if(cars[i].company==company){
            return i;
        }
    }

    return -1;
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

//todo:

function findNumberInString(company){
    for(let i=0;i<company.length;i++){
        if(isDigit(company[i])){
           
             return true
        }
    }

    return false;
}


function isDigit(character){

    return /^[0-9]$/.test(character);
}


//logic


attachRows();

addBtn.addEventListener("click",()=>{

    let validareModel=validateModel(modelInpt.value);

    let validareCompany=validateCompany(nameInpt.value);

    let validareYear = validateYear(yearInpt.value);

     if(validareModel.valid==false){

         alert(validareModel.msg);

     }

     if(validareCompany.valid==false){

        alert(validareCompany.msg);

     }

     if(validareYear.valid==false){
        alert(validareYear.msg);
    };

     if(validareModel.valid && validareCompany.valid && validareModel.valid){
        let newCar = {
            company: nameInpt.value,
            model: modelInpt.value,
            year: yearInpt.value
        }
        cars.push(newCar);
        attachRows();


        alert("succes")
     }   

})



// removeBtn.addEventListener("click",()=>{

//     cars.pop()
// })



containerCars.addEventListener("click",(e)=>{
    let obj=e.target;
    let classes=obj.classList;

    
    let name=classes[classes.length-1];
    let car=findCarByName(name);
    if(classes.contains("btn-delete")){
        deleteCar(name);
        attachRows();
    }else if(classes.contains("btn-edit")){
        nameInpt.disabled=true;
        nameInpt.value=car.company;
        modelInpt.value=car.model;
        yearInpt.value=car.year;


    }else if(classes.contains("btn-save")){


        nameInpt.disabled=true;

        let savedCar={
            company:nameInpt.value,
            model:modelInpt.value,
            year:yearInpt.value
        }
        

        let pos=findPositionCarByName(name);

        cars[pos].model= savedCar.model!=='' ? savedCar.model : cars[pos].model;
        cars[pos].year= savedCar.year!=='' ? savedCar.year : cars[pos].year;
        attachRows()









    }

    
});







