const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("searchBox");
const searchResult = document.getElementById("search-result");
const showBtn = document.getElementById("show-more-btn");
const accessToken = "fSCHIgUU9BbgtpUGIeMO2CUfkl6pkM21X8syUprb-lM";

let keyword = "";
let page = 1;

const searchImg = async () => {
    keyword = searchBox.value;
    console.log(keyword)
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessToken}&per_page=12`;


    if(page === 1){
        searchResult.innerHTML = "";
    }
    const res = await fetch(url);
    const data = await res.json();

    const results = data.results;
    results.map((result)=>{
        const img = document.createElement("img");
        img.src = result.urls.small;
        const imgLink = document.createElement("a");
        imgLink.href = result.links.html;
        imgLink.target = "_blank"

        imgLink.appendChild(img);
        searchResult.appendChild(imgLink);

    })

    showBtn.style.display = "block";
    // console.log(data)
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page=1;
    searchImg();
})

showBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    page++;
    searchImg();
})