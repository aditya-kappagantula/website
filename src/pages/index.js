/** @jsx jsx */
import { Divider, Flex, Heading, Message, Paragraph, jsx } from "theme-ui"
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
          I am Aditya Kappagantula, a frontend engineer.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc elit, feugiat ut velit eget, pellentesque accumsan libero. Duis interdum ante sed ipsum imperdiet congue nec non mauris. Quisque ac ultricies nunc. Sed nisi diam, suscipit eu laoreet a, bibendum nec mauris. Aliquam tristique rhoncus ipsum scelerisque egestas. Maecenas rhoncus malesuada mauris, vel porta ex tincidunt non. Duis ac sapien in felis fermentum tristique. Nam a erat faucibus, varius magna ac, interdum tortor. Aenean quis varius mi, nec molestie neque. In dignissim diam in velit pharetra cursus. Integer gravida, arcu non sagittis iaculis, justo leo facilisis augue, consequat mollis risus erat quis velit. In turpis nibh, ornare ut facilisis id, dignissim non enim. Fusce maximus elit sit amet dolor aliquet, et tristique elit eleifend. Aenean ornare tortor sem, at sollicitudin ipsum scelerisque a.
          I am Aditya Kappagantula, a frontend engineer.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc elit, feugiat ut velit eget, pellentesque accumsan libero. Duis interdum ante sed ipsum imperdiet congue nec non mauris. Quisque ac ultricies nunc. Sed nisi diam, suscipit eu laoreet a, bibendum nec mauris. Aliquam tristique rhoncus ipsum scelerisque egestas. Maecenas rhoncus malesuada mauris, vel porta ex tincidunt non. Duis ac sapien in felis fermentum tristique. Nam a erat faucibus, varius magna ac, interdum tortor. Aenean quis varius mi, nec molestie neque. In dignissim diam in velit pharetra cursus. Integer gravida, arcu non sagittis iaculis, justo leo facilisis augue, consequat mollis risus erat quis velit. In turpis nibh, ornare ut facilisis id, dignissim non enim. Fusce maximus elit sit amet dolor aliquet, et tristique elit eleifend. Aenean ornare tortor sem, at sollicitudin ipsum scelerisque a.
        </Paragraph>
      </Flex>
      <Message sx={{ p: 'm', m: 'm', color: 'importantText' }}>
        Thank you!! <br />
        Paul Scanlon for inspiring me to start writing again!
      </Message>
    </Flex>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>
