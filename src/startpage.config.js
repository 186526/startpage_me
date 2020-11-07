let config = {
  terminal: {
    title: `Terminal at i@186526.xyz`,
    user: 'i',
    hostname: '186526.xyz',
    welcome: 'Welcome to <d color="#00f501">186526.xyz</d> terminal',
    actions: [],
  },
  friends: [
    {
      name: 'Skrshadow',
      description: '是红雨 昆卡昆卡斯哈斯哈',
      url: 'https://blog.skrshadown.cn',
    },
    {
      name: 'Radium-Bit',
      description: '在B站py友链的朋友（',
      url: 'https://radium-bit.github.io/',
    },
    {
      name: `JimmyQin's Blog`,
      description: '是大佬的说',
      url: 'https://www.jimmyqin.cn/',
    },
    {
      name: 'Lapis Apple的回收站',
      description: '又是大佬的说',
      url: 'https://laple.top/',
    },
  ],
  neofetch: [
    {
      name: 'describe',
      value: '啥都不会的屑',
    },
    {
      name: 'UseOS',
      value: 'Arch Linux x86_64',
    },
    {
      name: 'Blog',
      value: '<d href="https://blogging.186526.xyz">blogging.186526.xyz</d>',
    },
    {
      name: 'Telegram',
      value: '<d href="https://t.me/real186526">@real186526</d>',
    },
    {
      name: 'Github',
      value: '<d href="https://github.com/186526">@186526</d>',
    },
    {
      name: 'email',
      value: '<d href="mailto:i@186526.xyz">i@186526.xyz</d>',
    },
    {
      name: 'Coolapk',
      value:
        '<d href="https://www.coolapk.com/u/848581.">https://www.coolapk.com/u/848581.</d>',
    },
    {
      name: 'GPG [i@186526.xyz]',
      value:
        '<d href="https://i.186526.xyz/pgp_keys.asc">https://i.186526.xyz/pgp_keys.asc</d>',
    },
    {
      name: 'S/MIME Key [i@186526.xyz]',
      value:
        '<d href="https://i.186526.xyz/i@186526.xyz.pem">https://i.186526.xyz/i@186526.xyz.pem</d>',
    },
    {
      name: 'Shell',
      value: '<d del>nonsh 114.514</d>',
    },
  ],
  ga: {
    enabled: true,
    id: 'G-PVVC00CJ26',
  },
  pwa: {
    enabled: true,
    sw_enabled: true,
  },
};
config.terminal.prefix = `<d color="#00f501">${config.terminal.user}@${config.terminal.hostname}</d><d color="white">:</d><d color="blue">~</d><d color="white">$</d> `;
config.friends = ((a) => {
  let b = '';
  b += `<d color="#ceedf2">My friend</d>\n`;
  for (let i in a) {
    b += `        <d color="#00cdcd">name</d>:<d color="#7f7f7f">${a[i].name}</d>\n`;
    b += `        <d color="#00cdcd">description</d>:<d color="#7f7f7f">${a[i].description}</d>\n`;
    b += `        <d color="#00cdcd">url</d>:<d color="#7f7f7f" href="${a[i].url}">${a[i].url}</d>\n`;
    b += `        ------\n`;
  }
  return b;
})(config.friends);
config.neofetch = (async (a) => {
  let b = '';
  let c = await fetch('./avatar');
  if (c.status === 200) {
    b += await c.text();
  } else {
    throw 'Server Error';
  }
  b += `<d color="#7f7f7f">${config.terminal.user}@${config.terminal.hostname}</d>\n`;
  b += '--------------------------\n';
  for (let i in a) {
    b += `<d color="#7f7f7f"> ${a[i].name}</d>: ${a[i].value}\n`;
  }
  return b;
})(config.neofetch);
config.ga.enabled = ((a) => {
  if (a === 'G-PVVC00CJ26' && window.location.host == '186526.xyz') {
    return true;
  } else if (window.location.host.search('localhost') != -1) {
    return false;
  } else {
    return config.ga.enabled;
  }
})(config.ga.id);
export { config };
