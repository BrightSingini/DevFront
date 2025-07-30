//lets have the to do list of an item by using loops and arrays 

//The Algortithm 
    //get input from web page 
    //have the input added to a list of input items 
    //have the list of items shown on the page as they are updated 
let todoList = [];
//let htmlList = [];
let TotalHtml = `` ;
function resendHTML(){
    //lets show the new HTML page 
    document.querySelector(".js-list-add").innerHTML = TotalHtml;
}
//lets add the input form the page into 
function toDo(){
    //lets have the list update and iterate in here 
    let inputHTML = document.querySelector(".js-todo-input");
    let newItem = inputHTML.value;
    inputHTML.value = '';
    todoList.push(newItem);

    //we have an updated list , now lets iterate through it and get the list items to show 
    for(let i = 0; i<todoList.length; i++){
        let html = todoList[i];
        let pala = `<p>${html}</p>`
        TotalHtml += pala;
    }
    resendHTML();
}