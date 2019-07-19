# Proof-of-concept pattern for Redux actions & reducers

I recently learned how to incorporate Redux and Redux-Thunk into a React app. But I dislike some of the patterns & conventions modelled by the [official Redux guide](https://redux.js.org/advanced/async-actions).

After some fussing, renaming things, and adopting certain constraints, I've found a Redux pattern that I think I'll be happy with. This app demonstrates that pattern.

Relevantest files are in `assets/js/react/` and `assets/js/redux`.

See also:

  * https://github.com/topherhunt/cheatsheets/blob/master/js/redux.md
  * https://github.com/topherhunt/cheatsheets/blob/master/_howto/phoenix_react_redux/phoenix_react_redux.md


## Running it

  * Ensure you have Elixir installed (see mix.exs for the right version; see https://github.com/topherhunt/cheatsheets/blob/master/elixir/elixir_syntax.md#installing-elixir-on-osx for tips on installing Elixir)
  * `mix deps.get`
  * `npm i --prefix assets`
  * `mix phx.server`
  * Go to http://localhost:4000
  * You should see a Reddit feed with the "reactjs" sub selected and autoloaded.
