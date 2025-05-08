let btn = document.getElementById('build');
let showNxt = document.getElementById('showNxt');
let showLink = document.getElementById('showLink');

let sa = new SuffixAutomaton("");

let rebuild = () => {
    let input = document.getElementById('input').value;
    sa = new SuffixAutomaton(input);

    buildGraph(sa);
}

btn.addEventListener('click', rebuild);
showNxt.addEventListener('change', rebuild);
showLink.addEventListener('change', rebuild);

document.getElementById("showNxt").checked = true;
rebuild();