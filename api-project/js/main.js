"https://pokeapi.co/api/v2/pokemon/ditto";
async function getData(URL) {
    try {
    } catch (error) {}
    const response = await fetch(URL);
    console.log(response); 
    const data = await response.json();
    console.log(data);
    if( response.status != 200) 
        throw new Error(response.statusText);
    document.querySelector("h1").textContent = data.content;
    document.querySelector("h2").textContent = data.content;
  }
  catch (error) {
      document.querySelector("h1").textContent = data.content;
      document.querySelector("h2").textContent = "not found, please search for something else"
    }
  getData(URL);
  
  //
  async function getData(){
    let res = await fetch(
      "?api_key="
      );
      let data = await res.json();
  data.results.forEach((movie) => console.log(movie))
  }
  getData();