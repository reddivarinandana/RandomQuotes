// let page = 1;
// let limit = 5;
let display = document.querySelector(".displayQuote");
let cards = document.querySelector(".displayQuote");
	for(let i=1; i<=107; i++){
		let card = createCard(i);
        card.setAttribute("class","pages")
		display.appendChild(card);
	}
function createCard(cardNumber) {
    let card = document.createElement("div");
    card.innerHTML = cardNumber;
    card.setAttribute("onClick", `display(${cardNumber})`)
    return card;
}


async function fetchData(url){
    const response = await fetch(url);
    const jsonData = await response.json()
    return jsonData;    
}
async function allquotes(){    
    
    let response = await fetchData(`https://api.quotable.io/quotes?page=3`);
    console.log(response);
    
    let display = document.querySelector(".displayQuote");

    let quotes = response?.results;
    if(quotes.length !== 0){

        for(let i=0; i<quotes.length; i++){
            
            console.log(quotes[i].content);
            let div = document.createElement("div");
            div.setAttribute("class", "card");

            let Content = document.createElement("div");
            Content.innerText = quotes[i].content;
            Content.style.fontSize = "30px";
            Content.style.fontWeight = "bold";
            Content.style.marginTop = "40px";

            let author = document.createElement("p");
            author.innerText = quotes[i].author;
            author.style.marginLeft = "600px";
            author.style.fontSize = "25px";
            author.style.marginTop = "20px";

            div.append(Content, author);
            display.append(div);
        }
    }

}



allquotes();

