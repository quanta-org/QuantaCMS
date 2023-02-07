import psycopg2


# Connect to the database
conn = psycopg2.connect("dbname=postgres user=cms password=trevorallen host=localhost port=5432")

# Open a cursor to perform database operations
cur = conn.cursor()

# Insert Chrysler into the clients