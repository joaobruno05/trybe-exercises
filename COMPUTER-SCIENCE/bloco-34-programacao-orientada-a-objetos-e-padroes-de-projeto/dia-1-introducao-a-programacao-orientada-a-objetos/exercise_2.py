class Geometria:
    def __init__(self, nome, largura, altura):
        self.nome = nome
        self.largura = largura
        self.altura = altura

    def calcular_area(self):
        area = self.largura * self.altura
        return area

    def calcular_perimetro(self):
        perimetro = 2 * self.largura + 2 * self.altura
        return perimetro


objeto_geometrico = Geometria("Retângulo", 5, 3)

print(objeto_geometrico.nome)
print(objeto_geometrico.largura)
print(objeto_geometrico.altura)
print(objeto_geometrico.calcular_area())
print(objeto_geometrico.calcular_perimetro())
