import { Box, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { useAccount, useActiveChain } from "graz";
import type { FC } from "react";

export const ConnectStatus: FC = () => {
  const { isConnected } = useAccount();
  const activeChain = useActiveChain();

  return (
    <Tag>
      <TagLeftIcon as={Box} bgColor={isConnected ? "green.500" : "red.500"} boxSize={3} rounded="full" />
      <TagLabel>{isConnected && activeChain ? `Connected to ${activeChain.chainId}` : "Disconnecdted"}</TagLabel>
    </Tag>
  );
};
