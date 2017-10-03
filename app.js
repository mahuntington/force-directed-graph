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

var nodes = d3.select("g")
        .selectAll("circle")
        .data(nodesData)
        .enter()
        .append("circle");

d3.forceSimulation()
    .nodes(nodesData)
    .force("charge_force", d3.forceManyBody())
    .force("center_force", d3.forceCenter(WIDTH / 2, HEIGHT / 2)) //position centering force at center x,y coords
    .on("tick", function(){
        nodes.attr("cx", function(datum) { return datum.x; })
            .attr("cy", function(datum) { return datum.y; });
    });
