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
          let images = value.editions.docs[0].key.split("/");
          DOMSelectors.container.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
              <h2 tabindex=0>${value.title}</h2>
              <img tabindex=1 src="https://covers.openlibrary.org/b/olid/${images[2]}-L.jpg" alt="${value.title} Cover" class=image>
              <h2 tabindex=2 id="h2" class="">${authors}</h2>
              </div>`
          );
          function greet(name) {
            const greetPromise = new Promise(function (resolve, rejected) {
              resolve(`Title: ${value.title}`);
            });
            return greetPromise;
          }

          const books = greet("books");
          console.log(books);
          books.then((result) => {
            console.log(result);
          });
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
}

getData();
