Knows how to send multi-part forms over HTML and how to set it up in at least one server language.
- POST request, you have to encode the data that forms the body of the request in some way.

When you are writing client-side code:
- use multipart/form-data when your form includes any <input type="file"> elements
- otherwise you can use multipart/form-data or application/x-www-form-urlencoded but application/x-www-form-urlencoded will be more efficient

Can think of ways store media files.
- Store in application folder: Faster then saving in DB
- Store in DB, use GUID to create unique name for file. 

Can explain how to send media files from client to server.

Can explain how to send media files from server to client.