const cp = require('child_process')
const path = require('path')
const {AutoLanguageClient} = require('atom-languageclient')

class JuliaLanguageClient extends AutoLanguageClient {
  getGrammarScopes () {
    return ['source.julia']
  }

  getLanguageName () {
    return 'Julia'
  }

  getServerName () {
    return 'Juno'
  }

  startServerProcess () {
    return cp.spawn(atom.config.get('atom-julia-lsp-client.jlpath'), [path.resolve(__dirname, '..', 'script', 'boot.jl')])
  }
}
atom.config.set('core.debugLSP', true)

JLC = new JuliaLanguageClient()
JLC.config = {
  'jlpath': {
    type: 'string',
    default: 'julia',
    name: 'Path',
    description: 'The location of the Julia binary.',
    order: 1
  }
}
module.exports = JLC
