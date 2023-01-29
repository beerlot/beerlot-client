import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import React from "react";

interface VolumeSliderProps {
  min: number;
  max: number;
  value: number[];
  onChange: (val: number[]) => void;
}

export const VolumeSlider: React.FC<VolumeSliderProps> = ({
  min,
  max,
  value,
  onChange,
}) => {
  return (
    <RangeSlider
      colorScheme="pink"
      defaultValue={[min, max]}
      onChange={(val) => {
        console.log({val});
        onChange(val);
      }}
      value={value}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  );
};
