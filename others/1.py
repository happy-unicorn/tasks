import random

n = int(input('Введите размер списка: '))
a = int(input('Введите a: '))
b = int(input('Введите b: '))

answer = []

for i in range(0, n):  # Заполняем список случайными значениями
    number = random.randint(a, b)
    answer.append(number)

print(answer)  # Вывод, если нужен
