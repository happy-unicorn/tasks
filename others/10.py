import random

data = []  # Заполняем data проверочными данными
for i in range(10):
    shop = []
    for j in range(12):
        shop.append(random.randint(50, 100))
    data.append(shop)

info = []  # Массив с средними месячными значениями за год
for shop in data:
    value = int()
    for month in shop:
        value += month
    value /= 12
    info.append(int(value))  # Если нужны числа с десятичной формой уберите int

print(info)  # Вывод, если надо
