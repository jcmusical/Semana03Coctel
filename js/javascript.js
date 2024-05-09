

let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`

fetch(url)
    .then(res => res.json())
    .then( data => {
        console.log(data.drinks)

        let html = `<div class="row text-center">`
        for (const iterator of data.drinks) {
             html += `
                        <div class="border border-primary rounded character col-3 mt-3 mb-3 ms-1">
                            <img src="${iterator.strDrinkThumb}" class="img-fluid">
                            <div>
                                <h5> <b> ${iterator.strCategory} - ${iterator.strGlass} </b> </h5>
                                <p>${iterator.strInstructionsES}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${iterator.strIngredient1}</li>
                                <li class="list-group-item">${iterator.strIngredient2}</li>
                                <li class="list-group-item">${iterator.strIngredient3}</li>
                            </ul>
                            <div class="m-2">
                                <a href="${iterator.strDrinkThumb}" class="card-link">Enlace de Imagen</a>
                            </div>
                        </div>`
        }
        html += `</div>`
        
           



            document.getElementById("charContent").innerHTML = html
    })

