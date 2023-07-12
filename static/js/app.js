// read in the JSON data:
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// const promise = d3.json(url);
// console.log("Data Promise: ", promise)


let selectedItem = "940"; // #todo change this to be dynamic later on user selection of dropdown.


let data = {};

// Fetch the JSON data and console log it to confirm imported:
// split out the three arrays within the JSON data into separate variables:
d3.json(url).then(
    function(response) {
    console.log(response);
    data = response;
    names = response["names"];
    console.log(names);
    metadata = response["metadata"];
    console.log(metadata);
    samples = response["samples"];
    console.log(samples);

    updateDashboard();
    }
);

// This function is to ensure that Dashboard is updated after API call is completed. I think...
// #todo selectedItem will become a parameter to be passed in this function. Figure that out later.
function updateDashboard() {

    console.log(data)

};


// I need to figure out how to get the relevant data (sample values, otu ids, and otu labels) into
// separate arrays. Populate those from my "response" variable.
// Try using .map() for this.

// // part 1: Bar chart ---------------------------------------------------------------------------------
// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.


// initialize the arrays for the bar chart data:
let sample_values = [];



let otu_ids = [];



let otu_labels = [];



// // use For loop to populate the arrays:
// for (let i = 0; i < data.length; i++) {
//     let row = data[i];
//     sample_values.push(row.someName);
//     otu_ids.push(row.otu_ids);
//     otu_labels.push(row.otu_labels);
//     samples.push(row.samples);
// };

// console.log(sample_values);


// Trace 1 for sample_values:
// let trace1 = {
//     x: 

// }