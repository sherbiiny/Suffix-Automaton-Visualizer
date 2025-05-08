class State {
    constructor() {
        this.len = 0;
        this.link = -1;
        this.nxt = {};
        this.isClone = false;
        this.label = '';
    }
}

class SuffixAutomaton {
    constructor(s) {
        this.t = [new State()];
        this.lst = 0;

        for(let ch of s) this.add(ch);
        this.dfs(0, '');
    }

    add(c) {
        let me = this.t.length;
        let p = this.lst;
        this.lst = me;

        this.t.push(new State());
        this.t[me].len = this.t[p].len + 1;
        this.t[me].link = 0;

        while(p != -1 && !this.t[p].nxt[c]) {
            this.t[p].nxt[c] = me;
            p = this.t[p].link;
        }

        if(p == -1) return;

        let q = this.t[p].nxt[c];
        if(this.t[q].len == this.t[p].len + 1) {
            this.t[me].link = q;
            return;
        }
    
        let clone = this.t.length;
        this.t.push(new State());
        this.t[clone].len = this.t[p].len + 1;
        this.t[clone].link = this.t[q].link;
        this.t[clone].nxt = this.t[q].nxt;
        this.t[clone].isClone = true;

        while(p != -1 && this.t[p].nxt[c] == q) {
            this.t[p].nxt[c] = clone;
            p = this.t[p].link;
        }

        this.t[q].link = this.t[me].link = clone;
    }

    dfs(v, curr) {
        this.t[v].label = curr;
        for(let j in this.t[v].nxt) {
            this.dfs(this.t[v].nxt[j], curr + j);
        }
    }
}   

