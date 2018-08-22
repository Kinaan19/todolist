var monInput = document.getElementById("input-task");
var monForm = document.getElementsByTagName("form");
var list = document.getElementById("list");
var boutonVert = document.getElementsByClassName("vert");
var boutonJaune =  document.getElementsByClassName("jaune");
var boutonRouge = document.getElementsByClassName("rouge");
var boutonVertArray,boutonJauneArray,boutonRougeArray;var mesElements = document.getElementsByClassName("element");
var mesElementsArray
var i = 0;
var todo = [];
var done = [];
var deleted = [];

function fct_ajouter(){
   list.innerHTML += `<div class="row element"><p class="col-8">${monInput.value}</p><div class="col-4 archive"><button data-index="${i}" class="btn vert" type="button"></button><button data-index="${i}" class="btn jaune" type="button"></button><button data-index="${i}" class="btn rouge" type="button"></button></div></div>`;
   i++;
   mesElementsArray = Array.from(mesElements);
   mesElementsArray.forEach(element => {
       todo.push(element);
   });
};

function btn_vert(element){
    if(mesElements[element.dataset.index].style.backgroundColor == "green"){
        mesElements[element.dataset.index].style.backgroundColor = "white";
    }else{
        mesElements[element.dataset.index].style.backgroundColor = "green";
        let switchElem = todo.splice(mesElementsArray.indexOf(mesElements[element.dataset.index]));
        done.push(switchElem);
        console.log(todo);
        console.log(done);
    };
};

function btn_jaune(element){
    let currentIndex = element.dataset.index;
    element.parentElement.parentElement.innerHTML = `<input type="text" placeholder="Veuillez remplir le champ" id="editInput" class="form-control col-7"><div class="col-4 archive"><button type="button" id="confirm" class="btn">Confirm</button></div>`;
    var editInput = document.getElementById("editInput");
    var boutonConfirm = document.getElementById("confirm");
    boutonConfirm.addEventListener("click",()=>{
        if(editInput.value == "" || editInput.value.charAt(0) == " "){
            alert("Vous ne pouvez pas remplir le champ en commençant par un espace.\nVeuillez réessayer.")
        }else{
            btn_confirm(editInput,boutonConfirm,currentIndex);   
        };
        mesForEach();
    });
};

function btn_confirm(editInput,boutonConfirm,currentIndex){
    boutonConfirm.parentElement.parentElement.innerHTML = `<p class="col-8">${editInput.value}</p><div class="col-4 archive"><button data-index="${currentIndex}" class="btn vert" type="button"></button><button data-index="${currentIndex}" class="btn jaune" type="button"></button><button data-index="${currentIndex}" class="btn rouge" type="button"></button></div>`;
};

function btn_rouge(element){
    if(mesElements[element.dataset.index].style.backgroundColor == "red"){
        mesElements[element.dataset.index].style.backgroundColor = "white";
    }else{
        mesElements[element.dataset.index].style.backgroundColor = "red";
    };
};

function mesForEach(){
   boutonVertArray = Array.from(boutonVert);
   boutonJauneArray = Array.from(boutonJaune);
   boutonRougeArray = Array.from(boutonRouge);
   boutonVertArray.forEach(element => {
       element.addEventListener("click",()=>btn_vert(element));
   });
   boutonJauneArray.forEach(element => {
        element.addEventListener("click",()=>btn_jaune(element));
   }); 
   boutonRougeArray.forEach(element => {
        element.addEventListener("click",()=>btn_rouge(element));
   });
};

monForm[0].addEventListener("submit",()=>{
   event.preventDefault();
   if(monInput.value == "" || monInput.value.charAt(0) == " "){
       alert("Vous ne pouvez pas remplir le champ en commençant par un espace.\nVeuillez réessayer.");
       mesForEach();
   }else{
       fct_ajouter();
       monInput.value = "";    
   };  
   mesForEach();
});