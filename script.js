//selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");

//event listeners
todoButton.addEventListener("click",addtodo);
todoList.addEventListener("click",deletecheck);


//functions
/*
making this div in addtodo function 
<div class="todo">
    <li class="todo-item">
        <button type="button"> <i class="fas-fa trash"></i></button>
        <button type="button"> <i class="fas-fa check"></i></button>
    </li>
</div> */
function addtodo(event){
    //prevent form from submitting
    event.preventDefault();
    //todo div
    const tododiv=document.createElement("div");
    tododiv.classList.add("Todo");
    //create lis
    const newtodo=document.createElement("li");
    newtodo.innerText=todoInput.value;
    newtodo.classList.add("todo-item");
    //append newtodo to tododiv
    tododiv.appendChild(newtodo);
    //complete/checked button
    const completebutton=document.createElement("button");
    completebutton.innerHTML='<i class="fas fa-check"></i>';
    completebutton.classList.add("complete-btn");
    tododiv.appendChild(completebutton);
    //delete/trash button
    const trashbutton=document.createElement("button");
    trashbutton.innerHTML='<i class="fas fa-trash"></i>';
    trashbutton.classList.add("trash-btn");
    tododiv.appendChild(trashbutton);
    
    //append to ul list 
    todoList.appendChild(tododiv);
    //clear todoInput value
    todoInput.value="";
}

function deletecheck(e){
    const item=e.target;
    if(item.classList[0]==="trash-btn"){
       const todo=item.parentElement;
       todo.classList.add("fall");
       todo.addEventListener("transitionend",function(){
            todo.remove();
       });
    }
    //check mark
    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}