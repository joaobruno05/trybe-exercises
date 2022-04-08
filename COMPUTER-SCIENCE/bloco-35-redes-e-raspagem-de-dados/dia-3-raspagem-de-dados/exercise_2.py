import requests


def get_data_github():
    base_url = "https://api.github.com/users"

    request = requests.get(base_url)
    contents = request.json()

    for content in contents:
        login = content["login"]
        url = content["url"]
        print(login, url)


get_data_github()
