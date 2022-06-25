let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    //fecth url
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            //   console.log(data[0]);
            //   console.log(data[0].capital[0]);
            result.innerHTML = `
                        <img src ="${data[0].flags.svg}"
                        class = "flag-img">
                            <h2>${data[0].name.common} </h2> 
                            <div class = "wrapper">
                            <div class = "data-wrapper">
                            <h4> Capital: </h4><span>${ data[0].capital[0] }</span>
                             </div> 
                             </div><div class="wrapper">
                             <div class="data-wrapper">
                                 <h4>Currency:</h4>
                                 <span>${
                                   data[0].currencies[Object.keys(data[0].currencies)].name
                                 } - ${Object.keys(data[0].currencies)[0]}</span>
                             </div>
                         </div><div class="wrapper">
                         <div class="data-wrapper">
                             <h4>Common Languages:</h4>
                             <span>${Object.values(data[0].languages)
                               .toString()
                               .split(",")
                               .join(", ")}</span>
                         </div>
             
                         <div class="likes-section">
                         <span id="like-count" class="likes">0 likes</span>
                         <button id="like-button" class="like-button">♥</button>
                     </div>
                     </div>
                   `;
        })
        .catch(() => {
            if (countryName.length == 0) {
                result.innerHTML = `<h3>The input field cannot be empty</h3>`;
            } else {
                result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
            }
        });
});