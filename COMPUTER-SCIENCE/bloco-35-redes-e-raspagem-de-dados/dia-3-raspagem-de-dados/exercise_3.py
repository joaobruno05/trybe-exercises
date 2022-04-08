import requests


def show_success():
    request = requests.get(
        "https://scrapethissite.com/pages/advanced/?gotcha=headers"
    )
    print(request.status_code)


show_success()
