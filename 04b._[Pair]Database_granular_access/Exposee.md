# Database Granular Access Documentation

### Windows:
Download postgresql: [click here](https://www.postgresql.org/download/)

### Mac:
brew install postgresql

### Connect postgreSQL
psql "sslmode=require hostaddr=34.89.136.78 user=Rasmus dbname=postgres"<br/>
password:

### Tables overview
| Table names      | Permission              | 
|-----------------|-------------------------|
| city            | Full access             |
| house           | Read only               |
| country         | No access               |
| user            | Read name               |

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

### user
| Colums          | Permission              | 
|-----------------|-------------------------|
| user_id         | No access               |
| user_name       | Read only               |
