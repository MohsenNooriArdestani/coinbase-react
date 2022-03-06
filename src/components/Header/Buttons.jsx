import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Flex, Button, Link } from "@chakra-ui/react";

function Buttons() {
  return (
    <Flex align="center" display={{ base: "none", md: "flex" }}>
      <Link as={ReactRouterLink} mr="20px" to="/login">
        Log in
      </Link>
      <Link as={ReactRouterLink} to="/signup">
        <Button variant="primary">Get Started</Button>
      </Link>
    </Flex>
  );
}

export default Buttons;
