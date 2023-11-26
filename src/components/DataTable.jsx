function DataTable({ data }) {
  return (
    <tr>
      <td>{data.seq}</td>
      <td>{data.contract_number}</td>
      <td>{data.documentNumber}</td>
      <td>{data.name}</td>
      {data.documentNumber ? (
        <td style={{ color: "blue" }}>เจอ {1} สัญญา</td>
      ) : (
        <td style={{ color: "red" }}>ไม่เจอสัญญา</td>
      )}
    </tr>
  );
}

export default DataTable;
