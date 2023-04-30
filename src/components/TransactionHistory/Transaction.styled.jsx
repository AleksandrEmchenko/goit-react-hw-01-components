import styled from "@emotion/styled";

export const TransactionHistoryTable = styled.table`
  width: 726px;
  border: 1px solid var(--secondTextColor);
  border-radius: 2px;
  margin: 0 auto;
  margin-bottom: 12px;
  box-shadow: 0px 1px 1px rgba(172, 183, 192, 0.12);
  border-collapse: collapse;
`;

export const ColumnHeading = styled.th`
  padding: 16px 0;
  background-color: #00bcd5;
  text-transform: uppercase;
  color: #fff;
  width: calc(100% / 3);

  &:not(:last-child) {
    border-right: 1px solid #fff;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: var(--firstBackgroundColor);
  }
`;

export const TableCell = styled.td`
  padding: 16px 0;
  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid var(--secondTextColor);
  }

  &:first-child {
    text-align: left;
    padding-left: 100px;
    text-transform: capitalize;
  }
`;
