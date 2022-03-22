file = open("alunos_python.txt", mode="r")

minimum_grade = 6

for line in file:
    list = line.split()
    if int(list[1]) < minimum_grade:
        print(list[0])
file.close()
