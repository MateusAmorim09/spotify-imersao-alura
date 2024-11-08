const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm){
    const url = 'http://127.0.0.1:5500/artists?name_like='${serachTerm}
    fetch(url)
        .then((response) => response.json())
        .then((result)=>displayResults(result))
}

function displayResults(result){
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');

}

document.addEventListerner('input', function (){
    const searchTerm = searchInput.ariaValueMax.toLowerCase();
    if (searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    requestApi(searchTerm);
})
