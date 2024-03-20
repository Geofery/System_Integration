### User Guide
Create a webhook with one of the endpoints, add the body to the post. 
| Method   | Url                                          | Description                            | Body   |
|----------|----------------------------------------------|----------------------------------------|--------|
| POST     | https://locutus.serveo.net/payment/refunded  | Subscribe on payment refund events     |    X   |
| POST     | https://locutus.serveo.net/payment/success   | Subscribe on Payment success events    |    X   |
| POST     | https://locutus.serveo.net/payment/failed    | Subscribe on Payment failed events     |    X   |

### Body Example
```` Json 
{
    "url": "your url here"
}
````

### API Endpoints
| Method   | Url                                          | Description                            | Body   |
|----------|----------------------------------------------|----------------------------------------|--------|
| GET      | https://locutus.serveo.net/ping              | Pings all subscribers                  |        |
| POST     | https://locutus.serveo.net/payment/refunded  | Subscribe on payment refund events     |    X   |
| POST     | https://locutus.serveo.net/payment/success   | Subscribe on Payment success events    |    X   |
| POST     | https://locutus.serveo.net/payment/failed    | Subscribe on Payment failed events     |    X   |
| DELETE   | https://locutus.serveo.net/payment/refunded  | Unsubscribe on payment refund events   |    X   |
| DELETE   | https://locutus.serveo.net/payment/success   | Unsubscribe on Payment success events  |    X   |
| DELETE   | https://locutus.serveo.net/payment/failed    | Unsubscribe on Payment failed events   |    X   |


### Integrator documentation

![Alt text](image.png)
![Alt text](image-1.png)
![Alt text](image-2.png)
![Alt text](image-3.png)
![Alt text](image-4.png)
![Alt text](image-5.png)


