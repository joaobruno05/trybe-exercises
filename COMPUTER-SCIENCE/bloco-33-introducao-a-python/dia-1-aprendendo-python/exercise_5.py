def wall_size(size):
    amount_ink = size / 3
    number_cans = round((amount_ink / 18) + 0.5)
    price = 80 * number_cans
    total = (number_cans, price)
    print(total)


wall_size(250)
