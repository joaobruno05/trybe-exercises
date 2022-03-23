# from random import choice

import random

import json


def guess_pokemon():
    n = 0
    wrong_shot = True
    with open("pokemons.json", mode="r") as file:
        pokemons = json.load(file)["results"]
        drawn_pokemon = random.choice(pokemons)["name"]
        # print(drawn_pokemon)
        while wrong_shot:
            user_answer = input("Quem é esse pokemon?\n")
            n += 1
            if user_answer == drawn_pokemon:
                print("Você acertou!!!")
                wrong_shot = False
            elif n == len(drawn_pokemon):
                print("Você errou :(")
                wrong_shot = False
            else:
                print("Dica: ", end="")
                for i in range(0, n):
                    print(drawn_pokemon[i], end="")
            print("")


guess_pokemon()
