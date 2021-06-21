import config from "../../blog.config"
import { MDXProvider } from "@mdx-js/react"
import { Box, Heading } from "theme-ui"
import Nav from "./Nav"
import Blurb from "../mdx/blurb.mdx"
import Image from "next/image"
import { Button, Pane, Text, majorScale } from "evergreen-ui"

const Header = (props) => (
  <MDXProvider>
    <Box as="header" sx={{ textAlign: "center", pt: 105 }}>
      <Image src="/img/ak-logo.png" width={200} height={75} />
      <Heading sx={{ fontSize: 6, pb: 2, px: 3 }} as="h1">
        {config.title}
      </Heading>
      <Heading sx={{ pb: 3, px: [3, 4] }}>{config.subtitle}</Heading>
      <Box sx={{ pb: 3 }}>
        <Blurb />
      </Box>
      <Nav />
    </Box>
  </MDXProvider>
)

export default Header
