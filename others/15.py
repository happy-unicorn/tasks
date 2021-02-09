text = str(input("Введите текст: "))
numberString = ""
counter = 0
for symbol in text:
    if symbol.isdigit() and len(symbol) == 1:
        counter += 1
        numberString += symbol
print("Колличество цифр: ", counter, "\nСтрока цифр: ", numberString)
