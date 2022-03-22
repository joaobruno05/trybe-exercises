def sum_numbers():
    total = 0
    numbers = input("Digite os números: \n")
    list_numbers = numbers.split(" ")
    for number in list_numbers:
        is_natural_number = number.isdigit()
        if is_natural_number:
            type_int_number = int(number)
            total += type_int_number
        else:
            return (
                f"Erro ao somar valores, '{number}' é um valor inválido"
            )
    return total


print(sum_numbers())
