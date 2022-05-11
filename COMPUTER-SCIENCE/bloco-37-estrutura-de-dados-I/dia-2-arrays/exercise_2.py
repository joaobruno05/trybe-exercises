import random
import numpy as np


def mix_cards(array_numbers):
    x = np.array(array_numbers)
    random.shuffle(x)
    return list(x)
