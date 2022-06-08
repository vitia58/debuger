const WebSocket = require('ws');
const wsServer = new WebSocket.Server({port: 9000});
const clientList = [];
wsServer.on('connection', client=>{
    const data = {ws:client,ip:client._socket.address().address,random:Math.random()}
    console.log(data.address)
    clientList.push(data)
    client.on("message",msg=>{
        clientList.filter(c=>(c.ip==data.ip||c.ip.includes("192.168")&&data.ip.includes("192.168"))&&c.random!=data.random).forEach(({ws})=>{
            ws.send(msg.toString("utf-8"))
        })
    })
});