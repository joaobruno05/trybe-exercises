from pymongo import MongoClient

category = input('Escolha a categoria desejada: \n')
print("")
with MongoClient() as client:
    db = client.library
    find_title_books = db.books.find({"categories": category})
    for book in find_title_books:
        print(book["title"])
