//lets have the function that adds Html to the div 
function add_html(source){
    for(let x of source){
        document.querySelector('.first_div').innerHTML = source;
    }
}
// the fuction that calls the callback 
function call_add(num,num2,callback){
    let sum = num + num2 
    let Super_list = [];
    Super_list.push(sum);
    //lets have the sum show up on the list of 
    callback(Super_list);
    //the development of  
}