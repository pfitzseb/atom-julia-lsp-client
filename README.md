# Atom Language Client for Julia

This package requires `atom-ide-ui` to be installed (either via `apm install atom-ide-ui`
or with the Atom UI).

On the Julia side you should be able to set things up correctly with
```
pkg> add CSTParser#master DocumentFormat#master LanguageServer#master StaticLint#master SymbolServer#master
```

Also make sure to set the path to your Julia binary correctly in this package's settings.
