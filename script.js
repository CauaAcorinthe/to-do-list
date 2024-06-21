const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("lista_container");

function Addtask() {
    if(InputBox.value === '') {
        alert("Você deve escrever algo!");
    }
    else {
        let li = document.createElement("li");           //cria um elemento li no arquivo html 
        li.innerHTML = InputBox.value;                   //transferindo o texto digitado para o HTMl
        ListContainer.appendChild(li);                   //adicionando um novo elemento filho para o pai ul  
        let span = document.createElement("span");
        span.innerHTML = "&times";
        li.appendChild(span);
    }
    InputBox.value = "" ;         //limpa o campo do texto depois de adicionar a task 
    saveData();
}

ListContainer.addEventListener("click",function(e) {
    if(e.target.tagName === "LI") {                             //se clicar no texto 
        e.target.classList.toggle("checked");                   //adicionar o nome de classe checked
        saveData();
    }
    else if(e.target.tagName === "SPAN") {                      //se clicar no x 
        e.target.parentElement.remove();                        //remover o texto
        saveData();
    } 
}, false);

function saveData() {                                     //saveData(): Salva o conteúdo HTML do elemento ListContainer no localStorage sob a chave "data".
    localStorage.setItem( "data" , ListContainer.innerHTML) ;
}

function showTask() {                                    //showTask(): Recupera o conteúdo HTML salvo no localStorage sob a chave "data" e o exibe dentro do elemento ListContainer.
    ListContainer.innerHTML = localStorage.getItem("data");
}

showTask();