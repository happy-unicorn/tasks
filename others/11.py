import random

data = []  # Заполняем data проверочными данными
for i in range(18):
    people = []
    for j in range(12):
        people.append(random.randint(50, 100))
    data.append(people)

value = int()  # Находим общую зарплату
for people in data:
    for month in people:
        value += month

print(value)  # Вывод если надо