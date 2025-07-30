//lets try somethings in here 
//lets create a new div everytime the button is pressed 
function createComment(){
    //have the div created 
    let div_new = document.createElement('div');
    //have the populated with comment section and a post 
    document.querySelector('.main_div').appendChild(div_new);
    let class_name = document.createAttribute('class');
    class_name.value = 'js_comment';
    div_new.setAttribute(class_name);
    //have liven the situation 
    //document.body.querySelector('.main_div').appendChild(div_new);
    //lets add a prompt for the comment section 
    let prompt_comment = document.createElement('input');
    class_name.appendChild(prompt_comment);
    document.querySelector('.js_comment').innerHTML = prompt_comment;
    console.log('they have tried to allow us');
}