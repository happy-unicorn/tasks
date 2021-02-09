import random

data = []  # Заполняем data проверочными данными
for i in range(20):
    people = []
    for j in range(12):
        people.append(random.randint(50, 100))
    data.append(people)

allCashPeople = []  # Зарплата каждого работника в сумме за год
for people in data:
    cash = int()
    for month in people:
        cash += month
    allCashPeople.append(cash)

print(allCashPeople)

monthAllCash = []
for i in range(12):  # Выплаты в месяц всем
    monthOneCash = int()
    for people in data:
        monthOneCash += people[i]
    monthAllCash.append(monthOneCash)

print(monthAllCash)
