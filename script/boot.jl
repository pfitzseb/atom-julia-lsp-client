using LanguageServer
using SymbolServer

server = LanguageServerInstance(stdin, stdout, true, expanduser("~/.julia/environments/v1.0"), "", Dict())
run(server)
