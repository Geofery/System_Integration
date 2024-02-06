import random

files = ["01a_File_formats_bonanza/me.csv", "01a_File_formats_bonanza/me.json", "01a_File_formats_bonanza/me.txt", "01a_File_formats_bonanza/me.xml","01a_File_formats_bonanza/me.yaml" ]

f = open(random.choice(files), "r")
print(f.read())

f.close()

