var dns = {
  doh_json_api: async (
    domain,
    type = 1,
    edns_subnet = null,
    doh = 'https://static.186526.top/doh/google/resolve',
  ) => {
    let list = [
      { type: 'A', id: 1 },
      { type: 'NS', id: 2 },
      { type: 'CNAME', id: 5 },
      { type: 'SOA', id: 6 },
      { type: 'TXT', id: 16 },
      { type: 'AAAA', id: 28 },
    ];
    try {
      new URL(doh);
    } catch (err) {
      throw err;
    }
    let i = new URL(doh);
    i.search = 'name=' + domain;
    if (typeof type === 'number') {
      i.search += '&type=' + type;
    } else if (i.host !== 'cloudflare-dns.com') {
      for (let x in list) {
        if (list[x].type === type) {
          i.search += '&type=' + list[x].id;
          break;
        }
      }
    }
    if (edns_subnet !== null) {
      i.search += '&edns_client_subnet=' + edns_subnet;
    }
    let answer = await fetch(i.href, {
      headers: {
        accept: 'application/dns-json',
      },
    });
    return answer.json();
  },
};
function digoutput(domain, results, type, time, short = false) {
  let a = '';
  if (short) {
    a = ((results) => {
      let a = '';
      for (let i in results) {
        a += `${results[i].data}\n`;
      }
      return a;
    })(results);
  } else {
    a = `\n;<<>> Dig at Web 1.0.0 <<>> ${domain} ${type}\n`;
    a += '\n';
    a += ';; QUESTION SECTION:\n';
    a += `;${domain}            IN  ${type}\n\n`;
    a += ';; ANSWER SECTION:\n';
    a += ((results, type, domain) => {
      let a = '';
      for (let i in results) {
        a += `${domain}     ${results[i].TTL} IN ${type}        ${results[i].data}\n`;
      }
      return a;
    })(results, type, domain);
    a += `\n;; Query time: ${time} msec\n`;
    a += `;; SERVER: https://static.186526.top/doh/google/resolve#443 at DOH\n`;
    a += `;; WHEN: ${new Date()}\n\n`;
  }
  console.log(`[Get Command 'dig'] \n Output: \n${a}`);
  return a;
}
async function dig(domain, type, short = false) {
  const starttime = (Math.round(performance.now() * 100) / 100 / 1000).toFixed(
    3,
  );
  let a = dns.doh_json_api(domain, (type = type));
  let b = await a;
  if ((await b.Status) == 0) {
    const endtime = (Math.round(performance.now() * 100) / 100 / 1000).toFixed(
      3,
    );
    return digoutput(
      domain,
      await b.Answer,
      type,
      (endtime - starttime).toFixed(3) * 1000,
      short,
    );
  } else {
    return 'Domain not found';
  }
}
async function curl(input, args) {
  if (input === 'curl') {
    return 'curl url [GET/POST/PUT/DELETE,etc]';
  } else {
    let a = await fetch(
      args._[1],
      ((b) => {
        if (typeof b == 'undefined') {
          return { method: 'GET' };
        } else {
          return { method: b };
        }
      })(args._[2]),
    );
    return '<pre>' + (await a.text()) + '</pre>';
  }
}
export { dns, dig, curl };
