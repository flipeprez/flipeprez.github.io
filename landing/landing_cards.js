const cards = document.getElementsByClassName('card__content'); 
//click
for (let card of cards) {
    card.addEventListener('click', () =>{
        card.classList.toggle('flipcard')
    });
}

