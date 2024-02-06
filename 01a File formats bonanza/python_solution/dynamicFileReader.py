import random

files = ["01a File formats bonanza/me.csv", "01a File formats bonanza/me.json", "01a File formats bonanza/me.txt", "01a File formats bonanza/me.xml","01a File formats bonanza/me.yaml" ]

f = open(random.choice(files), "r")
print(f.read())

