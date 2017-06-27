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
    let julia = cp.spawn('julia', [path.resolve(__dirname, '..', 'script', 'boot.jl')])
    return julia
  }
}
atom.config.set('core.debugLSP', false)

JLC = new JuliaLanguageClient()
console.log(JLC)
module.exports = JLC
