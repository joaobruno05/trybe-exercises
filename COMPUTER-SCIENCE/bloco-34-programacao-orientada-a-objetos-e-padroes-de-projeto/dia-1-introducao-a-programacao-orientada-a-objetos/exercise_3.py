import math


class Geometria:
    def __init__(self, nome, raio):
        self.nome = nome
        self.raio = raio

    def calcular_area(self):
        area = math.pi * math.pow(self.raio, self.raio)
        return round(area, 2)


objeto_circulo = Geometria("Círculo", 2)

print(objeto_circulo.nome)
print(objeto_circulo.raio)
print(objeto_circulo.calcular_area())
