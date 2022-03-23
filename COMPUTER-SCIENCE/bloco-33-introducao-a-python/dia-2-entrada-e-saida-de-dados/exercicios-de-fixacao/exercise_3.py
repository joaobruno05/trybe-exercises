minimum_grade = 6
new_file = []

file = open("alunos_python.txt", mode="r")
for line in file:
    line = line.split()
    if int(line[1]) < minimum_grade:
        new_file.append(line[0])

file.close()

with open("new_file.txt", mode="w") as other_file:
    other_file.writelines(new_file)
