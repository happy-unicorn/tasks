text = str(input("Введите текст: ")).lower()
counter = 0
for symbol in text:
    if symbol.isalpha:
        counter += 1
print("Число букв в тексте: ", counter)
