import PropTypes from "prop-types";
import {
  TransactionHistoryTable,
  ColumnHeading,
  TableRow,
  TableCell,
} from "./Transaction.styled";

export function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <ColumnHeading>Type</ColumnHeading>
          <ColumnHeading>Amount</ColumnHeading>
          <ColumnHeading>Currency</ColumnHeading>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableCell>{type}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{currency}</TableCell>
            </TableRow>
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
