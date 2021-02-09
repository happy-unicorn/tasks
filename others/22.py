checkArray = ["...", "!", "?", "."]
text = input("Введите текст: ")
counter = (
    len(text.split("..."))
    + len(text.split("?"))
    + len(text.replace("...", "").split("."))
    + len(text.split("!"))
    - 4
)
print("Число предложений в тексте: ", counter)
