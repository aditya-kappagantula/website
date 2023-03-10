const theme = {
  "initialColorModeName": "light",
  "breakpoints": [
    "@media only screen and (min-width : 845px)",
    "@media only screen and (min-width : 992px)"
  ],
  "space": {
    none: "0rem",
    xxxs: "0.125rem",
    xxs: "0.25rem",
    xs: ".5rem",
    s: "0.75rem",
    m: "1rem",
    l: "2rem",
    xl: "4rem",
    xxl: "8rem",
    xxxl: "16rem",
  },
  "size": {
    none: "0rem",
    xxxs: "0.125rem",
    xxs: "0.25rem",
    xs: ".5rem",
    s: "0.75rem",
    m: "1rem",
    l: "2rem",
    xl: "4rem",
    xxl: "8rem",
    xxxl: "16rem"
  },
  "fonts": {
    "body": "\"Avenir Next\", system-ui, sans-serif",
    "heading": "inherit",
    "monospace": "Menlo, monospace"
  },
  "fontSizes": {
    small: ".75em",
    body: "1em",
    h4: "14em",
    h3: "16em",
    h2: "20em",
    h1: "24em",
  },
  "fontWeights": {
    "body": 400,
    "highlight": 500,
    "heading": 600,
    "bold": 700
  },
  "lineHeights": {
    "body": "1.75rem",
    "heading": "1.25rem"
  },
  "radii": {
    "s": ".5rem ",
    "m": "1rem",
  },
  "borders": {
    light: "1px solid rgb(0,0,0,0.2)",
    dark: "1px solid #149414",
  },
  "colors": {
    "text": "#07284E",
    "icon": "#149414",
    "heading": "#6A620B",
    "title": "#6F2020",
    "background": "#C2D1B4",
    "highlight": "#422800",
    "highlightText": "#6F2020",
    "importantText": "#F7DF3E",
    "buttonText": "#FFF",
    "britishGreen": "#004225",
    "modes": {
      "dark": {
        "heading": "#AAA",
        "title": "#ACACAC",
        "icon": "#C2D1B4",
        "text": "#149414", 
        "background": "#333",
        "highlight": "#004225",
        "highlightText": "#FFF",
        "buttonText": "#FFF",
        "britishGreen": "#004225"
      }
    }
  },
  "styles": {
    "root": {
      "::selection": {
        "color": "#149414",
        "background": "#FEFEFE",
      },
      "height": "100%",
      "fontFamily": "body",
      "fontWeight": "body"
    },
    "h1": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": "body"
    },
    "h2": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 4
    },
    "h3": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 3
    },
    "h4": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 2
    },
    "h5": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 1
    },
    "h6": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 0
    },
    "p": {
      "color": "text",
      "fontFamily": "body",
      "fontWeight": "body",
      "lineHeight": "body"
    },
    "a": {
      "color": "text",
      "textDecoration": "none"
    },
    "pre": {
      '.comment, .prolog, .doctype, .cdata, .punctuation, .operator, .entity, .url': {

        color: 'gray'
      },
      '.property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .regex, .important, .variable':
        {
          color: 'red'
        },
      '.atrule, .attr-value, .keyword': {
        color: 'blue'
      },
      '.selector, .attr-name, .string, .char, .builtin, .inserted': {
        color: 'green'
      }
    },
    "table": {
      "width": "100%",
      "borderCollapse": "separate",
      "borderSpacing": 0
    },
    "th": {
      "textAlign": "left",
      "borderBottomStyle": "solid"
    },
    "td": {
      "textAlign": "left",
      "borderBottomStyle": "solid"
    },
    "img": {
      "maxWidth": "100%"
    },
  }
}

export default theme