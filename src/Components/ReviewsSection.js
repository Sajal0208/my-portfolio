import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import ReviewItem from "./ReviewItem";
import Title from "./Title";

const ReviewsSection = () => {
  return (
    <div>
      <ReviewsStyled>
        <Title title={"Reviews"} span={"Reviews"} />
        <InnerLayout>
          <div className="reviews">
            <ReviewItem
              text={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti labore nihil omnis sit laboriosam facilis vitae recusandae perferendis, obcaecati cupiditate!"
              }
            />
            <ReviewItem
              text={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti labore nihil omnis sit laboriosam facilis vitae recusandae perferendis, obcaecati cupiditate!"
              }
            />
          </div>
        </InnerLayout>
      </ReviewsStyled>
    </div>
  );
};

const ReviewsStyled = styled.section`
  .reviews {
      display: flex;
  }
`;

export default ReviewsSection;
