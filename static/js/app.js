// read in the JSON data:
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// const promise = d3.json(url);
// console.log("Data Promise: ", promise)


// let selectedItem = "940"; // #todo change this to be dynamic later on user selection of dropdown.


let data = {};

// Fetch the JSON data and console log it to confirm imported:
// split out the three arrays within the JSON data into separate variables:
d3.json(url).then(
    function(response) {
    console.log(response);
    data = response;
    updateDashboard("940"); // #todo need to update this to be dynamic based on user dropdown selection
    }
);

// This function is to ensure that Dashboard is updated after API call is completed. I think...
// #todo selectedItem will become a parameter to be passed in this function. Figure that out later.
function updateDashboard(selectedItem) {
    console.log(data)
    let samples = data.samples;

    let arrayIndex = data.names.findIndex(val => val == selectedItem);

    // dynamically 
    let otu_ids = samples[arrayIndex].otu_ids;
    let otu_labels = samples[arrayIndex].otu_labels;
    let sample_values = samples[arrayIndex].sample_values;

    // update demographic info here.

    // plot horizontal chart here. These individual charts can all be setup in separate functions outside this update dashboard function
        // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
        // Use sample_values as the values for the bar chart.
        // Use otu_ids as the labels for the bar chart.
        // Use otu_labels as the hovertext for the chart.


    // plot the gauge chart here.




    // plot the bubble chart here.



};



// I need to figure out how to get the relevant data (sample values, otu ids, and otu labels) into
// separate arrays. Populate those from my "response" variable.
// Try using .map() for this???