import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "components/Header";
function DefaultLayout() {
  return (
    <>
      <Header />
      <Box width={{ xl: "1142px" }} minHeight="100vh" margin="auto">
        <Outlet />
      </Box>
    </>
  );
}

export default DefaultLayout;
