import { motion } from "framer-motion"
import { Box } from "grommet"
import React from "react"

const Snake = () => (
  <motion.div
    animate={{ left: [50, 500] }}
    style={{ position: "absolute", zIndex: -1 }}
  >
    <Box pad="xsmall" background="red" />
  </motion.div>
)

export default Snake
