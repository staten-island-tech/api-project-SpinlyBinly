const URL = "https://openlibrary.org/search.json";

async function getData(URL){
    try {
        const response = await fetch(URL)
        document.getElementById("api-response").textContent = data.content;
      console.log(data)
  } catch (error) {
    console.log(error)
  }
}
getData(URL);