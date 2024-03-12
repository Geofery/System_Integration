# Database Granular Access Documentation

### Windows:
Download postgresql: [click here](https://www.postgresql.org/download/)

### Mac:
brew install postgresql

### Connect postgreSQL
psql "sslmode=require hostaddr=34.89.136.78 user=Rasmus dbname=postgres"<br/>
password: Rasmus1234

### Tables overview
| Table name      | Permission              | 
|-----------------|-------------------------|
| city            | Full access             |
| house           | Read only               |
| country         | No access               |

### city
| Colums          | Permission              | 
|-----------------|-------------------------|
| city_id         | Full access             |
| city_name       | Full access             |
| zipcode         | Full access             |

### house
| Colums          | Permission              | 
|-----------------|-------------------------|
| house_id        | Read only               |
| house_num       | Read only               |
| street_name     | Read only               |

### country
| Colums          | Permission              | 
|-----------------|-------------------------|
| country_id      | No access               |
| country_name    | No access               |
| inhabitants     | No access               |


### Documentation postgreSQL deployment
![Alt text](image.png)
![Alt text](image-4.png)
![Alt text](image-2.png)
![Alt text](image-3.png)
