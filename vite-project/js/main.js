const DOMSelectors = {
  button: document.querySelector("#btn"),
  input: document.querySelector("#input"),
  container: document.querySelector("#container"),
};

function clearFields() {
  DOMSelectors.container.innerHTML = "";
}   
async function getData() {
/*   try { */
    DOMSelectors.button.addEventListener("click", async function (event) {
      event.preventDefault();
      const values = DOMSelectors.input.value;
      const response = await fetch(`https://openlibrary.org/search.json?q=${values}&fields=key,title,author_name,editions`);
      /* if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } */
      const data = await response.json();
      clearFields()
/*       if (data.docs.length === 0) { */
        DOMSelectors.container.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
            <h2>No results found. Please try another search.</h2>
          </div>`
        );
      } /* else {
        data.docs.forEach((value) => {
          
          const authors = value.author_name ? value.author_name.join(', ') : 'Unknown Author';
 */
          DOMSelectors.container.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
              <h1>${value.title}</h1>
              <h3 id="h3" class="">${authors}</h3>
            </div>`
          );
        }/* );
      }
    });
  } catch (error) {
    console.error(error);
  }
}
 */
getData();