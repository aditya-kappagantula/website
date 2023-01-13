import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

const AboutPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        About Us
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
    </main>
  )
}

export default AboutPage

export const Head = () => <title>About Us Page</title>
