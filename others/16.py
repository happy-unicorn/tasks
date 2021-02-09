text = str(input("Введите текст: "))
theSum = 0
for symbol in text:
    if symbol.isdigit():
        theSum += int(symbol)
print("Cумма цифр: ", theSum)

