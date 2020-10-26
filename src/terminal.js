var $ = (a) => {
    return document.querySelector(a);
};
var create = (a) => {
    return document.createElement(a);
};
var json2css = (a) => {
    return JSON.stringify(a, 4).
        slice(1, JSON.stringify(a).length - 1).
        replace(new RegExp(',', 'gm'), '  ').
        replace(new RegExp('"', 'gm'), '').
        replace(/:{/ig, "{");
};
var getrandomid = () => {
    var result = '';
    for (var i = 0; i < 16; i++) {
        if (i === 0) {
            result += "F";
        } else {
            result += Math.floor(Math.random() * 16).toString(16);
        }
    }
    return result.toUpperCase();
};
class terminal {
    constructor(config = {
        blur: {
            type: false,
            opacity: "2px",
            background: "https://api.ixiaowai.cn/api/api.php",
        },
    }, style = {
        height: "100%;",
        width: "auto;",
        "font-family": "'JetBrains Mono',Fira Code,Sarasa Mono SC,Cascadia Code,Menlo,Consolas,monaco,monospace;",
        "font-variant-ligatures": "none;",
        "font-size": "10px",
    }) {
        this.config = config;
        this.style = style;
        this.id = getrandomid();
        this.create();
    }
    create() {
        this.container = create("div");
        this.container.classList = "terminal-container";
        this.container.style = json2css(this.style);
        this.container.id = this.id;
    }
    mount(dom) {
        this.mountplace = dom;
        this.dom = $(dom);
        this.dom.appendChild(this.container);
        this.dom = this.dom.querySelector("#" + this.id);
        // this.bindevent();
    }
    refresh() {
        $(this.mountplace).removeChild(this.dom);
        this.dom = $(this.mountplace);
        this.dom.appendChild(this.container);
        this.dom = this.dom.querySelector("#" + this.id);
    }
    // refresh(container){
    //     $(this.mountplace).removeChild(this.dom);
    //     this.dom = $(this.mountplace);
    //     this.dom.appendChild(container);
    //     this.dom = this.dom.querySelector("#"+this.id);
    // }
    // bindevent(){
    //     Object.defineProperty(
    //         this,"container",{
    //             get:function(value){
    //                 console.log(this);
    //             },
    //             set:function(value){
    //                 let container = value;
    //                 this.refresh(container);
    //             }
    //         }
    //     );
    // }
}
export { terminal };