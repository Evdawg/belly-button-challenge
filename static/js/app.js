// read in the JSON data:
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// const promise = d3.json(url);
// console.log("Data Promise: ", promise)

// let selectedItem = "940"; // #todo change this to be dynamic later on user selection of dropdown.
// dropdown options will be from a list of the names array.

console.log("This is a console log of APP.JS!");
let data = {};
let selDataset = d3.select("#selDataset");

// Fetch the JSON data and console log it to confirm imported:
// split out the three arrays within the JSON data into separate variables:
d3.json(url).then(
    
    function(response) {
        // console.log(response);
        data = response;
        // Assign variables for your data from the JSON:
        let names = data.names;
        let metadata = data.metadata;
        let samples = data.samples;
        
        // sanity check the data variables with console.log:
        console.log("Names: ", names);
        console.log("Metadata: ", metadata);
        console.log("Samples: ", samples);


        populateDropdown();
        updateDashboard(data.names[0]); // #todo need to update this to be dynamic based on user dropdown selection
    }
)

// # todo: review after hours video and find out why this doesnt work. Throwing error. See 4hr time in video.
function populateDropdown() {
    data.names.forEach(
        function(val) {
            selDataset.append("option").attr("value", val).text(val);
        }
    );

    selDataset.on("change", function() {
        let newSelection = d3.event.target.value;
        updateDashboard(newSelection);
    });
}


function updateDemographicInfo(metadata) {
    let demographicInfoDiv =  d3.select("#sample-metadata");
    console.log(metadata);
    demographicInfoDiv.html(
        `Ethnicity: ${metadata.ethnicity}<br>
         Gender: ${metadata.gender}<br>
         Age: ${metadata.age}<br>
         Location: ${metadata.location}<br>
         bbtype: ${metadata.bbtype}<br>
         wfreq: ${metadata.wfreq}
        `
    );
}

// #todo create a horizontal bar chart by setting x and y to values of uhhh... otu_ids, otu_labels and otu_values
// from uhhh... the variables containing arrays below. 
function plotBarChart() {


}


function plotBubbleChart() {


}

// This function is to ensure that the Dashboard is updated after API call is completed. I think...
// #todo selectedItem will become a parameter to be passed in this function. Figure that out later.
// This is your init function that pulls all your other functions together to do the cool stuff:
function updateDashboard(selectedItem) {
    console.log(data);
    let samples = data.samples;
    let arrayIndex = data.names.findIndex(val => val == selectedItem);

    // dynamically populate data variables
    let otu_ids = samples[arrayIndex].otu_ids;
    let otu_labels = samples[arrayIndex].otu_labels;
    let sample_values = samples[arrayIndex].sample_values;
    let metadata = data.metadata[arrayIndex];

    // update demographic info here.
    updateDemographicInfo(metadata);


    // plotly horizontal chart here. These individual charts can all be setup in separate functions outside this update dashboard function
        // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
        // Use sample_values as the values for the bar chart.
        // Use otu_ids as the labels for the bar chart.
        // Use otu_labels as the hovertext for the chart.
    plotBarChart();


    // plot the gauge chart here.
    // plotGauge();



    // plot the bubble chart here.
    plotBubbleChart();
}



// I need to figure out how to get the relevant data (sample values, otu ids, and otu labels) into
// separate arrays. Populate those from my "response" variable.
// Try using .map() for this???