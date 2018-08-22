var monTodo = document.getElementById("todo");
var monDone = document.getElementById("done");
var monDeleted = document.getElementById("deleted");
var monAll = document.getElementById("all");
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
   list.innerHTML += `<div class="row element bg-light"><p class="col-8">${monInput.value}</p><div class="col-4 archive"><button data-index="${i}" class="btn vert" type="button"></button><button data-index="${i}" class="btn jaune" type="button"></button><button data-index="${i}" class="btn rouge" type="button"></button></div></div>`;
   i++;
   todo = [];
   mesElementsArray = Array.from(mesElements);
   mesElementsArray.forEach(element => {
       if(element.className == "row element bg-light"){
           todo.push(element);
       }else if(element.className == "row element bg-success"){
           done.push(element);
       }else if(element.className == "row element bg-danger"){
           deleted.push(element);
       };
   });
   fct_all();
};

function btn_vert(element){
    if(mesElements[element.dataset.index].className == "row element bg-success"){
        mesElements[element.dataset.index].classList.remove("bg-success");
        mesElements[element.dataset.index].classList.add("bg-light");
        let switchElemTodo = done.splice(mesElementsArray.indexOf(mesElements[element.dataset.index]),1);
        todo.push(switchElemTodo[0]);
    }else if(mesElements[element.dataset.index].className == "row element bg-danger"){
        mesElements[element.dataset.index].classList.remove("bg-danger");
        mesElements[element.dataset.index].classList.add("bg-success");
        let switchElemDone = deleted.splice(todo.indexOf(mesElements[element.dataset.index]),1);
        done.push(switchElemDone[0]);
    }else{
        mesElements[element.dataset.index].classList.remove("bg-light");
        mesElements[element.dataset.index].classList.add("bg-success");
        let switchElemDone = todo.splice(todo.indexOf(mesElements[element.dataset.index]),1);
        done.push(switchElemDone[0]);
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
    if(mesElements[element.dataset.index].className == "row element bg-danger"){
        mesElements[element.dataset.index].classList.remove("bg-danger");
        mesElements[element.dataset.index].classList.add("bg-light");
        let switchElemDel = deleted.splice(mesElementsArray.indexOf(mesElements[element.dataset.index]),1);
        todo.push(switchElemDel[0]);
    }else if(mesElements[element.dataset.index].className == "row element bg-success"){
        mesElements[element.dataset.index].classList.remove("bg-success");
        mesElements[element.dataset.index].classList.add("bg-danger");
        let switchElemDone = done.splice(todo.indexOf(mesElements[element.dataset.index]),1);
        deleted.push(switchElemDone[0]);
    }else{
        mesElements[element.dataset.index].classList.remove("bg-light");
        mesElements[element.dataset.index].classList.add("bg-danger");
        let switchElemDone = todo.splice(todo.indexOf(mesElements[element.dataset.index]),1);
        deleted.push(switchElemDone[0]);
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
       alert("Vous devez remplir le champ.\nVeuillez réessayer.");
       mesForEach();
   }else{
       fct_ajouter();
       monInput.value = "";    
   };  
   mesForEach();
});

function fct_toDo() {
    todo.forEach(element => {
        if(element.style.display == "none"){
            element.style.display = "";
        }else{
            element.style.display = "none";
        };
    });
};

function fct_done(){
    done.forEach(element => {
        if(element.style.display == "none"){
            element.style.display = "";
        }else{
            element.style.display = "none";
        };
    });
};

function fct_deleted(){
    deleted.forEach(element => {
        if(element.style.display == "none"){
            element.style.display = "";
        }else{
            element.style.display = "none";
        };
    });
};

function fct_all(){
    mesElementsArray.forEach(element => {
        element.style.display = ""
    });
};

monAll.addEventListener("click",fct_all);
monDeleted.addEventListener("click",fct_deleted);
monDone.addEventListener("click",fct_done);
monTodo.addEventListener("click",fct_toDo);