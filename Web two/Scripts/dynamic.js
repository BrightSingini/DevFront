//the code goes in here 

//lets have a function that creates an 

function elementCreator(input_value){
    const section = document.createElement('div');
    //lets have the identifying id and append to a document object 
    const parent = document.querySelector('.main_section');
    const div_name = document.createAttribute('class');
    div_name.value = "js_section";
    section.setAttributeNode(div_name);
    //what the styler has to tell 
    const styler = document.createAttribute('style');
    //lets style it
    /*styler.value = "color:pink; box-shadow: 1px 2px 3px rgba(20,20,20,0.2);";
    section.setAttributeNode(styler);*/

    //lets append to the cocument 
    parent.appendChild(section);
    //lets add the section for developing the 
    const para = document.createElement('p');
    para.innerHTML = input_value;
    section.appendChild(para);
    //The other side of code 

}

function removeElement(element_name,identifying_id){
    //let us have the elements of the 
    element_name.removeChild(`${identifying_id}`);
    //The destruction 
    
}