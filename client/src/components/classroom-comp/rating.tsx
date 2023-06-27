import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { FilledIcon } from "../general-components/svg";

const Section = styled.div`
  display: flex;
`;

interface svgColorProps {
  colored: boolean;
}

const IconWrapper = styled.div<svgColorProps>`
  svg {
    /* border: 1px solid red; */
    padding-right: 1rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    fill: ${(p) => (p.colored ? "#f7f036" : "rgba(125, 137, 176, 0.2);")};
  }
`;

interface ratingProps {
  rating: number;
  onRating: any;
}

const Rating = ({ rating, onRating }: ratingProps) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index: number) => {
    if (hoverRating >= index) {
      return true;
    } else if (!hoverRating && rating >= index) {
      return true;
    }

    return false;
  };

  const starRating = useMemo(() => {
    return Array(5)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <IconWrapper
          key={idx}
          onClick={() => onRating(idx)}
          colored={getColor(idx)}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        >
          <FilledIcon />
        </IconWrapper>
      ));
  }, [rating, hoverRating]);

  return <Section>{starRating}</Section>;
};

export default Rating;
