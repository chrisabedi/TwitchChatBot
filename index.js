const tmi = require('tmi.js');

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'ChrisChatmod',
        password: 'tmi.authtoken'
    },
    channels:['chrisabedi'],
};

const client = new tmi.client(options);

client.connect();

client.on("connected", (address,port) => {
    client.action('chrisabedi','ChrisChatmod connected');
});

client.on("chat", function (channel,user,message,self) {


    if ( message === '!game') {
        client.action('chrisabedi',"Chris is getting blasted in ForkNife");
    }
    if ( message === '!ligma') {
        client.action('chrisabedi',"Chris says lickma");
    }
    if ( message === '!potato') {
        client.action('chrisabedi',"Yeah I'm a potato");
    }
    if ( message === '!sens')
        client.action('chrisabedi',"Chris's sens is at X-axis:.08 y-axis:.06")

    if ( message == '!ulikeme')
        client.action('chrisabedi','muah')
});