let buildGraph = (sa) => {
    let nodes = [];
    let nxtEdges = [];
    let linkEdges = [];

    for(let i = 0; i < sa.t.length; i++) {
        let color = sa.t[i].isClone ? 'lightblue' : 'lightgreen';
        if(!i) color = 'dodgerblue';
        nodes.push({id: i, label: sa.t[i].label, color: color});
    }

    for(let i = 0; i < sa.t.length; i++) {
        if(sa.t[i].link != -1) {
            linkEdges.push({from: i, to: sa.t[i].link});
        }

        for(let j in sa.t[i].nxt) {
            nxtEdges.push({from: i, to: sa.t[i].nxt[j], label: j});
        }
    }

    const showNxt = document.getElementById('showNxt').checked; 
    const showLink = document.getElementById('showLink').checked;

    let edges = [];

    if(showNxt) edges.push(...nxtEdges);
    if(showLink) edges.push(...linkEdges);

    showNetwork(nodes, edges);
}