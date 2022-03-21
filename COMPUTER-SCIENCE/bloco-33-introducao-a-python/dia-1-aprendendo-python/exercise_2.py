def arithmetic_average(*list):
    x = 0
    for number in list:
        sum = x + number
        x = sum
    average = sum / len(list)
    print(average)


arithmetic_average(2, 4, 9)
