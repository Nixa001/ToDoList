let toDo    =   document.getElementById("toDo");
let finished    =   document.getElementById("finished");



document.getElementById("save").addEventListener("click",function(){

    let task    =   document.getElementById('task').value;


    if(task ==  ""){
        alert("Merci de saisir votre tache !");
    }else{
        document.getElementById("vide").style.visibility="hidden";
        document.getElementById("aFaire").style.visibility="visible";
        toDo.insertAdjacentHTML("afterbegin", `<li>${task}<i id="${task}" onClick=supprimer(this.id) class="fa fa-trash" 
        aria-hidden="true"></i><i id="${task}" onClick=checkTask(this.id) class="fa fa-check-square" aria-hidden="true"></i></li>`);
        document.getElementById('task').value="";
    }
})

function supprimer(id){
    document.getElementById(id).parentElement.outerHTML="";
}

function checkTask(id){
    supprimer(id);
    document.getElementById("terminer").style.visibility="visible";
    finished.insertAdjacentHTML("afterbegin", `<li><strike>${id}</strike> <i id="${task}" onClick=supprimer(this.id) class="fa fa-trash" aria-hidden="true"></i></li>`);
}

function cacher(){
    if(toDo==""){
        document.getElementById("aFaire").style.visibility="hidden";
        document.getElementById("vide").style.visibility="visible";

    }
    else{
        document.getElementById("aFaire").style.visibility="visible";
        document.getElementById("vide").style.visibility="hidden";

    }
}