let myInput=document.querySelector("#username");
let myBtn =document.querySelector(" .btn");
let myOutput = document.querySelector(".output");

myBtn.onclick = function(){

    Testing();
};
function Testing(){
    if(myInput.value == ""){
        myOutput.innerHTML=" Enter Your Name please";
    }else{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response =>response.json())
        .then(para => {
            myOutput.innerHTML="";
        para.forEach(repo => {
            if(myInput.value == repo.id){
                let theResult = document.createElement("p");
                let text = document.createTextNode(repo.title);
                let theUserId = document.createElement("p");
                let text2 = document.createTextNode(repo.userId);
                theResult.appendChild(text);
                theUserId.appendChild(text2);
                theUserId.setAttribute("class", "UserId");
                theResult.setAttribute("class", "result");
                myOutput.appendChild(theResult);
                myOutput.appendChild(theUserId);

        }});
        
            })
    }
}