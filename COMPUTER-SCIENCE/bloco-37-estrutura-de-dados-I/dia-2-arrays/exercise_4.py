def students_present(entradas, saidas, instante_buscado):
    result = 0
    for i in saidas:
        if i > instante_buscado:
            result += 1

    return result
