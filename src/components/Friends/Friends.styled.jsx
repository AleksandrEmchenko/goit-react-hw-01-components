import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 305px;
  height: 85px;
  margin: 0 auto;
  margin-bottom: 12px;
  padding: 12px;
  background-color: var(--firstBackgroundColor);
  box-shadow: 0px 1px 1px rgba(172, 183, 192, 0.12),
    0px 4px 4px rgba(172, 183, 192, 0.06), 1px 4px 6px rgba(172, 183, 192, 0.16);
  border-radius: 2px;
`;

const setBgColor = (props) => {
  switch (props.isOnline) {
    case true:
      return "var(--green)";
    case false:
      return "var(--red)";
    default:
      return "var(--backgroundcolor)";
  }
};

export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: ${setBgColor};
`;

export const Avatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 5px;
  margin-right: 12px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
