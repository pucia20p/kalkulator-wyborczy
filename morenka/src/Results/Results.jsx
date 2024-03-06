import React from 'react';
import Item from './Item/Item.jsx';

export default function Results({ komitety }) {
  let sumaGlosow = 0;
  komitety.forEach((komitet) => {
    sumaGlosow += parseInt(komitet.iloscGlosow);
  });
  // console.log('epic' + sumaGlosow);

  return (
    <main class="shadow container d-flex flex-column align-items-center p-3">
      <h2 class="text-primary">Wyniki wyborów</h2>
      <table class="table text-center">
        <thead class="bg-light fw-bold">
          <tr>
            <td>Nazwa komitetu</td>
            <td>Próg wyborczy (%)</td>
            <td>Ilość głosów</td>
            <td>Wynik procentowy</td>
          </tr>
        </thead>
        <tbody>
          {komitety
            .sort((a, b) => b.iloscGlosow - a.iloscGlosow)
            .map((props, index) => {
              props.sumaGlosow = sumaGlosow;
              return <Item props={props} />;
            })}
        </tbody>
      </table>
    </main>
  );
}
