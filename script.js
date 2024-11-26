const apiURL = "./data.json";

// Fetch data dari CountAPI
fetch(apiURL, {
  method: "GET",
  mode: "no-cors",
})
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("visitorCount").textContent = data.value;
  })
  .catch((err) => {
    console.log("Error Fetching data: ", err);
  });
