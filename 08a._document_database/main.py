from sqlalchemy import create_engine, MetaData
import os

# Define the SQLAlchemy database URL
db_url = 'insert db url here'
print(db_url)

# Create a SQLAlchemy engine
engine = create_engine(db_url)

# Create a MetaData object
metadata = MetaData()

# Reflect the database schema
metadata.reflect(bind=engine)

# Print table names and their columns
for table in metadata.sorted_tables:
    print(f"Table: {table.name}")
    for column in table.columns:
        print(f"    {column.name}: {column.type}")
    print()
