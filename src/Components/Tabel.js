import Table from "react-bootstrap/Table";

function Tabel({ kelas }) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Kelas</th>
          <th>Nama</th>
          <th>Nilai</th>
          <th>Keterangan</th>
          <th>Mati</th>
        </tr>
      </thead>
      <tbody>
        {kelas &&
          kelas.kelasA &&
          kelas.kelasA.map((el, key) => {
            return (
              <tr key={key}>
                <td>A</td>
                <td>{el.name}</td>
                <td>{el.nilai}</td>
                <td>{el.keterangan ? el.keterangan : "-"}</td>
                <td>{el.mati ? el.mati : "-"}</td>
              </tr>
            );
          })}
        {kelas &&
          kelas.kelasB &&
          kelas.kelasB.map((el, key) => {
            return (
              <tr key={key}>
                <td>B</td>
                <td>{el.name}</td>
                <td>{el.nilai}</td>
                <td>{el.keterangan ? el.keterangan : "-"}</td>
                <td>{el.mati ? el.mati : "-"}</td>
              </tr>
            );
          })}
        {kelas &&
          kelas.kelasC &&
          kelas.kelasC.map((el, key) => {
            return (
              <tr key={key}>
                <td>C</td>
                <td>{el.name}</td>
                <td>{el.nilai}</td>
                <td>{el.keterangan ? el.keterangan : "-"}</td>
                <td>{el.mati ? el.mati : "-"}</td>
              </tr>
            );
          })}
        {kelas &&
          kelas.kelasD &&
          kelas.kelasD.map((el, key) => {
            return (
              <tr key={key}>
                <td>D</td>
                <td>{el.name}</td>
                <td>{el.nilai}</td>
                <td>{el.keterangan ? el.keterangan : "-"}</td>
                <td>{el.mati ? el.mati : "-"}</td>
              </tr>
            );
          })}
        {kelas &&
          kelas.kelasE &&
          kelas.kelasE.map((el, key) => {
            return (
              <tr key={key}>
                <td>E</td>
                <td>{el.name}</td>
                <td>{el.nilai}</td>
                <td>{el.keterangan ? el.keterangan : "-"}</td>
                <td>{el.mati ? el.mati : "-"}</td>
              </tr>
            );
          })}
        {kelas &&
          kelas.kelasKhusus &&
          kelas.kelasKhusus.map((el, key) => {
            return (
              <tr key={key}>
                <td>Khusus</td>
                <td>{el.name}</td>
                <td>{el.nilai}</td>
                <td>{el.keterangan ? el.keterangan : "-"}</td>
                <td>{el.mati ? el.mati : "-"}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default Tabel;
