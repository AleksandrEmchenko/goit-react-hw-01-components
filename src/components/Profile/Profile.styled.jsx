import styled from "@emotion/styled";

export const ProfileBox = styled.div`
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  padding-top: 40px;
  width: 310px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 1px rgba(172, 183, 192, 0.12),
    0px 4px 4px rgba(172, 183, 192, 0.06), 1px 4px 6px rgba(172, 183, 192, 0.16);
`;

export const Description = styled.div`
  margin-bottom: 40px;
`;

export const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 120px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const Name = styled.p`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  color: var(--firstTextColor);
`;

export const Tag = styled.p`
  display: block;
  text-align: center;
  color: var(--secondTextColor);
  margin-bottom: 20px;
`;

export const Location = styled.p`
  display: block;
  text-align: center;
  color: var(--secondTextColor);
  margin-bottom: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  background-color: var(--firstBackgroundColor);
`;

export const StatsItem = styled.span`
  display: inline-block;
  padding-top: 24px;
  padding-bottom: 24px;
  text-align: center;
  width: calc((100% - 4px) / 3);
  border-top: 2px solid var(--backgroundcolor);
  border-right: 2px solid var(--backgroundcolor);
  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  display: block;
  color: var(--secondTextColor);
`;
export const Quantity = styled.span`
  font-weight: 500;
`;
