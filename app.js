var WIDTH = 300;
var HEIGHT = 200;

d3.select("svg")
    .attr("width", WIDTH)
    .attr("height", HEIGHT);

var nodesData =  [
    {"name": "Travis", "sex": "M"},
    {"name": "Rake", "sex": "M"},
    {"name": "Diana", "sex": "F"},
    {"name": "Rachel", "sex": "F"},
    {"name": "Shawn", "sex": "M"},
    {"name": "Emerald", "sex": "F"}
];

var linksData = [
    {"source": "Travis", "target": "Rake"},
    {"source": "Diana", "target": "Rake"},
    {"source": "Diana", "target": "Rachel"},
    {"source": "Rachel", "target": "Rake"},
    {"source": "Rachel", "target": "Shawn"},
    {"source": "Emerald", "target": "Rachel"}
];

var nodes = d3.select("#nodes")
    .selectAll("circle")
    .data(nodesData)
    .enter()
    .append("circle");

d3.forceSimulation()
    .nodes(nodesData)
    .force("charge_force", d3.forceManyBody())
    .force("center_force", d3.forceCenter(WIDTH / 2, HEIGHT / 2)) //position centering force at center x,y coords
    .force("links", d3.forceLink(linksData)
        .id(function(datum){
            return datum.name
        }))
    .on("tick", function(){
        nodes.attr("cx", function(datum) { return datum.x; })
            .attr("cy", function(datum) { return datum.y; });
    });
