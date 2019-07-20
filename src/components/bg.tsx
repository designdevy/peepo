import { motion } from "framer-motion"
import { Box, Text } from "grommet"
import React, { Component } from "react"

class Bg extends Component {
  constructor(props) {
    super(props)
    this.style = {}
  }

  componentWillMount() {
    this.style.top = window.innerHeight * Math.random() + "px"
    this.style.left = (window.innerWidth / 3) * Math.random() + "px"
    this.size = Math.floor(5 * Math.random()) + 7
    this.style.height = this.size + "px"
    this.style.width = this.size + "px"
  }

  render() {
    return (
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
          top: 100,
          left: 100,
          borderRadius: "100%",
          backgroundColor: "#161B3D",
          width: "20px",
          height: "20px",
        }}
      ></motion.div>
    )
  }
}

export default Bg
