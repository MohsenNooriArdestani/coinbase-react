import { extendTheme } from "@chakra-ui/react";

import components from "./components";
import fonts from "./fonts";
import styles from "./styles";

const themeConfig = { components, fonts, styles };

const theme = extendTheme(themeConfig);

export default theme;
