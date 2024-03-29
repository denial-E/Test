
function makeRequest(url, callback) {
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          callback(null, JSON.parse(xhr.responseText));
        } else {
          callback(xhr.status);
        }
      }
    };
  
    xhr.open("GET", url, true);
    xhr.send();
  }
  
  
  function displayCountryFlags() {
    var countriesApiUrl = "https://restcountries.com/v3.1/all";
  
    makeRequest(countriesApiUrl, function (error, countries) {
      if (error) {
        console.error("Error fetching countries:", error);
      } else {
        countries.forEach(function (country) {
          if (country.flags) {
            console.log(`${country.name.common}: ${country.flags.svg}`);
          }
        });
      }
    });
  }
  displayCountryFlags();
  

