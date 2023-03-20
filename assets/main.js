async function main() {
    let dbCAT = await fetch('https://catfact.ninja/fact')
    let catData = await dbCAT.json()

    dataCat(catData)
}

function  dataCat(catData) {
    let container = document.querySelector('.phrase_container')
    let format =    `
                    <div class="text_container">
                        <h2>${catData.fact}</h2>
                    </div>
                    `

    container.innerHTML = format

    let words = catData.fact.split(' ', 3).join(' ').replaceAll(' ', '+')

    gifFunc(words)
}

async function gifFunc(words) {

    let dbgif = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=XYaCGiJQ6oR8zlo7eRP99VamYHMSgs9W&q=${words}&limit=25&offset=0&rating=g&lang=en`)
    let gifData = await dbgif.json()

    let pathImg = 
    `
    <div class ="img_container">
            <img src="${gifData.data[0].images.original.url}" alt="">
    </div>
    `

    document.querySelector('.gif_Container').innerHTML = pathImg

}


main()