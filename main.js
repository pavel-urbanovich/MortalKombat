const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const player1 = {
    player: 1,
    name: 'Sonia',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['knife', 'spear', 'sword', 'club'],
    attack() {
        console.log(`${this.name} Fight...`)
    },
};

const player2 = {
    player: 2,
    name: "Scorpion",
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'spear', 'sword', 'club'],
    attack() {
        console.log(`${this.name} Fight...`)
    },
};

function createElement (tag, className) {
    const $tag = document.createElement (tag);
    if (className) {
         $tag.classList.add(className);
    }
   
    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');
     
   
    $life.style.width = playerObj.hp + '%';
    $name.innerText= playerObj.name;
    $img.src = playerObj.img;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);
    
    $player.appendChild($progressbar);
    $player.appendChild($character);
   
    return $player;
};

function playerWin(name) {
    const $nameLose = createElement ('div', 'loseTitle');
     $nameLose.innerText = name + ' wins';
    return $nameLose;
};



function randomLife(player) {
    const randomValue = +(Math.random() * 20).toFixed(0);
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= randomValue;
    if (player.hp <= 0) {
        player.hp = 0;
    }
    $playerLife.style.width = player.hp + '%';
    return player.hp;
};


function createHP (player) {
    randomLife(player);
            if (player.hp <= 0) {
            if (player.name = player1.name) {
                player.name = player2.name;
            }  player2.name;
            $arenas.appendChild(playerWin(player.name));
            $randomButton.disabled = true;
        };     
    };


$randomButton.addEventListener('click', function() {
    createHP (player1);
    createHP (player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer( player2));

