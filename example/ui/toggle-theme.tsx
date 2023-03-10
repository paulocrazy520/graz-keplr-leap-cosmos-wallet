import { Button, useColorMode } from "@chakra-ui/react";
import type { FC } from "react";

export const ToggleTheme: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button leftIcon={<>{colorMode === "dark" ? "🌑" : "☀️"}</>} onClick={toggleColorMode} size="xs" variant="outline">
      {colorMode} mode
    </Button>
  );
};
