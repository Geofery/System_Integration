import websockets

async def handle_new_websocket(websocket, path):
    async for message in websocket:
        await websocket.send(message)