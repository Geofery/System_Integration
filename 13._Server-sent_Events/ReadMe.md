Understand how date affects systems and communication between services.
-Time Zones: Different services may operate in different time zones, leading to potential issues with synchronization and data consistency.
- Formats: Variations in date and time formats (e.g., YYYY-MM-DD, DD/MM/YYYY, ISO 8601) can cause parsing errors and misunderstandings between services.
- Daylight Saving Time (DST): Changes due to DST can lead to unexpected shifts in time, affecting scheduled tasks and logs.

Understands challenges and edge cases when working with date and why this is important during integration.
- Leap Years: Handling dates like February 29th in leap years.
- End of Month: Operations involving the end of the month need careful consideration, especially for months with varying lengths.
- Cross-Timezone Communication: Ensuring consistent handling of dates and times when services are distributed across multiple time zones.
- Precision: Differences in the level of precision required (e.g., seconds, milliseconds) can affect data integrity.


Understands client polling, short polling, long polling and the pros and cons of each approach.

SHORT POLLING: 
- Definition: The client frequently sends requests to the server to check for updates at regular intervals.

Pros:
- Simple to implement.
- Works with existing HTTP infrastructure.

Cons:
- Inefficient due to frequent requests, even when no updates are available.
- Increased load on server and network.

LONG POLLING: 
- Definition: The client sends a request to the server and the server holds the connection open until new data is available.

Pros:
- Reduces the number of requests compared to short polling.
- More efficient in terms of network and server load.

Cons:
- More complex to implement.
- Can lead to connection timeouts and requires re-establishing connections.

Understands SSE and can explain how to implement it. Has an example ready.
- Definition: A server pushes updates to the client over a single, long-lived HTTP connection.

Pros:
- Efficient one-way communication from server to client.
- Simple to implement using EventSource API in JavaScript.
- Built-in support for reconnection and event IDs.

Cons:
- Limited to one-way communication (server to client).
- Not suitable for real-time bidirectional communication.
- Browser support is generally good but not universal.
