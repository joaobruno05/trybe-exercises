def max_stability_time(array):
    sum = 0
    array_values = []

    for index in range(len(array)):
        if array[index] == 1:
            sum += 1

        if (array[index] == 0) or (index == len(array) - 1):
            array_values.append(sum)
            sum = 0

    return sorted(array_values)[-1]
