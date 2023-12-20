let URL = `https://openlibrary.org/search.json`;

const DOMSelectors = {
  button: document.querySelector("#btnTitle"),
  input: document.querySelector("#inptTitle"),
};
console.log(DOMSelectors.button);
async function getData(URL) {
  try {
    DOMSelectors.button.addEventListener("click", async function (event) {
      const response = await fetch(URL);
      const data = await response.json();
      event.preventDefault();
      const value = DOMSelectors.input.value;
      URL = `https://openlibrary.org/search.json?q=${value}&fields=key,title,author_name,editions`;
      let x = document.URL.textContent;
      console.log(URL.replaceAll(" ", "+"));
    });
    if (response.status != 200) throw new Error(response.statusText);
    document.querySelector("h1").textContent = data.docs;
    document.querySelector("h2").textContent =
      "Not found, please search for something else.";
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);

//variable = text.content
//replace all spaces w +

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

function populate(arr) {
  arr.forEach((el) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class=card><h1>${el.firstName} ${el.lastName}</h1>
      <img class="imgs" src="${el.img}" alt="">
      <h3 id="h3" class="">${el.description}</h3>
      </div>`
    )
  );
}

populate(opps);
function filters() {
  DOMSelectors.buttons.forEach((btn) =>
    btn.addEventListener("click", function () {
      let category = btn.textContent.toLowerCase();
      let newArr = opps.filter((el) => el.janeWin.includes(category));
      clearFields();
      populate(newArr);
    })
  );
}
filters();
