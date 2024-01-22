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
  
  function displayCountryInfo() {
    var countriesApiUrl = "https://restcountries.com/v3.1/all";
  
    makeRequest(countriesApiUrl, function (error, countries) {
      if (error) {
        console.error("Error fetching countries:", error);
      } else {
        countries.forEach(function (country) {
          console.log(`Country: ${country.name.common}`);
          console.log(`Region: ${country.region}`);
          console.log(`Sub-region: ${country.subregion}`);
          console.log(`Population: ${country.population}`);
          console.log("------------");
        });
      }
    });
  }
  
  displayCountryInfo();
  