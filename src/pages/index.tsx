import BlogLogoSmall from "../components/blogLogoSmall"

import { Box, Grommet, Heading, ResponsiveContext, Text } from "grommet"
import { Github } from "grommet-icons"
import React, { Component } from "react"
import Logo from "../components/logo"
import theme from "../theme"

export default () => (
  <Grommet theme={theme} full>
    <ResponsiveContext.Consumer>
      {size => (
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
            <Box margin={{ bottom: "medium" }}>
              <Heading margin="none" color="dark-2" textAlign="center">
                Muhammad Athar
              </Heading>
            </Box>

            <Box
              flex
              pad="small"
              direction={size === "small" ? "column" : "row"}
            >
              <Box
                pad="small"
                elevation="small"
                justify="center"
                align="center"
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
              <Box pad="small" justify="center" align="center">
                by profession
              </Box>
            </Box>
            <Box
              flex
              direction="row"
              pad="small"
              direction={size === "small" ? "column" : "row"}
            >
              <Box
                pad="small"
                elevation="small"
                justify="center"
                align="center"
                animation={{
                  type: "fadeIn",
                  duration: 1000,
                  delay: 600,
                }}
              >
                Polyglot
              </Box>
              <Box pad="small" justify="center" align="center">
                by hobby
              </Box>
            </Box>
            <Box
              flex
              pad="small"
              direction={size === "small" ? "column" : "row"}
            >
              <Box pad="small" justify="center" align="center">
                founder and author at
              </Box>
              <Box
                justify="center"
                alignSelf="center"
                pad="small"
                elevation="small"
                direction="row"
                animation={{
                  type: "fadeIn",
                  duration: 1000,
                  delay: 800,
                }}
              >
                <Box
                  margin={{
                    right: "small",
                  }}
                  justify="center"
                >
                  <BlogLogoSmall width="32px" height="32px" />
                </Box>
                <Box justify="center">designDev.io</Box>
              </Box>
            </Box>
          </Box>
          <Box pad="medium" justify="end">
            <a href="https://github.com/designdevy" target="_blank">
              <Github />
            </a>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </Grommet>
)
