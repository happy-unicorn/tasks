word = str(input("Введите слово: ")).lower()
wordReverse = word[::-1]
print("Слово перевёртыш!" if word == wordReverse else "Слово не перевёртыш!")

