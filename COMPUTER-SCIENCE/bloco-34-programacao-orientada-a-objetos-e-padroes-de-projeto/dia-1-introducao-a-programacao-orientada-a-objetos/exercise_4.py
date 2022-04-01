class Estabelecimento:
    def __init__(self, nome, produto, quantidade, valor_unitario):
        self.nome = nome
        self.produto = produto
        self.quantidade = quantidade
        self.valor_unitario = valor_unitario

    def calcular_conta(self):
        valor_total = self.quantidade * self.valor_unitario
        return valor_total


cafeteria = Estabelecimento("Cafeteria", "café", 4, 2.50)

print(cafeteria.nome)
print(cafeteria.produto)
print(cafeteria.quantidade)
print(cafeteria.valor_unitario)

print(cafeteria.calcular_conta())
