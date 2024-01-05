const DOMSelectors = {
  button: document.querySelector("#btn"),
  input: document.querySelector("#input"),
  container: document.querySelector("#container"),
};

function clearFields() {
  DOMSelectors.container.innerHTML = "";
}

async function getData() {
  try {
    DOMSelectors.button.addEventListener("click", async function (event) {
      event.preventDefault();
      const values = DOMSelectors.input.value;
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${values}&fields=key,title,author_name,editions`
      );
      const data = await response.json();
      clearFields();

      if (data.docs.length === 0) {
        DOMSelectors.container.insertAdjacentHTML(
          "beforeend",
          `<h2>No results found. Please try another search.</h2>`
        );
      } else {
        data.docs.forEach((value) => {
          const authors = value.author_name;
          console.log(value.editions.docs[0].key);
          let images = value.editions.docs[0].key.split("/");
          /*           let imag = images.replace("/works/", ""); */
          /*   imag = imag.replace("W", ""); */
          //console.log(`https://covers.openlibrary.org/b/olid/${images}-S.jpg`);

          DOMSelectors.container.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
              <h1>${value.title}</h1>
              <img src="https://covers.openlibrary.org/b/olid/${images[2]}-M.jpg" alt="Book Covers" class=image>
              <h3 id="h3" class="">${authors}</h3>
            </div>`
          );
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
}

getData();

//"/books/OL27296256M"
