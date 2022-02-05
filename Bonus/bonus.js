const icons = [
    {
        name : 'cat',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : color(),
    },
    {
        name : 'crow',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : color(),
    },
    {
        name : 'dog',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : color(),
    },{
        name : 'dove',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : color(),
    },
    {
        name : 'dragon',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : color() ,
    },
    {
        name : 'horse',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : color(),
    },
    {
        name : 'hippo',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : color(),
    },
    {
        name : 'fish',
        prefix : 'fa-',
        type : 'animal',
        family : 'fas',
        color : color(),
    },
    {
        name : 'carrot',
        prefix : 'fa-',
        type : 'vegetable',
        family : 'fas',
        color : color(),
    },
    {
        name : 'apple-alt',
        prefix : 'fa-',
        type : 'vegetable',
        family : 'fas',
        color : color(),
    },
    {
        name : 'lemon',
        prefix : 'fa-',
        type : 'vegetable',
        family : 'fas',
        color : color(),
    },
    {
        name : 'pepper-hot',
        prefix : 'fa-',
        type : 'vegetable',
        family : 'fas',
        color : color(),
    },
    {
        name : 'user-astronaut',
        prefix : 'fa-',
        type : 'user',
        family : 'fas',
        color : color(),
    },
    {
        name : 'user-graduate',
        prefix : 'fa-',
        type : 'user',
        family : 'fas',
        color : color(),
    },
    {
        name : 'user-ninja',
        prefix : 'fa-',
        type : 'user',
        family : 'fas',
        color : color(),
    },
    {
        name : 'user-secret',
        prefix : 'fa-',
        type : 'user',
        family : 'fas',
        color : color(),
    }
];

const container = document.getElementById('icons-container');

drawIcons(container, icons);

const selector = document.getElementById('type-filter');

selector.addEventListener('change', function() {

    let selection = this.value;

    if (selection == 'all') {
        drawIcons(container, icons);
    } else {

        let filteredIcons = icons.filter( icon => {
            if (icon.type == selection) {
                return true;
            }
            return false;
        });

        drawIcons(container, filteredIcons);
    }
});

function drawIcons(container, icons) {

    let content = '';

    icons.forEach(oggetto => {

        content += 
				`<div class="icon">
        			<i style="color: ${oggetto.color};" class="${oggetto.family} ${oggetto.prefix}${oggetto.name}"></i>
        			<div class="icon-text">${oggetto.name}</div>
    			</div>`;
    });

    container.innerHTML = content;

}

/* Funzione per aggiungere la lista di options dinamicamente */
optionElements();

function optionElements() {

    let selectOptions = '<option value="all">All</option>';

    /* Creo un array vuoto e aggiungo ad ogni elemento la proprietà "type" */
    let select = []; 
    icons.forEach(elemento => {
        if (!select.includes(elemento.type)) {
            select.push(elemento.type)
        }
    });
        
    /* Per ogni elemneto dell'array select inserisco un option con il value corrispondente  */
    for (let i = 0; i < select.length; i++) {
        selectOptions += `<option value="${select[i]}">${select[i]}</option>`
    }

    selector.innerHTML = selectOptions;
}

/* Funzione che genera un numero casuale tra un minimo e un massimo */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/* Funzione che genera un colore casuale per ogni oggetto dell'array icons */
function color() {

    let colorCode;
    let hash = '#';

    /* Ciclo dal quale genero 6 numeri e dove sostituisco i numeri generati casualmente con le lettere da A a F  */
    for (let i = 0; i < 6; i++) {

        let number = randomNumber(1, 15);
        
        if (number <= 9) {
            colorCode = number
        } else if (number == 10) {
            colorCode = 'a'
        } else if (number == 11) {
            colorCode = 'b'
        } else if (number == 12) {
            colorCode = 'c'
        } else if (number == 13) {
            colorCode = 'd'
        } else if (number == 14) {
            colorCode = 'e'
        } else if (number == 15) {
            colorCode = 'f'
        }
        hash += colorCode;
    }
    return hash;
};