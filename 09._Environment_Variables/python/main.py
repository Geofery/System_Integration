#from dotenv import config
#from dotenv import load_dotenv


#EXAMPLE 1
from dotenv import dotenv_values, load_dotenv

environment_variables = dotenv_values()
print(environment_variables)
print(environment_variables["MYSQL_PASSWORD"])

#EXAMPLE 2
import os

load_dotenv()
print(os.getenv("MYSQL_PASSWORD"))


