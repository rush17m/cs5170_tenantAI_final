import asyncio
from sse_starlette import ServerSentEvent

# SSEStream class to handle server-sent events (SSE) in an asynchronous manner
class SSEStream:
    def __init__(self) -> None:
        self._queue = asyncio.Queue()
        self._stream_end = object()

    def __aiter__(self):
        return self
    
    # Asynchronous method to get the next event from the queue
    async def __anext__(self):
        data = await self._queue.get()
        if data is self._stream_end:
            raise StopAsyncIteration
        return ServerSentEvent(data=data)

    # Asynchronous method to send data to the stream
    async def send(self, data):
        await self._queue.put(data)

    # Asynchronous method to close the stream
    async def close(self):
        await self._queue.put(self._stream_end)
