//myjavascript.js

const container = document.querySelector('#container');

//Sets size of grid based on user input, loops through row and height 
function gridSize(userInput) {
    if (userInput > 100) {
        alert('Maximum size is 100 \nSize set to 100')
        for (let i = 0; i < 100; i++) {
            const rows = document.createElement('div');
            rows.setAttribute('class', 'rows')
            // rows.style.border = '2px solid black'; 
            container.appendChild(rows);
            for (let j = 0; j < 100; j++) {
                const cols = document.createElement('div');
                cols.setAttribute('class', 'cols');
                // cols.style.border = '2px solid red';
                rows.appendChild(cols);
            }
        }
    }else {
        for (let i = 0; i < userInput; i++) {
            const rows = document.createElement('div');
            rows.setAttribute('class', 'rows')
            // rows.style.border = '2px solid black'; 
            container.appendChild(rows);
            for (let j = 0; j < userInput; j++) {
                const cols = document.createElement('div');
                cols.setAttribute('class', 'cols');
                // cols.style.border = '2px solid red';
                rows.appendChild(cols);
            }
        }
    }
   
}

//Clears previous grid so that user can enter a new grid size
function clearScreen() {
    const element = document.querySelector('#container');
    element.innerHTML = '';
}

//Creates random RGB value so each square the cursor enters is a random colour
function randomColour() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

//Makes square change colour when cursor enters the element, then removes that colour after 1 second
function colourSquares() {
    const squares = document.querySelectorAll('.cols');

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.setAttribute('style', `background-color: ${randomColour()}`);
            })
    
    
            square.addEventListener('mouseout', () => {
                setTimeout(() => {
                    square.removeAttribute('style');
                }, 1000)
            })
    })
}

//Allows user to choose grid size
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let userInput = prompt('How many squares per side would you like in the next grid?');
    clearScreen();
    gridSize(userInput);
    colourSquares();
})

gridSize(16);
colourSquares();