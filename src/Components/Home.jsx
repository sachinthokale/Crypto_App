import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion"

function Home() {
    return (



        <Box bgColor={"blackAlpha.900"} w={"full"}>
            <motion.div style={{
                height: "80vh"
            }}
                animate={{
                    translateY: "20px",

                }}
                transition={{
                    duration: "2",
                    repeat: "Infinity",
                    repeatType: "reverse"
                }}
            >
                <Image w={"full"} h={'600px'}
                    filter={"grayscale(1)"} objectFit={"contain"} src={'bitcoin_home.png'}
                />

            </motion.div>

            <Text fontSize={"6x1"} textAlign={"center"} fontWeight={"bold"}
                color="whiteAlpha.700"
                mt={-10}>  Xcrypto
            </Text>
        </Box>
    )
}

export default Home
