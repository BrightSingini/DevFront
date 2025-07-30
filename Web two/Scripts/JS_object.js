//lets add all in here 
//the script should do the following
/*
    --The creation of new divs to fill in new articles that have been written in the blog section 
    --The ability to write and post 
    --The tasks of making sure that the page is interactive enough for:
            ---Liking 
            ---making and posting comments 
            ---hosting data collection and visualisation of the 
*/

//lets have the variables to handle new div objects
//create the contents of the divs as objects 
//have the posting button create the new div and t

//function for creating and populating a new object 
function DivObject(content_data){
    let div_data = {
        posted_data: content_data,
    };
    //lets stringify the content
    let returnable = JSON.stringify(div_data);
    return returnable;
}

function div_creator(data_json){
    //the creator for divs content
    let html_data = data_json;
    //create a new div
    let division_one = document.createElement("Div");
    //lets have a document class 
    let class_div = docuemnt.creatAttribute('class');
    class_div.value = "js_attribute";
    //
    document.body.appendChild(division_one)
    //lets create a div 
    document.querySelector("").;
}