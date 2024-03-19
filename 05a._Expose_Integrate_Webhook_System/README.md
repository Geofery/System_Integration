### Event endpoints
| Method | Url                                          | Description                          | 
|--------|----------------------------------------------|--------------------------------------|
| GET    | https://locutus.serveo.net/payment/refunded  | Subscribe on payment refund events   |
| GET    | https://locutus.serveo.net/payment/success   | Subscribe on Payment success events  |
| GET    | https://locutus.serveo.net/payment/failed    | Subscribe on Payment failed events   |
| GET    | https://locutus.serveo.net/ping              | pings all subscribers                |


### Body
```` Json 
{
    "url": "your url here"
}
````
