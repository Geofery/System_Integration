files = [
    "01a_File_formats_bonanza/me.csv",
    "01a_File_formats_bonanza/me.json",
    "01a_File_formats_bonanza/me.txt",
    "01a_File_formats_bonanza/me.xml",
    "01a_File_formats_bonanza/me.yaml"
]

file_contents = [
    f"Content of file with extension {file_path.split('.')[1]}:\n{open(file_path, 'r').read()}\n"
    for file_path in files
]

print(''.join(file_contents))
