// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");
var table = d3.select("#ufo-table");
var tbody = table.select("tbody");

function buildTable(datap) {
  tbody.html("");
  var trow;
  datap.forEach((datarow) => {
    trow = tbody.append("tr");
    Object.values(datarow).forEach((val) => {
      var cell = tbody.append("td");
      cell.text(val);
  }
  );      
  });
};

submit.on("click", function () {
  
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(dates => dates.datetime === inputValue);

  console.log(filteredData);

  var date = filteredData.datetime;
  var city = filteredData.city;
  var state = filteredData.state;
  var country = filteredData.country;
  var shape = filteredData.shape;
  var durationMinutes = filteredData.durationMinutes;
  var comments = filteredData.comments;

  buildTable(filteredData)

});

