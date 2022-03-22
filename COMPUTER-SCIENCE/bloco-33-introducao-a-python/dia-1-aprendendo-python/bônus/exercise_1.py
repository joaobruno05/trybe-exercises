def smallest_element(*list):
    smallest_number = 10000
    for number in list:
        if number < smallest_number:
            smallest_number = number
    print(smallest_number)


smallest_element(7, 5, 3, 4, 9)
