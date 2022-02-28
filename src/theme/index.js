import { extendTheme } from "@chakra-ui/react";

import components from "./components";
import fonts from "./fonts";
const themeConfig = { components, fonts };

const theme = extendTheme(themeConfig);

export default theme;
