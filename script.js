const apiURL = "https://api.countapi.xyz/hit/apkhoror.github.io/social-links";

// Fetch data dari CountAPI
fetch(apiURL, {
  method: "GET",
  mode: "no-cors",
})
  .then((response) => response)
  .then((data) => {
    document.getElementById("visitorCount").textContent = data.value;
  })
  .catch((err) => {
    console.log("Error Fetching data: ", err);
  });
