let showNetwork = (nodes, edges) => {
    let container = document.getElementById('mynetwork');   

    let data = {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges),
    };

    let options = {
        nodes: {
            shape: 'circle',
            borderWidth: 2,
            margin: 10,
        },

        edges: {
            width: 0.5,
            length: 50,
            arrows: {
                to: {
                    enabled: true,
                    scaleFactor: 1,
                    type: 'arrow'
                }
            },
            color: {
                color: 'black',
                opacity: 0.5
            }
        }, 
    };

    let network = new vis.Network(container, data, options);
}
