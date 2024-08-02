

function Diceroll(){

    const numOfdice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimage = document.getElementById("diceimage");

    const values = [];
    const images = [];

    for(let i=0; i<numOfdice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice/${value}.png" alt="Dice ${value}">`);
    }

    diceresult.textContent = `dice: ${values.join(', ')}`;
    diceimage.innerHTML = images.join('');
}