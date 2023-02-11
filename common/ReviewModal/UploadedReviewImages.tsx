import {Box, Button, HStack, Text} from "@chakra-ui/react";
import React, {ChangeEvent, useState} from "react";
import {ReviewStatic} from "../../interface/static";
import {OrangeCamera} from "../../public/svg";

export const UploadedReviewImages = () => {
  const [attachedFile, setAttachedPhoto] = useState<File[]>([]);

  // const deletePhoto = (targetId: string) => {
  //   const newAttachedPhoto = attachedFile.filter((id) => id !== targetId);
  //   setAttachedPhoto(newAttachedPhoto);
  // };

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    //files는 있을수도 있고,없을수도 있기 때문에 옵셔널 체이닝을 사용해주셔야 합니다.
    if (!e.target.files) return;
    const Imagefile = e.target.files[0];
    console.log("Imagefile", Imagefile);
    //이미지 검증 함수를 끌어오겠습니다.
    // const isValid = checkFileValidation(Imagefile);
    //이미지 검증의 결과값에 따라 업로드를 진행하거나 함수를 종료합니다.
    // if (!isValid) return;
    setAttachedPhoto([...attachedFile, Imagefile]);
    return Imagefile;
  };

  return (
    <>
      <Button
        w="full"
        bg="inherit"
        _hover={{}}
        border="1px solid"
        borderColor="orange.200"
        borderRadius="10px"
        p="5px 10px"
        aria-label="attach-photo"
        gap="10px"
        mt="0px"
        _notFirst={{marginInlineStart: "0px", marginTop: "0px"}}
      >
        <OrangeCamera />
        <Text textStyle="h3" textColor="orange.200">
          사진 첨부하기 ({attachedFile.length}/
          {ReviewStatic.numberOfMaxAttachedFile})
        </Text>
      </Button>
      <HStack display={attachedFile.length > 0 ? "flex" : "none"}>
        {attachedFile.map((item, index) => {
          return <input key={index} type="file" onChange={onChangeFile} />;
        })}
      </HStack>
    </>
  );
};
