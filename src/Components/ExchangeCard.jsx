import { VStack, Image, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function ExchangeCard(props) {
    return (


        <>
            <a href={props.url} target="blank">

                <VStack width={"52"}
                    shadow={"lg"} p={"8"} borderRadius={"lg"}
                    transition={"all 0.35"}
                    m={"4"}
                    css={{
                        "&:hover": {
                            transform: "scale(1.1)"
                        }
                    }}>
                    <Image src={props.img} alt={"exchange"}
                        w={"10"}
                        h={"10"}
                        objectFit={"contain"} />
                    <Heading size={"md"} noOfLines={1}>{props.rank}</Heading>
                    <Text noOfLines={1}>{props.name}</Text>
                </VStack>
            </a>
        </>



    )
}

export default ExchangeCard