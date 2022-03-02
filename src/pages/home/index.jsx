import React from "react";

import { Flex, Text, Input, Button, Image, Link, Box } from "@chakra-ui/react";

import { ReactComponent as Phone } from "assets/images/phone.svg";
import { ReactComponent as BtcBlue } from "assets/icons/BTC-blue.svg";
import ampIcon from "assets/icons/AMP.png";
import solIcon from "assets/icons/SOL.png";
import screenshot from "assets/images/screenshot.webp";
import { ReactComponent as ChartIcon } from "assets/icons/chart.svg";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";
import { ReactComponent as MobileIcon } from "assets/icons/mobile.svg";
import { ReactComponent as StorageIcon } from "assets/icons/storage.svg";
import { ReactComponent as InsuranceIcon } from "assets/icons/insurance.svg";
import { ReactComponent as BestIcon } from "assets/icons/best.svg";
import { ReactComponent as CreateAccountIcon } from "assets/icons/create-account.svg";
import { ReactComponent as LinkAccountIcon } from "assets/icons/link-account.svg";
import { ReactComponent as StartIcon } from "assets/icons/start.svg";

import PriceTable from "./PriceTable";

const features1 = [
  {
    title: "Manage your portfolio",
    des: "Buy and sell popular digital currencies, keep track of them in the one place.",
    Icon: <ChartIcon width="30" height="32" />,
  },
  {
    title: "Recurring buys",
    des: "Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.",
    Icon: <CalendarIcon width="30" height="32" />,
  },
  {
    title: "Mobile apps",
    des: "Stay on top of the markets with the Coinbase app for Android or iOS.",
    Icon: <MobileIcon width="30" height="32" />,
  },
];
const features2 = [
  {
    title: "Secure storage",
    des: "We store the vast majority of the digital assets in secure offline storage.",
    Icon: <StorageIcon width="64" height="64" />,
  },
  {
    title: "Protected by insurance",
    des: "Coinbase maintains crypto insurance and all USD cash balances are covered by FDIC insurance, up to a maximum of $250,000.",
    Icon: <InsuranceIcon width="64" height="64" />,
  },
  {
    title: "Industry best practices",
    des: "Coinbase supports a variety of the most popular digital currencies.",
    Icon: <BestIcon width="64" height="64" />,
  },
];
const features3 = [
  {
    title: "Create an account",
    Icon: <CreateAccountIcon width="64" height="64" />,
  },
  {
    title: "Link your bank account",
    Icon: <LinkAccountIcon width="64" height="64" />,
  },
  {
    title: "Start buying & selling",
    Icon: <StartIcon width="64" height="64" />,
  },
];

function Home() {
  return (
    <>
      <Section1 />
      <PriceTable />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  );
}
export default Home;

