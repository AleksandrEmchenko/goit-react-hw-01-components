import styled from "@emotion/styled";

export const StatisticsBox = styled.section`
  width: 345px;
  background-color: #ffffff;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  padding-top: 40px;
  padding-bottom: 40px;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--secondTextColor);
`;
export const StatList = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  width: calc(100% / 5);
  padding-top: 12px;
  padding-bottom: 18px;
  text-align: center;
  color: var(--backgroundcolor);
`;
export const Label = styled.span`
  display: block;
  margin-bottom: 12px;
  font-size: 12px;
`;
export const Percentage = styled.span`
  font-size: 18px;
`;
