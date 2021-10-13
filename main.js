const player1 = {
    name: 'Sonia',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['knife', 'spear', 'sword', 'club'],
    attack() {
        console.log(`${this.name} Fight...`)
    },
};

const player2 = {
    name: "Scorpion",
    hp: 400,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'spear', 'sword', 'club'],
    attack() {
        console.log(`${this.name} Fight...`)
    },
};

function createPlayer(playerClass, playerName, _hp, _model) {
    const $player1 = document.createElement('div');
    $player1.classList.add(playerClass);


    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');


    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.style.width = _hp + '%';
    $life.classList.add('life');

    const $name = document.createElement('div');
    $name.innerText= playerName;
    $name.classList.add('name');

    const $img = document.createElement('img');
    $img.src = _model;



    $player1.appendChild($progressbar);
    $player1.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    const $arenas = document.querySelector('.arenas')
    $arenas.appendChild($player1)
}


createPlayer('player1', 'Sonia', 50, player1.img);
createPlayer('player2', 'SCORPION', 60, player2.img);
