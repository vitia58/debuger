const ws = new WebSocket("ws://93.79.41.156:9000")
ws.onopen = ()=>{
    ws.onmessage = ({data})=>{
        const {level,body} = JSON.parse(data)
        console[level](...body)
    }
}