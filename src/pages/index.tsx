import BlogLogoLarge from "../components/blogLogoLarge"
import BlogLogoSmall from "../components/blogLogoSmall"

import { Box, Grommet, Heading, Text } from "grommet"
import React, { Component } from "react"
import Logo from "../components/logo"
import theme from "../theme"

export default () => (
  <Grommet theme={theme} full>
    <Box
      fill
      flex
      align="center"
      justify="center"
      border={{ color: "brand", size: "large" }}
      pad="medium"
      direction="column"
      overflow={{ horizontal: "hidden" }}
    >
      <Box pad="medium">
        <Logo />
      </Box>
      <Box pad="medium" flex="shrink" align="center" justify="center">
        <Heading margin="none" color="dark-2">
          Muhammad Athar
        </Heading>
        <Box flex direction="row" pad="small">
          <Box
            pad="small"
            elevation="small"
            justify="center"
            animation={[
              {
                type: "fadeIn",
                duration: 1000,
                delay: 200,
              },
              {
                type: "jiggle",
                duration: 1000,
                delay: 400,
              },
            ]}
          >
            Design Technologist
          </Box>
          <Box pad="small" justify="center">
            by profession
          </Box>
        </Box>
        <Box flex direction="row" pad="small">
          <Box
            pad="small"
            elevation="small"
            justify="center"
            animation={{
              type: "fadeIn",
              duration: 1000,
              delay: 600,
            }}
          >
            Polyglot
          </Box>
          <Box pad="small" justify="center">
            by hobby
          </Box>
        </Box>
        <Box flex direction="row" pad="small">
          <Box pad="small" justify="center">
            founder and author at
          </Box>
          <Box
            pad="small"
            elevation="small"
            direction="row"
            animation={{
              type: "fadeIn",
              duration: 1000,
              delay: 800,
            }}
          >
            <Box>
              <BlogLogoSmall width="56px" height="56px" />
            </Box>
            <Box justify="center">
              <Text size="large">designDev.io</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Grommet>
)
