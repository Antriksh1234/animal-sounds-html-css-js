var cards = document.getElementsByClassName("animal_card");

for (let i = 0; i < cards.length; i++) {
    var card = cards[i];
    card.onclick = () => {
        playAudio(i);
    }
}

function playAudio(index) {
    let urls = ['sounds/dog.wav', 
                'sounds/crow.mp3',
                'sounds/horse.m4a',
                'sounds/owl.wav',
                'sounds/cat.wav'];
    new Audio(urls[index]).play();
}

document.onkeydown = (event) => {
    console.log(event.key);
    if (event.key == 'a') {
        playAudio(0);
    } else if (event.key == 'b') {
        playAudio(1);
    } else if (event.key == 'c') {
        playAudio(2);
    } else if (event.key == 'd') {
        playAudio(3);
    } else if (event.key == 'e') {
        playAudio(4);
    } else {

    }
}