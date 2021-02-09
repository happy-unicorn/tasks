checkString = "аоиеёэыуюяaeoiu"
text = str(input("Введите текст: ")).lower()
counter = 0
for symbol in text:
    if symbol in checkString:
        counter += 1
print("Число букв: ", counter)
