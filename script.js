
function searchShow(queryString){
    let url = `https://api.tvmaze.com/search/shows?q=${queryString}`
    fetch(url) 
    .then((response) => response.json())
    .then((data) => create(data))
}

var searchInput = document.querySelector('#searchInput')
var output = document.querySelector('#output')
var submit = document.querySelector('#submit')
var input;
let key = output.dataset.key

submit.addEventListener('click',() => {
    if (key == 'used'){
        output.innerHTML = ''
        input = searchInput.value
        searchShow(input)
    } else {
        input = searchInput.value
        searchShow(input)
        output.dataset.key = 'used'
    }
})

function create(array){
    if (array.length > 0){
        console.log(array)

        output.innerHTML = 'Shows Found Include :'
        for ( let i = 0; i < array.length; i++ ){
            let li = document.createElement('li')
            li.style.fontSize = '20px'
            li.style.margin = '10px'
            let img = document.createElement('img')
            output.append(li)
            output.append(img)
            let result = array[i].show.name
            let text = document.createTextNode(result);
            li.append(text);
            try {
                img.src = array[i].show.image.medium
            } catch (error) {
                let p = document.createElement('p')
                p.innerHTML = "NO IMAGE FOUND"
                li.append(p)
            }
        }
    } else {
        output.innerHTML = 'No Shows Found '
    }
}

