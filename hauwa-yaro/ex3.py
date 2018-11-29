# write a function that takes your name
# and returns the first and the last characters of your name
# e.g. Chukwudi becomes Ci

name = input("Please enter a name: ")
def nameCont(name):
    name = name[0] + name[len(name) - 1]
    return name
print(nameCont(name))



