from pymongo import MongoClient


with MongoClient() as client:
    db = client.library
    for book in db.books.find():
        print(book["categories"])
