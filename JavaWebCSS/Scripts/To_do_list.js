console.log("hello reference!!");
//lets create a function that adds yo alist the value entered 
    //first lets create an empty array 
const listItems = [];

function addToList()
{
    //lets use the DOM to get value of Input 
    const inputObjectOne = document.querySelector(".text_box_one");
    //lets get the input
    const inputValue = inputObjectOne.value; 
    listItems.push(inputValue);
    document.querySelector(".output_one").innerText = ` we have added; ${inputValue} to the list its now (${listItems})`;
}