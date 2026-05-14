# Pokedex 2.0

## A collection of the first 151 Pokemon, with a dash of shiny via the REST [PokeApi](https://pokeapi.co/). A modern take on the original [shinydex repo](https://github.com/writhisdown/shinydex)

This an exercise to enhance the original [demo](https://shinydx.com/), written in vanilla JS, using modern React & Vite.

v1 | v2
--- | --- 
![original](https://assets.codepen.io/378806/Screenshot%202026-05-14%20at%207.00.56%E2%80%AFPM.png) | ![new preview 1](https://assets.codepen.io/378806/Screenshot%202026-05-14%20at%206.32.43%E2%80%AFPM.png)
. | ![new preview 2](https://assets.codepen.io/378806/Screenshot%202026-05-14%20at%206.32.55%E2%80%AFPM.png)

---

## Key Improvements

- Parallel data loading for faster rendering
- Loading and error states
- Pagination
- End to end testing

## Stack
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tanstack Query v5](https://tanstack.com/query/latest)
- [SASS](https://sass-lang.com/)
- [Feather Icons](https://github.com/feathericons/react-feather)
- [Playwright](https://playwright.dev/)
- [Vite](https://vite.dev/)

---

## Getting started
**Via local development**

- clone repo
- in a new terminal `cd` into project folder
- run `npm i` to install dependencies
- visit http://localhost:5173/

### Testing
- **For test output via the command line**: run `npx playwright test`
- **To view test via a browser window**: run `npx playwright test --ui`
- **For a detailed test output**: run `npx playwright show-report`

## TODOs:
- add search feature
- add filter feature
- responsive pagination
- improve error handling
- smooth out layout shifts when data is loading
- update tests