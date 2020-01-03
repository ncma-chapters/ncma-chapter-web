# NCMA Chapter Website

This is the main repo for NCMA Chapter websites.

## Getting Started Locally



## How to work with `svg`s

You are welcome to come up with other solutions, but we typically do this:

1. `npm install -g svg-to-react-cli` (https://www.npmjs.com/package/svg-to-react-cli)
2. Navigate to the directory where there is your svg (e.g. `example.svg`)
3. Run `svgtoreact example Example`, this then creates `Example.js` (the React component for the svg). You can then import this component like any other React commponent.

## How to work via styles?

 `styled-components` (https://www.styled-components.com/).

 ### How to theme with styled-components?
  - There is a theme object located in the globals directory, this is where styled are declared
  - ThemeProvider is located in Layout where theme is passed to all child styled-components

  `ThemeProvider` (https://www.styled-components.com/docs/api#themeprovider).
