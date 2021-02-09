answer = [0, 1]  # Задаем первые два числа Фиббоначи

for i in range(2, 10):
    number = answer[i - 2] + answer[i - 1]
    answer.append(number)

print(answer)  # Вывод, если надо