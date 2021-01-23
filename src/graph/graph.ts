const Graph = require('graphology');

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addEdge('A', 'B');
graph.addNode('C');

console.log('Number of nodes', graph.order);
console.log('Number of edges', graph.size);

graph.forEachNode(node => {
    graph.forEachNeighbor(node, neighbor => console.log(node, neighbor));
});

const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('../../pdfstoparse/testpdf.pdf');

pdf(dataBuffer).then(function (data) {

    console.log(data.numpages);
    console.log(data.numrender);
    console.log(data.info);
    console.log(data.metadata);
    console.log(data.version);
    console.log(data.text);

});

// I need a class that can act as a middleman between this backend and any client.
// All pdfs shall be on its folder and automatically parsed and read.

// There also needs to be some type of structure that can hold all the information
// in the graph.

// A parser must be able to feed the pdf information to said structure.