expression = str(input("Введите проверяемое выражение: "))
counter = 0
for i in range(len(expression)):
    if expression[i] == 'ы' and (expression[i-1]=="ж" or expression[i-1]=="ш"):
        counter += 1
expression = expression.replace("жы", "жи").replace("шы", "ши")
print(expression, '\nОшибок: ', counter)
