def numeric_values(N):
    list = []
    for n in range(1, N + 1):
        list.append(n)
        if N % 3 == 0 and N % 5 == 0:
            word = "FizzBuzz"
        elif N % 3 == 0:
            word = "Fizz"
        elif N % 5 == 0:
            word = "Buzz"
        else:
            word = N
    list[N - 1] = word
    print(list)


numeric_values(3)
numeric_values(5)
numeric_values(7)
numeric_values(15)
