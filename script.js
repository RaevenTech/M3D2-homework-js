/*
 */

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
    .then((response) => response.json())
    .then((response) => {
        console.log(response.data[0].duration);

        const divEminem = document.getElementById("eminem");

        for (let i = 0; i < response.data.length; i++) {
            let newColEminem = document.createElement("div");
            newColEminem.classList.add("col-sm-3");

            console.log(newColEminem);

            newColEminem.innerHTML = `<div class="card">
            <img src="${
                response.data[i].album.cover
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

fetch(" https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
    .then((response) => response.json())
    .then((response) => {
        console.log(response.data[0].duration);

        const divMetallica = document.getElementById("metallica");

        for (let i = 0; i < response.data.length; i++) {
            let newColMetallica = document.createElement("div");
            newColMetallica.classList.add("col-sm-3");

            console.log(newColMetallica);

            newColMetallica.innerHTML = `<div class="card">
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

fetch(" https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
    .then((response) => response.json())
    .then((response) => {
        console.log(response.data[0].duration);

        const divQueen = document.getElementById("queen");

        for (let i = 0; i < response.data.length; i++) {
            let newColQueen = document.createElement("div");
            newColQueen.classList.add("col-sm-3");

            console.log(newColQueen);

            newColQueen.innerHTML = `<div class="card">
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
            divQueen.appendChild(newColQueen);
        }
    });
