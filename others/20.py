checkString = "aа"  # Русские и английские "а"
text = str(input("Введите текст: ")).lower()
counter = 0
for i in range(len(text)):
    if text[i] in checkString and i == 0:
        counter += 1
    elif text[i] in checkString and text[i - 1] == " ":
        counter += 1
print("Число слов, начинающихся с буквы 'а': ", counter)
