const theme = {
  "breakpoints": [
    "@media only screen and (min-width : 845px)",
    "@media only screen and (min-width : 992px)"
  ],
  "space": {
    none: '0rem',
    xxs: '0.25rem',
    xs: '.5rem',
    s: '0.75rem',
    m: '1rem',
    l: '2rem',
    xl: '4rem',
    xxl: '8rem',
    xxxl: '16rem'
  },
  "fonts": {
    "body": "\"Avenir Next\", system-ui, sans-serif",
    "heading": "inherit",
    "monospace": "Menlo, monospace"
  },
  "fontSizes": {
    body: 12,
    h4: 14,
    h3: 16,
    h2: 20,
    h1: 24,
  },
  "fontWeights": {
    "body": 400,
    "heading": 600,
    "bold": 700
  },
  "lineHeights": {
    "body": 1.75,
    "heading": 1.25
  },
  "colors": {
    "text": "#000",
    "background": "#fff",
    "primary": "#11e",
    "secondary": "#c0c",
    "highlight": "#e0e",
    "muted": "#f6f6ff",
    "modes": {
      "dark": {
        "text": "#fff",
        "background": "#000",
        "primary": "#0fc",
        "secondary": "#0cf",
        "highlight": "#f0c",
        "muted": "#011"
      }
    }
  },
  "styles": {
    "root": {
      "height": "100%",
      "fontFamily": "body",
      "lineHeight": "body",
      "fontWeight": "body"
    },
    "h1": {
      "color": "text",
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading",
      "fontSize": 5
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
      "color": "primary"
    },
    "pre": {
      "fontFamily": "monospace",
      "overflowX": "auto",
      "code": {
        "color": "inherit"
      }
    },
    "code": {
      "fontFamily": "monospace",
      "fontSize": "inherit"
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
    }
  }
}

export default theme