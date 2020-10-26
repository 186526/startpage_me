import { dns } from "./dns.js";
import { terminal } from "./terminal.js";
dns.doh_json_api("186526.xyz", "A", "119.29.29.29").then(e => { console.log(e); });
let a = new terminal();
a.mount("body");