import React from "react";

import { Flex, Button, Link } from "@chakra-ui/react";

function Buttons() {
  return (
    <Flex align="center" display={{ base: "none", md: "flex" }}>
      <Link mr="20px">Sign in</Link>
      <Button variant="primary">Get Started</Button>
    </Flex>
  );
}

export default Buttons;
