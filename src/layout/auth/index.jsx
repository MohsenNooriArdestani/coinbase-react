import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@chakra-ui/react";

function AuthLayout() {
  return (
    <Box bg="#f7fafc" minH="100vh">
      <Outlet />
    </Box>
  );
}

export default AuthLayout;
