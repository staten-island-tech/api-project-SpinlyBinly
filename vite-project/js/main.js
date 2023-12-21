let URL = `https://openlibrary.org/search.json`;

const DOMSelectors = {
  buttonTitle: document.querySelector("#btnTitle"),
  buttonAuthor: document.querySelector("#btnAuthor"),
  inputTitle: document.querySelector("#inptTitle"),
  inputAuthor: document.querySelector("#inptAuthor"),
};

async function getData(URL) {
  try {
    DOMSelectors.buttonTitle.addEventListener("click", async function (event) {
      const response = await fetch(URL);
      const data = await response.json();
      event.preventDefault();
      const value = DOMSelectors.inputTitle.value;
      URL = `https://openlibrary.org/search.json?q=${value}&fields=key,title,author_name,editions`;
      console.log(URL.replaceAll(" ", "+"));
      const authors = authors.filter((author) => author.author_name.includes(inputAuthor));
      clearFields();
      losses.forEach((loss) => {
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class=card><h1>${loss.firstName} ${loss.lastName}</h1>
        <img class="imgs"src="${loss.img}" alt="">
        <h3 id="h3" class="">${loss.description}</h3>
        </div>`
    });
    DOMSelectors.buttonAuthor.addEventListener("click", async function (event) {
      const response = await fetch(URL);
      const data = await response.json();
      event.preventDefault();
      const value = DOMSelectors.inputTitle.value;
      URL = `https://openlibrary.org/search.json?q=${value}&fields=key,title,author_name,editions`;
      let x = document.URL.textContent;
      console.log(URL.replaceAll(" ", "+"));
      const authors = authors.filter((author) => author.author_name.includes(inputAuthor));
      clearFields();
      losses.forEach((loss) => {
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class=card><h1>${loss.firstName} ${loss.lastName}</h1>
        <img class="imgs"src="${loss.img}" alt="">
        <h3 id="h3" class="">${loss.description}</h3>
        </div>`
    );
  });
});
      const response = await fetch(URL);
      const data = await response.json();
      event.preventDefault();
      const value = DOMSelectors.inputAuthor.value;
      URL = `https://openlibrary.org/search.json?q=${value}&fields=key,title,author_name,editions`;
      let x = document.URL.textContent;
      console.log(URL.replaceAll(" ", "+"));
};
/*     if (response.status != 200) throw new Error(response.statusText);
    document.querySelector("h1").textContent = data.docs;
    document.querySelector("h2").textContent =
      "Not found, please search for something else.";
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);

function greet(title) {
  const greetPromise = new Promise(function (resolve, rejected) {
    resolve(`Title: ${title}`);
  });
  return greetPromise;
}

const books = greet("books");
console.log(books);
books.then((result) => {
  console.log(result);
});

function clearFields() {
  DOMSelectors.container.innerHTML = "";
}
 */