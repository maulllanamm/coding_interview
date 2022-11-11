import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Tabel from "./Components/Tabel";
import _ from "lodash";
import { isPrima } from "./Functions/isPrima";

function App() {
  // buat state
  const [kelas, setKelas] = useState({});

  const getData = async () => {
    // fetch api
    const datas = await fetch(
      "http://ecocim-backend-theone.beit.co.id/api/ManualConfig/TestBEIT"
    );
    const result = await datas.json();
    const listNama = result.listNama;
    const listNilai = result.listNilai;
    const obj = _.zipObject(listNama, listNilai);

    // buat kelas
    let kelasA = [];
    let kelasB = [];
    let kelasC = [];
    let kelasD = [];
    let kelasE = [];

    let kelas = _.map(obj, (el, key) => ({
      name: key,
      nilai: el,
      mati: isPrima(el),
    }));

    _.forEach(kelas, (el, key) => {
      if (el.nilai >= 90 && el.nilai <= 100) {
        kelasA.push(el);
      } else if (el.nilai >= 80 && el.nilai <= 89) {
        kelasB.push(el);
      } else if (el.nilai >= 70 && el.nilai <= 79) {
        kelasC.push(el);
      } else if (el.nilai >= 60 && el.nilai <= 69) {
        kelasD.push(el);
      } else if (el.nilai >= 50 && el.nilai <= 59) {
        kelasE.push(el);
      }
    });

    let kelasKhusus = _.map(obj, (el, key) => {
      if (key.includes("C") && key.includes("O")) {
        return {
          name: key,
          nilai: el,
        };
      }
    });

    kelasKhusus = _.filter(kelasKhusus, (el, key) => el);

    kelasKhusus = _.map(kelasKhusus, (el, key) => {
      let mati = isPrima(el.nilai);
      if (el.nilai % 7 === 0) {
        return {
          ...el,
          keterangan: "Nikah tahun 2023",
          mati: mati,
        };
      } else {
        return {
          ...el,
          mati: mati,
        };
      }
    });

    _.forEach(kelasKhusus, (el, key) => {
      _.pullAllWith(kelas, [el], _.isEqual);
    });

    setKelas({
      kelasA,
      kelasB,
      kelasC,
      kelasD,
      kelasE,
      kelasKhusus,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Tabel kelas={kelas} />
    </div>
  );
}

export default App;
