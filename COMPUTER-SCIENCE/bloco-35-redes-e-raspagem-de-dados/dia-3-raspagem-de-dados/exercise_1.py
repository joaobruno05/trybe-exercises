import requests


def show_content():
    base_url = "https://httpbin.org/encoding/utf8"

    response = requests.get(base_url)
    content = response.text

    return content


print(show_content())
