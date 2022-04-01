class Televisão:
    def __init__(self, tamanho, resolucao, ligada, volume):
        self.tamanho = tamanho
        self.resolucao = resolucao
        self.ligada = ligada
        self.volume = volume

    def ligar(self):
        if self.ligada is False:
            self.ligada = True
            print("A TV foi ligada com sucesso!!!")
        else:
            print("A TV já está ligada.")

    def aumentar_volume(self):
        self.volume += 1


televisao_1 = Televisão("42 polegadas", "HD", False, 50)
televisao_2 = Televisão("50 polegadas", "Full HD", True, 70)

print(televisao_1.ligada)
televisao_1.ligar()
print(televisao_1.ligada)

televisao_2.ligar()
print(televisao_2.volume)
televisao_2.aumentar_volume()
print(televisao_2.volume)
