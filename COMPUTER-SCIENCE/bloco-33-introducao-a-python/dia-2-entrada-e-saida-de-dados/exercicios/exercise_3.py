import random


def guess_word():
    n = 0
    with open("list.txt", mode="r") as list_of_things:
        for thing in list_of_things:
            chosen_word = random.choice(thing.split())
            while n < 3:
                scrambled_word = "".join(
                    random.sample(chosen_word, len(chosen_word))
                )
                word = input(f"Advinhe que palavra é essa: {scrambled_word}\n")
                if word == chosen_word:
                    print(f"A palavra era '{chosen_word.upper()}'.")
                    print("Parabéns, você ganhou!!!")
                    break
                else:
                    n += 1
                    print("Resposta errada, tente novamente.")
                    if n == 3:
                        print("Que pena, você perdeu :(")
                        print(f"A palavra era '{chosen_word.upper()}'.")


guess_word()
