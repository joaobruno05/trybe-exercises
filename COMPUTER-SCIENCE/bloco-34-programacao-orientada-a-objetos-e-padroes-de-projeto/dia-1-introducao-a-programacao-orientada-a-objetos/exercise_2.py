class Retangulo:
    def __init__(self, largura, altura):
        self.largura = largura
        self.altura = altura

    def calcular_area(self):
        area = self.largura * self.altura
        return area

    def calcular_perimetro(self):
        perimetro = 2 * self.largura + 2 * self.altura
        return perimetro


objeto_geometrico = Retangulo(5, 3)

print(objeto_geometrico.calcular_area())
print(objeto_geometrico.calcular_perimetro())
