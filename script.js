const img = document.querySelector('img');
const btn = document.querySelector('.btn');

function useAPI(srch) {
    console.log(srch);
   
}

// Button event listener
btn.addEventListener('click', () => {
    const search = document.querySelector('#search');
    console.log(search.value);
    const val = search.value;
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=fs7gQxJQBTG4pQAjolZNSES8hBWr14Om&s=${val}`, {mode: 'cors'})
    .then((response) => response.json())    // Returns response object => Then to extract JSON from response body using json();
    .then((response) => img.src = response.data.images.original.url);   // Returns 2nd promise containing response body as JSON
})

