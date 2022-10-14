import React from "react";
import SignUp from "../../Components/Auth/SignUp/SignUp";
import BackButton from "../../Components/Utils/BackButton";
import FloatingButton from "../../Components/Utils/FloatingButton";

// nickname을 정하지 않고,
// Beers로 넘어가는 경우 처리

const index = () => {
  return (
    <>
      <BackButton />
      <SignUp />
    </>
  );
};

export default index;
