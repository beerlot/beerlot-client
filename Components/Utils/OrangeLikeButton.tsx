import React from "react";
import { HeartButton } from "../../public/svg";

interface LikeButtonProps {
  isClicked: boolean;
  onClick: (state: boolean) => void;
}

/*
1. 선택 여부에 따라 색깔 바꾸기 (createIcon 사용 예정)
2. 위치 props 전달하기 (absolute, top, right)
 */

const OrangeLikeButton: React.FC<LikeButtonProps> = ({
  isClicked,
  onClick,
}) => {
  return (
    <HeartButton
      width="27px"
      height="29px"
      onClick={() => onClick(!isClicked)}
      filter={
        isClicked ? "none" : "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5))"
      }
    />
  );
};

export default OrangeLikeButton;
