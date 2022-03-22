def triangle_type(a, b, c):
    if (a + b > c) and (a + c > b) and (b + c > a):
        if a == b == c:
            print("Triângulo equilátero")
        elif (a == b) or (a == c) or (b == c):
            print("Triângulo isósceles")
        elif a != b != c:
            print("Triângulo escaleno")
    else:
        print("Não é triângulo")


triangle_type(2, 3, 0)
