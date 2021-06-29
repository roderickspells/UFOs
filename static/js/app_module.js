// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody")

// Building our UFO table
function buildTable(data) {
    // clear any existing data
    tbody.html("");

    //Loop through each object in data
    //Append a row and cell for eachv alue in row
    data.forEach((dataRow) => {
        // append a  row to table body
        let row = tbody.append("tr");

        // Loop through each field in dataRow and
        // add each falvue as table cell (td)
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
      });
}

function handleClick() {
    // Grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //Check for entered date and apply filter
    if (date) {
        // Apply filter to table to keep rows where datetime matches filter datetime
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild table using filtered data
    // @NOTE: If no date was entered, filteredData will be original tableData

    buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build table when page loads
buildTable(tableData);