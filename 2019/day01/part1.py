import math

with open('input.txt') as fp:
    line = fp.readline()
    sum = 0
    while line:
        # "//" is a floor division apparently :~) that's pretty cool
        sum += int(line) // 3 - 2
        # sum += math.floor(int(line) / 3) - 2
        line = fp.readline()
    print(sum)
