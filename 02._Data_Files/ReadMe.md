** Can argue about different build tools for Python and understands their pros and cons.
PyBuilder
PROS:
- Open Source.
- Building, testing and packaging Python Applications.
- Enabling pre and post processing.
- plugins - enabling developers to add new features. 

CONS:
- Plugin Ecosystem not solving all usecases
- Not the most used, therefor support and resources can be limited.

Poetry
PROS:
- All in one solution
- Virtual Environment eliminates the need for additional tools like virtualenv by integrating virtual environment management inside the tool itself.
- Packing projects consolidating setup.py, requirements.txt, and Pipfile duties into a single file, Poetry simplifies the packaging process
- Managing dependencies (pyproject.toml) contains additional project metadata in addition to dependency specifications.
- Reproducibility: Poetry generates a lock file (poetry.lock) to ensure deterministic builds, making reproducing the exact dependency environment across different systems easier.


CONS:
- Smaller ecosystem then other tools
- Low community acceptance. 
- Environment Adaptation: Poetry is a relatively new tool, which might still acclimate to the broader Python ecosystem.

SCons
PROS: 
- Flexibility
- Effective Build Management: It ensures that only the required components are rebuilt when changes happen by automating dependency analysis between source files.
- Cross-Platform Support: SCons offers developers a cross-platform build solution because it is made to function flawlessly across a variety of operating systems.
- Built-in Tools and Variables: SCons has built-in tools and variables for everyday build tasks. This streamlines the development process by making tasks like compilation, linking, and testing easier.

CONS: 
- Initial Complexity: There may be a learning curve for developers who are unfamiliar with SCons to grasp its Python-based setup and build methodology. This could affect the process of onboarding.
- Community and Resources: SCons are well acclaimed; however, their use in the Python ecosystem may not be as widespread as other build tools.
- Build File Verbosity: SCons build files have been known to get verbose according to certain developers when working on larger projects.

** Can use poetry.
```
cd pre-existing-project
poetry init
poetry add <package>
poetry shell
```

** Understands encoding, serialization and Marshalling.Knows about charsets and encoding types.
- Serialization: When you serialize an object, only the member data within that object is written to the byte stream; not the code that actually implements the object.

- Marshalling: Term Marshalling is used when we talk about passing Object to remote objects(RMI). In Marshalling Object is serialized(member data is serialized) + Codebase is attached.