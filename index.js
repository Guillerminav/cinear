
const info = [
    {
        img: './assets/img1.webp',
        title: 'Inseparables',
        description: 'Un adinerado hombre de negocios con tetraplejia contrata a un jardinero impulsivo como su asistente terapéutico. basada en hechos reales.',
        stars: 3.9,
        keywords: ['argentina', 'comedia'],
    },
    {
        img: './assets/img2.jpg',
        title: 'Granizo',
        description: 'Después de que le llueven críticas por fallar en el pronóstico de una tormenta, un meteorólogo se refugia en la casa de su hija e inicia un viaje de autodescubrimiento.',
        stars: 2,
        keywords: ['argentina', 'comedia', 'drama']
    },
    {
        img: './assets/img3.webp',
        title: 'Locura de amor en Las Vegas',
        description: 'Después de una noche de copas intensa en Las Vegas, dos extraños amanecen con la desafortunada novedad de que están casados.',
        stars: 4.9,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img5.webp',
        title: 'El gran casamiento',
        description: 'En un fin de semana caótico, una pareja divorciada simula estar felizmente casada durante la boda de su hijo adoptivo para impresionar a su madre biológica.',
        stars: 3,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img6.webp',
        title: 'Quiero robarme a la novia',
        description: 'Cuando se da cuenta de que su mejor amiga es su amor platónico, un casanova aprovecha su papel de "dama" de honor para sabotearle los planes de boda.',
        stars: 3.6,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img7.webp',
        title: 'Enamorándome de mi ex',
        description: 'Diez años después de su divorcio, jane y Jake se reúnen para la graduación de su hijo y terminan durmiendo juntos.',
        stars: 4.5,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img8.webp',
        title: 'Virgen a los 40',
        description: 'Andy, de 40 años, todavía "no lo ha hecho". Sus compañeros de trabajo (obsesionados por el sexo) se proponen ayudarlo a perder la virginidad.',
        stars: 2,
        keywords: ['comedia', 'romantica']
    },
]


// Añadir peliculas dinámicamente

let container = document.querySelector('.container');

const addMovie = (img, title, description, stars) => {

    // Creacion de elementos
    let movieContainer = document.createElement('DIV')
    let movieImage = document.createElement('IMG')
    // let movieTitle = document.createElement('H2')
    // let movieDescription = document.createElement('P')
    // let movieStars = document.createElement('P')
    // let watchNow = document.createElement('BUTTON')
    // let buttonContainer = document.createElement('DIV')

    // Agregamos clases
    movieImage.setAttribute("src", img)
    movieContainer.classList.add('movieContainer')
    movieImage.classList.add('movieImage')
    // movieTitle.classList.add('movieTitle')
    // movieDescription.classList.add('movieDescription')
    // movieStars.classList.add('movieStars')
    // watchNow.classList.add('watchButton')
    // buttonContainer.classList.add('buttonContainer')

    // Agregamos textNodes
    //movieTitle.textContent = title
    //movieDescription.textContent = description
    //movieStars.textContent = stars
    //watchNow.textContent = 'Ver ahora'


    //buttonContainer.appendChild(movieStars)
    //buttonContainer.appendChild(watchNow)
    movieContainer.appendChild(movieImage)
    //movieContainer.appendChild(movieTitle)
    //movieContainer.appendChild(movieDescription)
    //movieContainer.appendChild(buttonContainer)

    // Eventos
    movieContainer.addEventListener('mouseover', () => {
        movieContainer.classList.add('hoverEffect')
    })
    movieContainer.addEventListener('mouseleave', () => {
        movieContainer.classList.remove('hoverEffect')
    })

    // Ventana modal
    movieContainer.addEventListener('click', (e) => {
        let evento = e.target
        console.log(evento)
        document.querySelector('.modal').classList.add('show')
    })

    document.querySelector('.close').addEventListener('click', () => document.querySelector('.modal').classList.remove('show'))

    return movieContainer;
}


let elementoTemporal = document.createDocumentFragment();

for (let i = 0; i < info.length; i++) {
    let newMovie = addMovie(info[i].img, info[i].title, info[i].description, info[i].stars);
    elementoTemporal.appendChild(newMovie);
}

container.appendChild(elementoTemporal)

// Ratings

let starsTotal = 5

function getRatings() {
    for (let i = 0; i < info.length; i++) {
        const starPercentage = (info[i].stars / starsTotal) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`
        document.querySelector(`.starsInner`).style.width = starPercentageRounded;
        document.querySelector(`.numberRating`).innerHTML = `${info[i].stars}`;
    }

}

document.addEventListener('DOMContentLoaded', getRatings);

// Filtro de búsqueda

let inputSearch = document.querySelector('#search')
let titulos = document.querySelectorAll('.movieContainer')

const items = []
for(let titulo of titulos){
    items.push(titulo)
}

inputSearch.addEventListener('keyup', (e) => {
    let text = e.target.value
    let er = new RegExp(text, "i")
    for(let i = 0; items.length; i++) {
        let valor = items[i]
        if(er.test(valor.innerText)) {
            valor.classList.remove("filter")
        }else{
            valor.classList.add("filter")
        }
    }
})

// Falta resolver:
// - centrar el contenido y que al wrappearse no queden los items centrados


// Puntuacion:
// -img con ancho de 50px y div con mismo ancho
// imagen en cover
// - nro de estrellas en %
