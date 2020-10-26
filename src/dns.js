let dns = {
    doh_json_api: async (
        domain,
        type = 1,
        edns_subnet = null,
        doh = "https://static.186526.top/doh/google/resolve"
    ) => {
        let list = [
            { type: "A", id: 1 },
            { type: "NS", id: 2 },
            { type: "CNAME", id: 5 },
            { type: "SOA", id: 6 },
            { type: "TXT", id: 16 },
            { type: "AAAA", id: 28 },
        ];
        try {
            new URL(doh);
        } catch (err) {
            throw err;
        }
        let i = new URL(doh);
        i.search = "name=" + domain;
        if (typeof type === "number") {
            i.search += "&type=" + type;
        } else if (i.host !== "cloudflare-dns.com") {
            for (let x in list) {
                if (list[x].type === type) {
                    i.search += "&type=" + list[x].id;
                    break;
                }
            }
        }
        if (edns_subnet !== null) {
            i.search += "&edns_client_subnet=" + edns_subnet;
        }
        let answer = await fetch((i.href), {
            headers: {
                accept: "application/dns-json",
            },
        });
        return answer.json();
    }
};
export { dns };