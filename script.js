// READ the giphy API docs: https://developers.giphy.com/
// declare our variables and select our elements 
const giphy_endpoint = 'http://api.giphy.com/v1'

var API_KEY = 'ue6UjMC9QhZ0PhByjH5IwGAO4COl6qKV'
var searchForm = document.querySelector('#search-form')
var searchInput = searchForm.querySelector("input")
var results = document.querySelector('.results')

//define our functions 
function getGifs(path, term) {
    results.innerHTML = ""
    $.ajax({
        type: "GET",
        url: `${giphy_endpoint}/gifs/${path}?api_key=${API_KEY}&q=${term}`,
        dataType: 'json',
        success: function (data) {
            console.log(data)
            for (var i = 0; i < data.data.length; i++) {
                results.innerHTML += `
                <img clas="image" src="${data.data[i].images.preview_gif.url}">
                `
            }

        },
        error: function (error) {
            console.log("There was an error")
        }

    })
}

// $.ajar({})
// type: "GET", ---> URL method
// URL: " http:// www/", ---> URL to accses to API
// dataType: "json", -javas object notation, ----> how you encode the data you recive from the API
// success: function (nameit){} ----> Call back function when its succed 
// error: function(error){} ----> ----> Call back function when it is not succed
// })


//call our functions and add our event listeners 

searchForm.addEventListener('submit', function (event) {
    event.preventDefault()
    getGifs("search", searchInput.value)
}
)