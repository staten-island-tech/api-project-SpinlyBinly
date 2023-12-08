const URL = "https://openlibrary.org/search.json";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
    console.log(data);
    if (response.status != 200) throw new Error(response.statusText);
    document.querySelector("h1").textContent = data.content;
    document.querySelector("h2").textContent = data.content; //change .content to match w my api
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
