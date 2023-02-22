/** @jsx jsx */
import { Divider, Flex, Heading, Message, Paragraph, jsx, Link } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => {
  return (
    <Flex sx={{ flexDirection: 'column', flex: 1 }}>
      <Paragraph sx={{ padding: 'm' }}>
        <Heading>Hi There!</Heading>
      </Paragraph>
      <Divider sx={{ ml: 'm' }}/>
      <Flex sx={{ p: 'm' }}>
        <Paragraph sx={{ textAlign: 'justify' }}>
          <StaticImage src="../images/logo.png"  
            sx={{ m: 'xs', float: 'right' }}
            alt="Logo"
            placeholder="blurred"
            layout="fixed"
            width={200}
          />
          I am Aditya Kappagantula, a Frontend engineer and a creative being. <br/><br/>

          Like many others in this world, I share a love for writing and sharing my ideas with others. I used to maintain a blog when blogger was a thing! Overtime, I guess, I got too busy with life and also my perspective towards life has evolved in a different direction. I did try at various times to restart my blogging/writing journey, but then I realized what I wanted was a website and a blog together. I tried my hand at Quora, dev.to, medium but never felt at home on those platforms. I just wanted control over my content. May be it was fight betweem the two personalities within me, a web developer and a content creator, that did not allow me to make progress. <br/><br/>

          Somewhere in this fight, the developer in me came across <code>Markdown</code> language and fell in love with it's simplicity and usablity. The content creator also appreciated it for its adaptability. Then I started exploring static website generators like Jekyll, Gatsby and NextJS. I ended up adopting Gatsby for the time being [...or may be for good??] as it has got plenty of community support and is a mature framework now. <br/><br/>

          I realized, by putting in some efforts, I can build a fairly good website/blog that I can control the styling easily, make it responsive for readers and add content easily. Icing on the cake is the support for Math equations that Gatsby provides through plugins. I spent around two weeks at leisure to build what you are seeing today from scratch while learning the framework. <br/><br/>

          What I really like about the ability in this setup is, I can simply put my content in a Github profile in markdown format and deploy it from there to be delivered for reading in a visually pleasing format on the web. Should there be a need to migrate or put my content else where, Markdown gives me the flexibility to programaticaly alter it as the content will follow a minimal style guide yet retain readability on its own!

        </Paragraph>
      </Flex>
      <Message sx={{ p: 'm', m: 'm', color: 'importantText', textAlign: 'justify' }}>
        Thank you!! <br />
        I would like to thank <Link sx={{ color: '#1B85FF' }} href="https://www.lekoarts.de/">Lennart</Link> and <Link sx={{ color: '#1B85FF' }} href="https://paulie.dev/">Paul Scanlon</Link> for inspiring me to start writing again! Their respective helped me gain confidence about Gatsby and inspired me with design.
      </Message>
    </Flex>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>
