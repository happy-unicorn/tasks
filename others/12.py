import random

data = []
# Заполняем data проверочными данными, массив включающий в себя двумерные массивы по каждой группе
for k in range(3):
    group = []
    for i in range(20):
        people = []
        for j in range(3):
            people.append(random.randint(3, 5))  # Допустим, что все сдали
        group.append(people)
    data.append(group)

info = []  # Ищем средние по группам
for group in data:
    value = int()
    for people in group:
        for mark in people:
            value += mark
    value /= 20 * 3
    info.append(value)

bestMark = int(0)  # Находим лучшую группу
bestGroup = int()
for i in range(2):
    if info[i] > bestMark:
        bestMark = value
        bestGroup = i + 1

print('Лучшая группа: ', bestGroup)