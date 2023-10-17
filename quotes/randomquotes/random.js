// let cards = document.querySelector(".displayQuote");
// 	for(let i=1; i<=107; i++){
// 		let card = createCard(i);
// 		cards.appendChild(card);
// 	}

async function fetchData(url){
    const response = await fetch(url);
    const jsonData = await response.json()
    return jsonData    
}
async function random(){    
    
    let response = await fetchData(`https://api.quotable.io/random`);
    console.log(response);
    
    let display = document.querySelector(".displayQuote");
    
    let quotes = response;
    let div = document.createElement("div");
    div.setAttribute("class", "card");

    let Content = document.createElement("div");
    Content.innerText = response.content;
    Content.style.fontSize = "30px";
    Content.style.fontWeight = "bold";
    Content.style.marginTop = "40px";

    let author = document.createElement("p");
    author.innerText = response.author;
    author.style.marginLeft = "600px";
    author.style.fontSize = "25px";
    author.style.marginTop = "20px";

    div.append(Content, author);
    display.append(div);

}
random();













// let random = document.querySelector(".random");

// async function Random(){
//     const response = await fetch(`https://api.quotable.io/random`);
//     const jsonData = await response.json()
//     console.log(jsonData);
// //}

// let displayQuote = document.querySelector(".displayQuote");
// let quotes = response;
//  if(quotes !== 0){
//     for(let i=0; i<quotes.length; i++){
//             let div = document.createElement("div");
//             div.setAttribute("class", "card");

//             let content = document.createElement("div");
//             content.innerText = quotes[i].content;

//             let author = document.createElement("p");
//             author.innerText = quotes[i].author;

//             div.append(content,author);
//             displayQuote.append(div);
//     }
//  }
// }