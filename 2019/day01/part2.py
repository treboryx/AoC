import math


def fuel(mass):
    f = math.floor(mass / 3) - 2
    return f + fuel(f) if f > 0 else 0
    # return f > 0 ? f + fuel(f): 0


with open('input.txt') as fp:
    line = fp.readline()
    sum = 0
    while line:
        sum += fuel(int(line))
        line = fp.readline()
    print(sum)
