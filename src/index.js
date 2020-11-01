import { dns, dig } from "./web.js";
import Term from 'term-web';
var $ = function (a) {
    return document.querySelector(a);
};
let terminal = {};
terminal.term = new Term({
    container: "#terminal-container",
    pixelRatio: 2,
    title: "Terminal at i@186526.xyz",
    prefix: 'i@186526.xyz: ~ <d color="#00f501">$</d> ',
    welcome: 'Welcome to <d color="#00f501">186526.xyz</d> terminal',
    loading: () => 'Please Wait fot a moment……',
    notFound: (val) => `<d color="#00f501">${val}</d> : Command not found`,
    actions: [
        {
            input: /^dig/i,
            output(input, args) {
                if (input === "dig") {
                    return "Usage: dig [+short] host [type]\n";
                } else {
                    if (args._.includes("+short")) {
                        return dig(
                            args._[2],
                            ((b) => {
                                if (typeof (b) == "undefined") {
                                    return "A";
                                }
                                else {
                                    return b;
                                }
                            })(args._[3]),
                            true
                        );
                    } else {
                        return dig(
                            args._[1],
                            ((b) => {
                                if (typeof (b) == "undefined") {
                                    return "A";
                                } else {
                                    return b;
                                }
                            })(args._[2]),
                            false
                        );
                    }
                }
            }
        },
        {
            input: /^curl/i,
            async output(input, args) {
                if (input === "curl") {
                    return "curl url [GET/POST/PUT/DELETE,etc]";
                } else {
                    let a = await fetch(
                        args._[1],
                        ((b) => {
                            if (typeof (b) == "undefined") {
                                return { method: "GET" };
                            } else {
                                return { method: b };
                            }
                        })(args._[2])
                        );
                    return "<pre>"+await a.text()+"</pre>";
                }
            }
        },
        {
            input: /^clear/i,
            output() {
                this.clear();
                return "";
            }
        },
        {
            input: /^aboutme/i,
            async output() {
                let a = await fetch('./neofetch.output');
                if (await a.status === 200) {
                    let b = await a.text();
                    return b;
                } else {
                    throw "Server Error";
                }
            }
        },
        {
            input: /^friend/i,
            async output() {
                let a = await fetch('./friend.output');
                if (await a.status === 200) {
                    let b = await a.text();
                    return b;
                } else {
                    throw "Server Error";
                }
            }
        },
        {
            input: /^about/i,
            output() {
                let a = "";
                a += "<d color='#50fa7b'>186526.xyz & i.186526.xyz</d>\n";
                a += "Copyright © 19191 - 810 <d href='https://186526.xyz' color='yellow'>186526</d>\n";
                a += "Host By <d href='https://vercel.com' color='yellow'>Vercel</d>\n";
                a += "CDN Provider <d href='https://cloudflare.com' color='yellow'>Cloudflare</d>\n";
                a += "Thank <d href='https://github.com/zhw2590582/term-web' color='yellow'>term-web</d>\n";
                return a;
            }
        },
        {
            input: /^help/i,
            output() {
                let a = "";
                a += "<d color='#50fa7b'>dig</d>:<d color='yellow'>dig - DNS lookup utility</d>\n";
                a += "<d color='#50fa7b'>curl</d>:<d color='yellow'>curl - transfer a URL</d>\n";
            }
        }
    ]
});
terminal.term.type("aboutme").then(() => {
    terminal.term.type("friend").then(() => {
        terminal.term.type("about");
    })
});
