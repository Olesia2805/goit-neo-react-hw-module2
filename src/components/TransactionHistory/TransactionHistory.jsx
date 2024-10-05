import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';
import transactionsCss from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={transactionsCss.tableTransaction}>
      <thead className={transactionsCss.tableHeadTransaction}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={transactionsCss.bodyTransaction}>
        {items.map(transaction => (
          <TransactionHistoryItem
            transaction={transaction}
            key={transaction.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
