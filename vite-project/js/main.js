const endpoint = `https://openlibrary.org/search.json`;

const DOMSelectors = {
  button: document.querySelector("#btn"),
  input: document.querySelector("#input"),
  container: document.querySelector("#container"),
};

function clearFields() {
  DOMSelectors.container.innerHTML = "";
};

async function getData(apiEndpoint) {
  try {
    DOMSelectors.button.addEventListener("click", async function (event) {
      event.preventDefault();
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      const value = DOMSelectors.input.value;
      const URL = `https://openlibrary.org/search.json?q=${value}&fields=key,title,author_name,editions`;
      console.log(URL.replaceAll(" ", "+"));
      clearFields();
      data.docs.forEach((book) => {
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class=card><h1>${book.title}</h1>
        <img class="imgs"src="${book.img}" alt="">
        <h3 id="h3" class="">${book.author}</h3>
        </div>`
    );
  });
    });
    
         if (response.status != 200) throw new Error(response.statusText);
        document.querySelector("h1").textContent = data.docs;
        document.querySelector("h2").textContent = "Not found, please search for something else.";
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
getData(endpoint);

