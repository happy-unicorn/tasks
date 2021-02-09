import random

data = []  # Заполняем data проверочными данными
for i in range(5):
    course = []
    for j in range(8):
        course.append(random.randint(20, 30))
    data.append(course)

allSt = int()
for course in data:  # Суммируем студентов
    for group in course:
        allSt += group

print(allSt)  # Вывод, если надо
