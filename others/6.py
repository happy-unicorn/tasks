import random

data = []  # Заполняем data проверочными данными
for i in range(25):
    row = []
    for j in range(36):
        row.append(random.randint(0, 1))
    data.append(row)

soldOut = int()
for place in data[11]:  # Суммируем проданные места на 12 ряду(11 индекс)
    soldOut += place

print(soldOut)  # Вывод, если надо
