
let pronoun = ["the" , "our"];
let adj =  ["great" , "big"];
let noun = ["jogger" , "racoon"];
function randomSentences(array1, array2, array3){
    let domainName;
    let domainList = [];
    for(let i = 0; i < array1.length; i++){
        let randomNumber = Math.floor(Math.random() * 2);
        for(let j = 0; j < array2.length; j++){
            let randomNumber1 = Math.floor(Math.random() * 2);
            for(let k = 0; k < array3.length; k++){
                let randomNumber2 = Math.floor(Math.random() * 2);
                domainName = array1[randomNumber] + array2[randomNumber1] + array3[randomNumber2] + '.com' ;
                 domainList.push(domainName);
             }
        }
    } 
    
    domainList.forEach(domain => {
        let list = document.getElementById("list");
        let listElement = document.createElement("li");
        let text = document.createTextNode(domain);
        listElement.appendChild(text);
        list.appendChild(listElement);
    });
    console.log(domainName);
}
randomSentences(pronoun, adj, noun); 


 