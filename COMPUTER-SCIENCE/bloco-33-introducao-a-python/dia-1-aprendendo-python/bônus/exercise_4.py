def customer_price(L, c):
    if c == "A":
        if L <= 20:
            discount = 1.90 * L * 0.03
            total_price = 1.90 * L - discount
            return total_price
        else:
            discount = 1.90 * L * 0.05
            total_price = 1.90 * L - discount
            return total_price

    if c == "G":
        if L <= 20:
            discount = 2.50 * L * 0.04
            total_price = 2.50 * L - discount
            return total_price
        else:
            discount = 2.50 * L * 0.06
            total_price = 2.50 * L - discount
            return total_price


print(customer_price(20, "A"))
