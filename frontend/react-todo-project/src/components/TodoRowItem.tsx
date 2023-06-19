export const TodoRowItem: React.FC<{
  rowNumber: number;
  rowDescription: string;
  rowAssigned: string;
  deleteTodo: Function;
}> = (props) => {
  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
      <td onClick={() => props.deleteTodo(props.rowNumber)}>
        <p style={{ color: "red" }}>
          <u>Delete</u>
        </p>
      </td>
    </tr>
  );
};
