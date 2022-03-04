import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Image,
  Text,
  Button,
  Box,
  Link,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  HStack,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon, ArrowUpDownIcon } from "@chakra-ui/icons";

import { useSearchParams } from "react-router-dom";

function PriceTable() {
  const [coins, setCoins] = React.useState([]);
  const [change, setChange] = React.useState("priceChange1h");
  const [smallThan760] = useMediaQuery("(max-width: 768px)");
  let [searchParams, setSearchParams] = useSearchParams();
  const maxPage = 16;
  const minPage = 1;
  const step = 40;

  const page = Number(searchParams.get("page")) || minPage;
  const setPage = (num) => setSearchParams({ ...searchParams, page: num });

  React.useEffect(() => {
    if (page > maxPage) setPage(maxPage);
    if (page < minPage) setPage(minPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  React.useEffect(() => {
    const abort = new AbortController();
    const skip = page * step - step;
    const fetchCoins = async () => {
      setCoins([]);
      fetch(
        ` https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=${step}&currency=EUR `,
        {
          method: "GET",
          signal: abort.signal,
        }
      )
        .then((response) => response.json())
        .then((response) => setCoins(response.coins));
    };
    fetchCoins();
    return () => {
      abort.abort();
    };
  }, [searchParams, page]);

  const handleChangePage = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleChangePrice = (price) => {
    setChange(price);
  };

  const renderCoinsTable = React.useCallback(() => {
    if (smallThan760) {
      return (
        <Box
          border="1px solid"
          borderColor="gray.100"
          rounded="sm"
          width="100%"
          overflowX="auto"
        >
          <VStack>{renderCoinRowIn760()}</VStack>
        </Box>
      );
    }
    return (
      <Box
        border="1px solid"
        borderColor="gray.100"
        rounded="sm"
        width="100%"
        overflowX="auto"
      >
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Change</Th>
              <Th>Chart</Th>
              <Th>Trade</Th>
            </Tr>
          </Thead>
          <Tbody
            sx={{
              "& > tr": {
                cursor: "pointer",
                "&:hover": {
                  bg: "gray.50",
                },
              },
            }}
          >
            {renderCoinTr()}
          </Tbody>
        </Table>
      </Box>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coins, smallThan760, change]);

  const renderCoinRowIn760 = () => {
    if (coins.length > 0)
      return coins.map((coin) => (
        <HStack
          justify="space-between"
          w="100%"
          p={1}
          flexBasis={"auto"}
          key={coin.name}
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <HStack
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            maxWidth="50%"
          >
            <Image src={coin.icon} boxSize="36px" />
            <VStack spacing={"1px"} align="start">
              <Text variant="body1"> {coin.name}</Text>
              <Text variant="p" color="gray.500">
                {coin.symbol}
              </Text>
            </VStack>
          </HStack>
          <HStack
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            maxWidth="50%"
          >
            <VStack spacing={"1px"} align="end">
              <Text variant="p">${parseFloat(coin.price).toFixed(3)}</Text>
              <Text
                variant="body1"
                color={coin[change] < 0 ? "red.400" : "green.400"}
              >
                {coin[change] < 0 ? "" : coin[change] > 0 ? "+" : ""}
                {coin[change]}%
              </Text>
            </VStack>
          </HStack>
        </HStack>
      ));
    else
      return Array(step)
        .fill()
        .map((_, index) => index + 1)
        .map((coin) => (
          <HStack
            justify="space-between"
            w="100%"
            height="51.6px"
            px={1}
            flexBasis={"auto"}
            key={coin}
            borderBottom="1px solid"
            borderColor="gray.200"
          >
            <HStack width="300px" justify="start" height="100%">
              <Skeleton width="36px" height="36px" rounded="full" mr="1" />
              <VStack spacing={"14px"} align="start">
                <SkeletonText width="40px" noOfLines={1} />
                <SkeletonText width="30px" noOfLines={1} />
              </VStack>
            </HStack>
            <HStack>
              <VStack spacing={"5px"} align="end">
                <SkeletonText width="50px" noOfLines={1} />
                <SkeletonText width="30px" noOfLines={1} />
              </VStack>
            </HStack>
          </HStack>
        ));
  };

  const renderCoinTr = () => {
    if (coins.length > 0) {
      return coins.map((coin, index) => {
        const priceChange = coin[change];
        return (
          <Tr key={coin.id}>
            <Td>
              <Flex align="center">
                <Image src={coin.icon} w="36px" h="36px" />
                <Flex sx={{ "& > *": { ml: "16px" } }}>
                  <Text
                    variant="body2"
                    maxWidth="120px"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                  >
                    {coin.name}
                  </Text>
                  <Text variant="body2">{coin.symbol}</Text>
                </Flex>
              </Flex>
            </Td>
            <Td>
              <Text variant="body2">${parseFloat(coin.price).toFixed(3)}</Text>
            </Td>
            <Td>
              <Text
                variant="body2"
                color={
                  priceChange < 0
                    ? "red.400"
                    : priceChange > 0
                    ? "green.400"
                    : "gray.500"
                }
              >
                {priceChange < 0 ? "" : priceChange > 0 ? "+" : ""}
                {priceChange}
                {priceChange < 0 ? "%" : priceChange > 0 ? "%" : ""}
              </Text>
            </Td>
            <Td>
              {priceChange < 0 ? (
                <ArrowDownIcon color="red.400" />
              ) : priceChange > 0 ? (
                <ArrowUpIcon color="green.400" />
              ) : (
                <ArrowUpDownIcon color="gray.500" />
              )}
            </Td>
            <Td>
              <Link href={coin.websiteUrl} target="_blank">
                <Button colorScheme="blue" size="sm" fontWeight={400}>
                  trade
                </Button>
              </Link>
            </Td>
          </Tr>
        );
      });
    } else {
      return Array(step)
        .fill(0)
        .map((_, index) => {
          return (
            <Tr key={index}>
              <Td>
                <Flex align="center">
                  <SkeletonCircle size="8" />
                  <Flex
                    sx={{ "& > *": { ml: "16px" } }}
                    width="50%"
                    height="36px"
                    align="center"
                  >
                    <SkeletonText width="170px" noOfLines={1} />
                  </Flex>
                </Flex>
              </Td>
              <Td>
                <SkeletonText noOfLines={1} width="60px" />
              </Td>
              <Td>
                <SkeletonText noOfLines={1} width="35px" />
              </Td>
              <Td>
                <SkeletonText noOfLines={1} width="25px" />
              </Td>
              <Td>
                <Skeleton width="40px" height="25px" borderRadius="5px" />
              </Td>
            </Tr>
          );
        });
    }
  };

  const renderButton = (num, type = null) => {
    if (type === "forward")
      return (
        <Button
          minHeight="42px"
          minWidth="42px"
          fontSize="12px"
          rounded="full"
          colorScheme={page === num ? "blue" : "gray"}
          onClick={() => handleChangePage(num)}
        >
          &#10095;
        </Button>
      );
    else if (type === "backward")
      return (
        <Button
          minHeight="42px"
          minWidth="42px"
          fontSize="12px"
          rounded="full"
          colorScheme={page === num ? "blue" : "gray"}
          onClick={() => handleChangePage(num)}
        >
          &#10094;
        </Button>
      );

    return (
      <Button
        minHeight="42px"
        minWidth="42px"
        fontSize="12px"
        rounded="full"
        colorScheme={page === num ? "blue" : "gray"}
        onClick={() => handleChangePage(num)}
      >
        {num}
      </Button>
    );
  };

  const renderPagination = React.useCallback(() => {
    const backward = page - 1;
    const forward = page + 1;
    return (
      <>
        {backward >= minPage && renderButton(backward, "backward")}
        {backward > minPage && renderButton(minPage)}
        {backward >= minPage && renderButton(backward)}
        {renderButton(page)}
        {forward <= maxPage && renderButton(forward)}
        {forward < maxPage && renderButton(maxPage)}
        {forward <= maxPage && renderButton(forward, "forward")}
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Box maxWidth="100vw" p={{ base: "64px 12px", md: "64px 24px" }}>
        <HStack w="100%" justify="start" mb="4" spa={4}>
          {["priceChange1h", "priceChange1d", "priceChange1w"].map((date) => (
            <Button
              colorScheme={date === change ? "blue" : "gray"}
              size="sm"
              rounded="3xl"
              key={date}
              fontSize="12px"
              onClick={() => handleChangePrice(date)}
            >
              {date.slice(5)}
            </Button>
          ))}
        </HStack>
        {renderCoinsTable()}
        <Flex align="center" justify="center" width="100%" mt="20px">
          <HStack>{renderPagination()}</HStack>
        </Flex>
      </Box>
    </>
  );
}

export default PriceTable;
