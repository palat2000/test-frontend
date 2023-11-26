import DataTable from "./DataTable";

function Table({ data }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>เลขที่สัญญา ใน import</th>
            <th>เลขที่สัญญา ใน agreements</th>
            <th>ชื่อสัญญา</th>
            <th>สถานะ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <DataTable key={el.seq} data={el} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