const Section1 = () => (
  <Flex p={{ base: "24px", md: "24px 56px" }} align="center">
    <Flex pt="100px" pb="110px" direction="column" w="480px">
      <Flex color="blue.500" fontWeight="500">
        <BtcBlue width="24" height="24" />
        <Text ml="6px">Jump start your portfolio &#10095;</Text>
      </Flex>
      <Text as="h1" variant="h1" maxWidth="425px" my="20px">
        Jump start your crypto portfolio
      </Text>
      <Text as="h3" variant="h3" w="100%" mb="32px">
        Coinbase is the easiest place to buy and sell cryptocurrency. Sign up
        and get started today.
      </Text>

      <form>
        <Flex>
          <Input
            placeholder="Email address"
            size="lg"
            padding={{ base: "5px", md: "20px" }}
            height="auto"
            width="100%"
          ></Input>
          <Button
            ml={{ base: "5px", md: "16px" }}
            variant="primary"
            w={{ base: "auto", md: "200px" }}
            p="24px"
            fontSize="16px"
          >
            Get started
          </Button>
        </Flex>
      </form>
    </Flex>
    <Flex
      flexGrow="1"
      pt="40px"
      pr={{ base: "6px", lg: "24px" }}
      justify="flex-end"
      display={{ base: "none", md: "flex" }}
    >
      <Phone width="426" height="600" />
    </Flex>
  </Flex>
);
const Section2 = () => (
  <Flex
    p="24px"
    flex="1 0 auto"
    justify="space-between"
    direction={{ base: "column", md: "row" }}
  >
    <Flex
      direction="column"
      maxWidth="100vw"
      width={{ base: "100%", lg: "350px" }}
      textAlign={{ base: "center", md: "start" }}
    >
      <Text variant="h2" as="h2">
        Earn up to $13 worth of crypto
      </Text>
      <Text my="16px" as="p" variant="p">
        Discover how specific cryptocurrencies work — and get a bit of each
        crypto to try out for yourself.
      </Text>
      <Button
        variant="primary"
        alignSelf={{ base: "center", md: "flex-start" }}
      >
        Start earning
      </Button>
    </Flex>
    <Flex direction="column" width={{ base: "auto", lg: "560px" }}>
      <Flex
        justify="space-between"
        align="center"
        p="24px"
        transition="box-shadow .6s ease"
        cursor="pointer"
        sx={{ "&:hover": { boxShadow: "2xl" } }}
        minWidth={{ base: "100%", md: "450px" }}
      >
        <Image src={ampIcon} width="38px" height="38px" />
        <Text fontSize="22px" mx="15px">
          Amp
        </Text>
        <Text fontSize="18px" display={{ base: "none", md: "inline-block" }}>
          AMP
        </Text>
        <Text fontSize="16px" color="green.500" flexGrow={1} textAlign="end">
          Earn $3 AMP
        </Text>
      </Flex>
      <Flex
        justify="space-between"
        align="center"
        p="24px"
        transition="box-shadow .6s ease"
        cursor="pointer"
        sx={{ "&:hover": { boxShadow: "2xl" } }}
      >
        <Image src={solIcon} width="38px" height="38px" />
        <Text fontSize="22px" mx="15px">
          Stellar Lumens
        </Text>
        <Text fontSize="18px" display={{ base: "none", md: "inline-block" }}>
          XLM
        </Text>
        <Text fontSize="16px" color="green.500" flexGrow={1} textAlign="end">
          Earn $10 XLM
        </Text>
      </Flex>
      <Flex p="24px">
        <Link fontSize="16px" color="blue.500">
          View more &#10095;
        </Link>
      </Flex>
    </Flex>
  </Flex>
);
const Section3 = () => (
  <Flex direction="column" textAlign="center" p="24px">
    <Text variant="h2" as="h2" fontSize="40px" mb="8px">
      Create your cryptocurrency portfolio today
    </Text>
    <Text variant="p" as="p" my="16px">
      Coinbase has a variety of features that make it the best place to start
      trading
    </Text>

    <Flex
      mt="64px"
      direction={{ base: "column", lg: "row-reverse" }}
      justify="space-between"
      align={{ base: "center", lg: "normal" }}
    >
      <Flex maxWidth="700px">
        <Image src={screenshot} w="100%" />
      </Flex>
      <Flex direction="column" justify="center" mt={{ base: "64px", lg: "0" }}>
        {features1.map((feat, i) => {
          const { Icon, title, des } = feat;
          return (
            <Flex
              direction="row"
              w="100%"
              position="relative"
              mb="40px"
              key={title}
            >
              <Flex
                w="72px"
                h="72px"
                bg="white"
                boxShadow="xl"
                rounded="full"
                align="center"
                justify="center"
                position="absolute"
                left="0"
                top="0"
              >
                {Icon}
              </Flex>
              <Flex
                direction="column"
                align="flex-start"
                justify="center"
                ml="95px"
                textAlign="start"
              >
                <Text variant="h3" as="h3" mb="12px">
                  {title}
                </Text>
                <Text as="p" variant="p" color="gray.500" fontWeight="400">
                  {des}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  </Flex>
);
const Section4 = () => (
  <Flex direction="column" textAlign="center" px="24px" py="64px">
    <Text variant="h2" as="h2" fontSize="40px" mb="8px">
      The most trusted cryptocurrency platform
    </Text>
    <Text variant="p" as="p" my="16px">
      Here are a few reasons why you should choose Coinbase
    </Text>

    <Flex
      mt="64px"
      direction={{ base: "column", lg: "row" }}
      justify="space-between"
      align={{ base: "center", lg: "flex-start" }}
      flexBasis="auto"
    >
      {features2.map(({ title, Icon, des }) => (
        <Flex
          direction="column"
          w="100%"
          align="center"
          mt={{ base: "24px", lg: 0 }}
          p="12px"
          key={title}
        >
          {Icon}
          <Flex
            direction="column"
            align="flex-start"
            justify="center"
            textAlign="center"
          >
            <Text variant="h3" as="h3" my="12px" w="100%">
              {title}
            </Text>
            <Text as="p" variant="p" color="gray.500" fontWeight="400">
              {des}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  </Flex>
);
const Section5 = () => (
  <Flex
    direction={{ base: "column", sm: "row" }}
    justify="space-between"
    align={{ base: "center", sm: "flex-start" }}
    flexBasis="auto"
    py="32px"
    px={{ md: "68px", base: "16px" }}
    bg="rgb(0, 82, 255)"
    color="white"
    rounded="2xl"
  >
    <Flex direction="column" basis="auto" align="center">
      <Text fontSize="56px" fontWeight="700" as="div">
        $547B
      </Text>
      <Text variant="p" as="div" color="gray.200">
        Quarterly volume traded
      </Text>
    </Flex>
    <Flex direction="column" basis="auto" align="center">
      <Text fontSize="56px" fontWeight="700" as="div">
        100+
      </Text>
      <Text variant="p" as="div">
        Countries supported
      </Text>
    </Flex>
    <Flex direction="column" basis="auto" align="center">
      <Text fontSize="56px" fontWeight="700" as="div">
        89+M
      </Text>
      <Text variant="p" as="div">
        Verified users
      </Text>
    </Flex>
  </Flex>
);
const Section6 = () => (
  <Flex direction="column" textAlign="center" px="24px" py="64px">
    <Text variant="h2" as="h2" fontSize="40px" mb="8px">
      Get started in a few minutes
    </Text>
    <Text variant="p" as="p" my="16px">
      Coinbase supports a variety of the most popular digital currencies.
    </Text>

    <Flex
      mt="64px"
      direction={{ base: "column", lg: "row" }}
      justify="space-between"
      align={{ base: "center", lg: "flex-start" }}
      flexBasis="auto"
    >
      {features3.map(({ title, Icon }, index) => {
        return (
          <React.Fragment key={title}>
            <Flex
              direction="column"
              w="100%"
              align="center"
              mt={{ base: "24px", lg: 0 }}
              p="12px"
            >
              {Icon}
              <Flex
                direction="column"
                align="flex-start"
                justify="center"
                textAlign="center"
              >
                <Text variant="h3" as="h3" my="12px" w="100%">
                  {title}
                </Text>
              </Flex>
            </Flex>
            {(index === 0 || index === 1) && (
              <Box
                sx={{ height: "1px", bg: "gray.400", w: "55%", mt: "20px" }}
              ></Box>
            )}
          </React.Fragment>
        );
      })}
    </Flex>
  </Flex>
);
