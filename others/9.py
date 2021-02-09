import random

data = []  # Заполняем data проверочными данными
for i in range(18):
    row = []
    for j in range(36):
        row.append(random.randint(0, 1))
    data.append(row)

soldOut = []
for railwayCarriage in data:  # Суммируем проданные места
    counter = int()
    for place in railwayCarriage:
        counter += place
    soldOut.append(counter)

print(soldOut)