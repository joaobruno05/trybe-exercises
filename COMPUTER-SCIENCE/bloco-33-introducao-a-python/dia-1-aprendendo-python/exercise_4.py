def greater_amount_characters(*list):
    x = list[0]
    for name in list:
        if len(name) > len(x):
            x = name
    print(x)


greater_amount_characters("joao", "ricardo", "paulo gustavo")
