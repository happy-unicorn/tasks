expression = str(input("Введите выражение: ")).lower()
expression = expression.replace(" ", "")
if expression == expression[::-1]:
    print("Это палиндром!")
else:
    print("Это не палиндром!")

