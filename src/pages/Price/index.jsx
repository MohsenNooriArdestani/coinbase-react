import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Image,
  Text,
  VStack,
  Grid,
  GridItem,
  Breadcrumb,
  BreadcrumbItem,
  HStack,
  Flex,
  Button,
  Stat,
  StatLabel,
  StatHelpText,
  StatArrow,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { ReactComponent as DiamondIcon } from "assets/icons/diamond.svg";

import currencies from "../../util/currencies";
import Search from "../../components/Search";
import Chart from "./Chart";
import LoginModal from "../../components/LoginModal";

function Price() {
  const [coin, setCoin] = React.useState({});
  const [currency, setCurrency] = React.useState("USD");
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    if (!coin.price) setIsLoading(true);
    const abortController = new AbortController();
    const fetchCoins = async () => {
      const target = `https://api.coinstats.app/public/v1/coins/${id}?currency=${currency}`;
      const config = { signal: abortController.signal, method: "GET" };
      const data = await fetch(target, config);
      const { coin } = await data.json();
      setCoin(coin);
      setIsLoading(false);
    };
    fetchCoins();
    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, currency]);

  const handleClickBuyButton = (e) => {
    onOpen();
  };

  const renderTop = React.useCallback(
    () => (
      <VStack align="stretch" p={6} gap="2">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <Link to="/prices">Price Charts</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to={`/price/${id}`}>{coin.name}</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
          <GridItem>
            <HStack spacing={3}>
              <Image src={coin.icon} boxSize="58px" />
              <VStack align="stretch">
                <Text variant="h2" as="h2" fontWeight={500}>
                  {coin.name} price
                </Text>
                <Text variant="body2" as="span" color="gray.500">
                  {coin.symbol} / {currency}
                </Text>
              </VStack>
            </HStack>
          </GridItem>
          <GridItem h="100%">
            <Flex w="100%" align="center" justify="end" h="100%">
              <Search
                data={currencies}
                setState={setCurrency}
                defaultValue={currency}
              />
            </Flex>
          </GridItem>
        </Grid>
      </VStack>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [coin, currency]
  );

  if (isLoading) return <>Loading</>;
  return (
    <>
      <LoginModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      {renderTop()}
      <Grid templateColumns={{ base: "1fr", md: "1fr 350px" }} gap={5} p={6}>
        <GridItem>
          <Chart price={coin.price} currency={currency} symbol={coin.symbol} />
          <Text variant="body2" py={6}>
            Market stats
          </Text>

          <VStack
            w="100%"
            spacing={3}
            sx={{ "&  .chakra-stat *": { overflow: "hidden" } }}
          >
            <HStack wrap={"wrap"} w="100%">
              <Stat>
                <StatLabel>Price</StatLabel>
                <StatHelpText>{coin.price.toFixed(2)}</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>priceBtc</StatLabel>
                <StatHelpText>
                  {coin.priceBtc.toString().slice(0, 8)}
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>volume</StatLabel>
                <StatHelpText>
                  {coin.volume.toString().slice(0, 8)}
                </StatHelpText>
              </Stat>
            </HStack>
            <HStack wrap={"wrap"} w="100%">
              <Stat>
                <StatLabel>Change 1h</StatLabel>
                <StatHelpText>
                  <StatArrow
                    type={coin["priceChange1h"] > 0 ? "increase" : "decrease"}
                  />
                  {coin["priceChange1h"].toFixed(2)}%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Change 1d</StatLabel>
                <StatHelpText>
                  <StatArrow
                    type={coin["priceChange1d"] > 0 ? "increase" : "decrease"}
                  />
                  {coin["priceChange1d"].toFixed(2)}%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Change 1w</StatLabel>
                <StatHelpText>
                  <StatArrow
                    type={coin["priceChange1w"] > 0 ? "increase" : "decrease"}
                  />
                  {coin["priceChange1w"].toFixed(2)}%
                </StatHelpText>
              </Stat>
            </HStack>
            <HStack wrap={"wrap"} w="100%">
              <Stat>
                <StatLabel>marketCap</StatLabel>
                <StatHelpText>{coin.marketCap.toFixed(3)}</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>availableSupply</StatLabel>
                <StatHelpText>{coin.availableSupply}</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>rank</StatLabel>
                <StatHelpText>#{coin.rank}</StatHelpText>
              </Stat>
            </HStack>
          </VStack>
        </GridItem>
        <GridItem mt={{ base: 5, md: 0 }}>
          <VStack
            w="100%"
            align="center"
            textAlign="center"
            border="1px solid"
            borderColor="gray.300"
            p={5}
            rounded="md"
            spacing={4}
          >
            <DiamondIcon />
            <Text variant="h3">Trade {coin.name} today</Text>
            <Text variant="p" fontWeight={400}>
              Create a Coinbase account to buy and sell {coin.name} on the most
              secure crypto exchange.
            </Text>
            <Button
              variant="primary"
              size="xl"
              w="100%"
              onClick={handleClickBuyButton}
            >
              Buy {coin.name}
            </Button>
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
}

export default Price;
