# atom-julia-lsp-client package

Install `atom-ide-ui` and `linter` for some working UI elements.

`Pkg.add("LanguageServer")` and `Pkg.checkout("LanguageServer")` are necessary to get this running.
For diagnostics, set `atom.config.set('core.debugLSP', true)` in `./lib/atom-julia-lsp-client.js` (that
might or might not kill performance though).
