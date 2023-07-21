import { useEffect } from "react";
import { useState } from "react";
export const useRangeValue = (books) => {
  const [rangeValue, setRangeValue] = useState(50);
  const [maxValue, setMaxValue] = useState(-1);

  useEffect(() => {
    const helperMaxValue = books.find((books) => {
      return books.page > rangeValue;
    });
    setMaxValue(helperMaxValue);
  }, [rangeValue])
  const changeValueOnSlideRange = (number) => {
    console.log(number);
    setRangeValue(number);
  }


  return { rangeValue, maxValue, changeValueOnSlideRange };
}