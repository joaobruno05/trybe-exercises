import requests
from parsel import Selector


def extract_infos_site():
    base_url = (
        "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
    )

    request = requests.get(base_url)
    selector = Selector(text=request.text)

    title = selector.css(".product_page h1::text").get()
    price = selector.css(".product_page .price_color::text").get()[2:]

    description = selector.xpath(
        '//*[@id="content_inner"]/article/p/text()'
    ).get()
    suffix = "...more"
    if description.endswith(suffix):
        description = description[: -len(suffix)]

    image = selector.css(".product_page img::attr(src)").get()

    books_available = selector.css(
        ".product_page .table tr td::text"
    ).getall()[5]

    for caracter in books_available:
        if caracter.isdigit():
            numbers_books_available = caracter

    print(f"{title}, {price}, {description}, {image}, {numbers_books_available}")


extract_infos_site()
