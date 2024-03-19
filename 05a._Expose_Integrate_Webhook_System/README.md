### Event endpoints
| Method   | Url                                          | Description                            | Body   |
|----------|----------------------------------------------|----------------------------------------|--------|
| GET      | https://locutus.serveo.net/ping              | Pings all subscribers                  |        |
| POST     | https://locutus.serveo.net/payment/refunded  | Subscribe on payment refund events     |    X   |
| POST     | https://locutus.serveo.net/payment/success   | Subscribe on Payment success events    |    X   |
| POST     | https://locutus.serveo.net/payment/failed    | Subscribe on Payment failed events     |    X   |
| DELETE   | https://locutus.serveo.net/payment/refunded  | Unsubscribe on payment refund events   |    X   |
| DELETE   | https://locutus.serveo.net/payment/success   | Unsubscribe on Payment success events  |    X   |
| DELETE   | https://locutus.serveo.net/payment/failed    | Unsubscribe on Payment failed events   |    X   |


### Body
```` Json 
{
    "url": "your url here"
}
````
