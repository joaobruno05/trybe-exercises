import math


class Circulo:
    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        area = math.pi * math.pow(self.raio, self.raio)
        return round(area, 2)


objeto_circulo = Circulo(2)

print(objeto_circulo.raio)
print(objeto_circulo.calcular_area())
