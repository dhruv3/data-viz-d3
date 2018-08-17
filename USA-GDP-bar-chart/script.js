const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"

fetch(url).then(function(response) {
  response.json().then(function(data){
    createBarChart(data);
  })
});

function createBarChart(dataset={}){
  console.log(dataset);
  const w = 900;
  const h = 500;

  const svg = d3.select("#vizContainer")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

}
