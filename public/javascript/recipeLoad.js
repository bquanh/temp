// Getting psuedo data in json format
import data from "./temp.json" assert { type: 'json' };

const totalPost = data.post.length;

const cardList = document.querySelector('.recipe-row');

for (let i = 0; i < totalPost; i+= 1) {

    // Create a empty card
    let card = document.createElement('div');
    card.classList.add('card');
    card.style.width="20rem";

    // Add image
    let img = document.createElement('img');
    img.src = data.post[i].image;
    img.style = "max-height: 250px; object-fit: cover";

    // Create empty card body
    let cardBody = document.createElement('div');
    cardBody.classList.add("card-body");
    cardBody.style = "margin: 0px 10px 0px 10px";

    // Get title and add to card body
    let title = document.createElement('h5');
    title.classList.add("card-title");
    title.innerHTML = data.post[i].name;

    // Get author and date and and to card body
    let authorDate = document.createElement('div');
    authorDate.classList.add("author-date");

    let author = document.createElement('p');
    author.classList.add("card-text");
    author.innerHTML = "By " + data.post[i].user;

    let date = document.createElement('p');
    let small = document.createElement('small');
    small.classList.add("text-muted");
    small.innerHTML = "&#x2022; " + data.post[i].date;
    date.classList.add("card-text");
    date.appendChild(small);

    authorDate.appendChild(author);
    authorDate.appendChild(date);

    // Get total rating, create star equivelent to the rating and add to card
    //Fix Style/Change star to suit prototype better

    // let totalRating = document.createElement('div');
    // totalRating.classList.add("rating");
    // let star = data.post[i].rating;
    // for (let j = 0; j < star; j++) {
    //     let rating = document.createElement('span');
    //     rating.className = "fa fa-star checked";
    //     totalRating.appendChild(rating);
    // }

    // let remain = 5 - star;
    // if (remain > 0) {
    //     for (let j = 0; j < remain; j++) {
    //         let rating = document.createElement('span');
    //         rating.className = "fa fa-star";
    //         totalRating.appendChild(rating);
    //     }
    // }

    // Find more button

    let findMore = document.createElement('div');
    findMore.classList.add("text-right");
    let a = document.createElement('a');
    a.href = "#";
    a.classList.add("findmore-button");
    a.innerHTML = "Find More";

    findMore.appendChild(a);

    // Add everything to card body
    cardBody.appendChild(title);
    cardBody.appendChild(authorDate);
    // cardBody.appendChild(totalRating);
    cardBody.appendChild(findMore);

    // Add to empty card
    card.appendChild(img);
    card.appendChild(cardBody);

    cardList.appendChild(card);

}