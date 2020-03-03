// Variable 
const form = document.getElementById('form')
let valor = false;


// Event Listeners
form.addEventListener('submit', sendForm)


// Functions

function sendForm(e) {
    e.preventDefault()
}
function hide() {
    if (valor == false) {
        document.getElementById('ham-menu').style.visibility = 'visible';
        valor = true;
    }
    else {
        document.getElementById('ham-menu').style.visibility = 'hidden';
        valor = false
    }
}
    

