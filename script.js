fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem",
    options
)
    .then((response) => response.json())
    .then((response) => {
        console.log(response.data[0].duration);

        const divEminem = document.querySelector("eminem");

        for (let i = 0; i < response.data.length; i++) {
            let newColEminem = document.createElement("div");
            newColEminem.classList.add("col-sm-3");

            console.log(newColEminem);

            newColEminem.innerHTML = `<div class="card"">
            <img src="${
                songs.data[i].album.cover
            }" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${response.data[i].title}</h5>
              <p class="card-text">${
                  "Duration: " + response.data[i].duration + " min"
              }</p>
              <a href="${response.data[i].link}" class="btn btn-dark">LISTEN</a>
            </div>
          </div>
            `;
            divEminem.appendChild(newColEminem);
        }
    });

fetch(
    " https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica",
    options
)
    .then((response) => response.json())
    .then((response) => {
        console.log(response.data[0].duration);

        const divMetallica = document.getElementById("metallica");

        for (let i = 0; i < response.data.length; i++) {
            let newColMetallica = document.createElement("div");
            newColMetallica.classList.add("col-sm-3");

            console.log(newColMetallica);

            newColMetallica.innerHTML = `<div class="card"">
                <img src="${
                    response.data[i].album.cover
                }" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${response.data[i].title}</h5>
                  <p class="card-text">${
                      "Duration: " + response.data[i].duration + " min"
                  }</p>
                  <a href="${
                      response.data[i].link
                  }" class="btn btn-dark">LISTEN</a>
                </div>
              </div>
                `;
            divMetallica.appendChild(newColMetallica);
        }
    });

fetch(
    " https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth",
    options
)
    .then((response) => response.json())
    .then((response) => {
        console.log(response.data[0].duration);

        const divBehemoth = document.getElementById("behemoth");

        for (let i = 0; i < response.data.length; i++) {
            let newColBehemoth = document.createElement("div");
            newColBehemoth.classList.add("col-sm-3");

            console.log(newColBehemoth);

            newColBehemoth.innerHTML = `<div class="card"">
                    <img src="${
                        response.data[i].album.cover
                    }" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${response.data[i].title}</h5>
                      <p class="card-text">${
                          "Duration: " + response.data[i].duration + " min"
                      }</p>
                      <a href="${
                          response.data[i].link
                      }" class="btn btn-dark">LISTEN</a>
                    </div>
                  </div>
                    `;
            divBehemoth.appendChild(newColBehemoth);
        }
    });

/*             .catch(err => console.error(err)); */
