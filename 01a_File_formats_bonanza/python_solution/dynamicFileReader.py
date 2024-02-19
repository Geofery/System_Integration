files = [
    "/Users/roed/Documents/GitHub/System_Integration/01a_File_formats_bonanza/me.csv",
    "/Users/roed/Documents/GitHub/System_Integration/01a_File_formats_bonanza/me.json",
    "/Users/roed/Documents/GitHub/System_Integration/01a_File_formats_bonanza/me.txt",
    "/Users/roed/Documents/GitHub/System_Integration/01a_File_formats_bonanza/me.xml",
    "/Users/roed/Documents/GitHub/System_Integration/01a_File_formats_bonanza/me.yaml"
]

def read_file(file_format: str):
    file_contents = [
        open(file_path, 'r').read()
        for file_path in files
        if file_path.lower().endswith(f".{file_format.lower()}")
    ]
    return ''.join(file_contents) if file_contents else f"No file found with format '{file_format}'."
