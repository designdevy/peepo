import BlogLogoLarge from "../components/blogLogoLarge"

import { Box, Grommet, Heading, ResponsiveContext, Text } from "grommet"
import { Github } from "grommet-icons"
import React from "react"
import Bg from "../components/bg"
import Logo from "../components/logo"
import { motion } from "framer-motion"
import theme from "../theme"

const unicorns = []
for (let i = 0; i < 50; i++) {
  const randomNumberX = Math.floor((Math.random() * 10) / 2) + 5
  const randomNumberY = Math.floor((Math.random() * 10) / 2) + 5
  unicorns.push(<Bg key={i} />)
}

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
          {size !== "small" && (
            <motion.div
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
              // animate={{ x: 100, opacity: 0.3 }}
              // transition={{
              //   yoyo: Infinity,
              //   duration: 2,
              //   ease: "easeInOut",
              // }}
              style={{
                position: "absolute",
                zIndex: 1,
                top: "3em",
                left: "3em",
                backgroundColor: "#161B3D",
                borderRadius: "10%",
                width: "3em",
                height: "3em",
                // height: {{ size } !== "small" ? "3em" : "1em"}
              }}
            />
          )}
          <Box pad="medium">
            <Logo />
          </Box>
          <Box pad="medium" flex="shrink" align="center" justify="center">
            <Box margin={{ bottom: "medium" }}>
              <Heading margin="none" color="brand" textAlign="center">
                Muhammad Athar
              </Heading>
            </Box>
            <Box
              flex
              pad="small"
              direction={size !== "small" ? "row" : undefined}
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
                  // {
                  //   type: "jiggle",
                  //   duration: 1000,
                  //   delay: 400,
                  // },
                ]}
              >
                <Text color="brand" weight="bold">
                  Design Technologist
                </Text>
              </Box>
              <Box pad="small" justify="center" align="center">
                <Text color="brand">by profession</Text>
              </Box>
            </Box>
            <Box
              flex
              pad="small"
              direction={size !== "small" ? "row" : undefined}
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
                <Text color="brand" weight="bold">
                  Polyglot
                </Text>
              </Box>
              <Box pad="small" justify="center" align="center">
                <Text color="brand">by hobby</Text>
              </Box>
            </Box>
            <Box pad="small" direction={size !== "small" ? "row" : undefined}>
              <Box pad="small" justify="center" align="center">
                <Text color="brand">founder and author at</Text>
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
                <Box justify="center">
                  <a
                    style={{ lineHeight: 0 }}
                    href="https://www.designdev.io"
                    target="_blank"
                  >
                    <BlogLogoLarge height="32px" />
                  </a>
                </Box>
                <Box justify="center">
                  <Text color="brand" weight="bold">
                    .io
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box pad="medium" justify="end">
            <a href="https://github.com/designdevy" target="_blank">
              <Github color="brand" />
            </a>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </Grommet>
)
