import {HStack, IconButton} from "@chakra-ui/react";
import React from "react";
import {OrangeStar} from "./custom-icons/customIcons";

interface RatingProps {
  starSize?: number;
  styleProps?: any;
  onClick?: (rate: number) => void;
  rate: number;
}

export const Rating: React.FC<RatingProps> = ({
  starSize = 40,
  styleProps,
  rate,
  onClick,
}) => {
  return (
    <HStack {...styleProps}>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <IconButton
            key={star}
            aria-label="star"
            as={OrangeStar}
            fontSize={`${starSize}px`}
            color={star <= rate ? "orange.200" : "white"}
            size={`${starSize}px`}
            onClick={onClick ? () => onClick(star) : undefined}
          />
        );
      })}
    </HStack>
  );
};
