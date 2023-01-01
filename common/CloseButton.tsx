import {IconButton} from "@chakra-ui/react";
import {useRouter} from "next/router";
import React from "react";
import {CrossX} from "../public/svg";

interface CloseButtonProps {
  onClick?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({onClick}) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <IconButton
      aria-label="x-button"
      icon={CrossX}
      onClick={onClick ? onClick : handleClick}
    />
  );
};

export default CloseButton;
