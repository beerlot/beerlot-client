import { useEditUserInfoMutation } from "@/../hooks/query/useUserQuery";
import LeftXTitleRightComplete from "@/components/shared/Headers/LeftXTitleRightComplete";
import { StackProps, VStack } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useCheckUsernameMutation } from "../../../../../hooks/mutations/useUserMutation";
import { useInput } from "../../../../../hooks/useNicknameInput";
import {
  getBioHelperText,
  isValidOrOriginalBio,
} from "../../../../../service/input";
import NicknameInput from "../../../shared/NicknameInput";
import ProfileAvatar from "../../../shared/ProfileAvatar";

interface ProfileEditContentProps extends StackProps {
  imageUrl: string;
  username: string;
  statusMessage?: string;
}

export const ProfileEditContent: React.FC<ProfileEditContentProps> = ({
  imageUrl,
  username,
  statusMessage,
}) => {
  const accessToken = Cookies.get("beerlot-oauth-auth-request") ?? "";
  const router = useRouter();

  /**
   * nickname
   */
  const [usernameInput, setUsernameInput] = useState<string>(username);
  const [isUsernameTaken, setIsUsernameTaken] = useState<boolean>(false);
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isTouched) setIsTouched(true);
    setUsernameInput(e.target.value);
    handleCheckUsername(e.target.value);
  };

  const handleCheckUsername = (newUsername: string) => {
    if (newUsername === username) return;
    checkUsernameTaken(usernameInput);
  };

  const { mutate: checkUsernameTaken } = useCheckUsernameMutation({
    onSuccess: (data) => {
      setIsUsernameTaken(data.taken);
    },
  });

  const validNickname =
    !isTouched ||
    (usernameInput.length > 0 && !isUsernameTaken && usernameInput.length <= 9);

  const guideText = () => {
    if (!isTouched) return "";

    if (usernameInput.length > 9) {
      return "닉네임은 9자 이내로 만들 수 있어요!";
    }
    if (usernameInput.length === 0) {
      return "닉네임을 정해주세요!";
    }
    if (isUsernameTaken) {
      return "이미 사용 중인 닉네임이에요 :(";
    }
    return "사용할 수 있는 닉네임이에요 :)";
  };
  /**
   * image
   */

  const [imgFile, setImgFile] = useState<string>("");
  const imgRef = useRef<HTMLInputElement>(null);

  const handleChangeProfileImage = () => {
    if (!imgRef || !imgRef.current || !imgRef.current.files) return;
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === "string") setImgFile(reader.result);
    };
  };

  /**
   * bio
   */
  const { input: bioInput, onChange: onBioChange } = useInput({
    initialInputState: statusMessage ?? "",
  });

  /**
   * onSubmit
   */
  const editUserInfoMutation = useEditUserInfoMutation(accessToken, {
    onSuccess: () => {
      router.push("/account");
    },
  });

  const handleClickComplete = () => {
    editUserInfoMutation.mutate({
      username: usernameInput ?? "",
      status_message: bioInput ?? "",
      image_url: imgFile,
    });
  };
  const validBio = isValidOrOriginalBio(bioInput, statusMessage ?? ""); // null means not changed;

  const isChangeCompleted =
    validNickname !== false && validBio !== false && isUsernameTaken;

  return (
    <>
      <LeftXTitleRightComplete
        title={"프로필 편집"}
        rightTitleStyleProps={rightTitleStyleProps(isChangeCompleted)}
        rightTitle={"완료"}
        onClickRight={handleClickComplete}
      />
      <VStack px="30px" py="10px" gap="32px" pt="50px">
        <VStack>
          <ProfileAvatar
            alt="user profile photo"
            src={imageUrl || "/images/default-profile.png"}
            boxSize="100px"
          />
          <form>
            <label
              className="signup-profileImg-label"
              htmlFor="profileImg"
              style={{
                color: "#FEA801",
                fontWeight: "700",
                lineHeight: "24px",
                fontSize: "14px",
                letterSpacing: "0.01px",
                cursor: "pointer",
              }}
            >
              프로필 사진 바꾸기
            </label>
            <input
              className="signup-profileImg-input"
              type="file"
              accept="image/*"
              id="profileImg"
              onChange={handleChangeProfileImage}
              ref={imgRef}
              style={{ display: "none" }}
            />
          </form>
        </VStack>
        <VStack gap="px" w="100%">
          <NicknameInput
            input={usernameInput}
            isValid={validNickname}
            isTouched={isTouched}
            onChange={onChangeUsername}
            guideText={guideText()}
          />
          <NicknameInput
            label="소개"
            maxLength={25}
            placeholder="소개는 25자까지 입력이 가능해요!"
            input={bioInput}
            isValid={validBio}
            onChange={onBioChange}
            guideText={getBioHelperText(bioInput)}
          />
        </VStack>
      </VStack>
    </>
  );
};

const rightTitleStyleProps = (isChangeCompleted: boolean) => {
  return {
    isDisabled: !isChangeCompleted,
    textColor: isChangeCompleted ? "orange.200" : "gray.200",
  };
};
