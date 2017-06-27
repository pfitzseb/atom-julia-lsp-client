using Compat
using JSON
using URIParser
using LanguageServer

conn = STDOUT
(outRead, outWrite) = redirect_stdout()

server = LanguageServerInstance(STDIN, conn, true)
run(server)
