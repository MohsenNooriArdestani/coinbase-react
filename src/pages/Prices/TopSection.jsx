import React from "react";
import {
  Image,
  Text,
  InputLeftElement,
  InputGroup,
  Input,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import radicleIcon from "assets/icons/radicle.png";
import aliceIcon from "assets/icons/alice.png";
import tokenIcon from "assets/icons/token.png";
import ampIcon from "assets/icons/AMP.png";

const marketCards = [
  {
    title: "Top gainer",
    name: "Radicle",
    icon: radicleIcon,
    des: { text: " price change", leftMark: "+37.13%", rightMark: "" },
  },
  {
    title: "New listing",
    name: "MyNeighborAlice",
    icon: aliceIcon,
    des: { text: "Added ", leftMark: "", rightMark: "Feb 24" },
  },
  {
    title: "Most visited",
    name: "Ampleforth Governance Token",
    icon: tokenIcon,
    des: { text: "views", leftMark: "+447.09%", rightMark: "" },
  },
  {
    title: "Free crypto",
    name: "Amp",
    icon: ampIcon,
    des: { text: "", leftMark: "Earn $3", rightMark: "" },
  },
];

function TopSection() {
  return (
    <VStack align="stretch" p="24px" gap="2">
      <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap="2">
        <VStack align="start">
          <Text variant="body1" ss="span" color="gray.500">
            In the past 24 hours
          </Text>
          <Text variant="h3" as="h3" display="inline-flex">
            Market is up
            <Text ml="3" color="green.400">
              1.32%
            </Text>
          </Text>
        </VStack>
        <GridItem>
          <InputGroup>
            <InputLeftElement top="50%" transform="translateY(-50%)">
              <SearchIcon color="gray.500" />
            </InputLeftElement>
            <Input type="text" placeholder="Search" size={"lg"} />
          </InputGroup>
        </GridItem>
      </Grid>
      <Grid templateColumns={"repeat(auto-fit , minmax(200px , 1fr))"} gap={6}>
        {marketCards.map(({ title, name, des, icon }) => (
          <VStack
            border="1px solid"
            borderColor="gray.300"
            rounded="xl"
            align={{ base: "center", lg: "start" }}
            p="18px"
            cursor="pointer"
            _hover={{ backgroundColor: "gray.50" }}
            key={name}
          >
            <Text variant="p" as="span" fontWeight={500}>
              {title}
            </Text>
            <Image src={icon} boxSize="40px" />
            <Text variant="body1" as="span" fontWeight={500}>
              {name}
            </Text>
            <Text variant="p" as="span" display="inline-flex">
              <Text mr="2" color="blue.400">
                {des.leftMark}
              </Text>
              {des.text}
              <Text ml="2" color="blue.400">
                {des.rightMark}
              </Text>
            </Text>
          </VStack>
        ))}
      </Grid>
    </VStack>
  );
}

export default TopSection;
