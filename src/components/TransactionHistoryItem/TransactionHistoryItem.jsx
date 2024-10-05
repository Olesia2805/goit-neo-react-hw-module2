import transactionCss from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ transaction }) => {
  return (
    <tr className={transactionCss.row}>
      <td className={transactionCss.rowItem}>{transaction.type}</td>
      <td className={transactionCss.rowItem}>{transaction.amount}</td>
      <td className={transactionCss.rowItem}>{transaction.currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
