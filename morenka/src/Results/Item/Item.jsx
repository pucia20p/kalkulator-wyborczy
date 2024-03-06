import React from 'react';

export default function Item({ props }) {
  let zdal =
    (props.jestKoalicja ? 0.08 : 0.05) <
    parseInt(props.iloscGlosow) / parseInt(props.sumaGlosow)
      ? 'bg-success-subtle'
      : 'bg-danger-subtle';
  return (
    <tr>
      <td class={zdal}>{props.nazwa}</td>
      <td class={zdal}>{props.jestKoalicja ? '8' : '5'}</td>
      <td class={zdal}>{props.iloscGlosow}</td>
      <td class={zdal}>
        {Math.round(
          (parseInt(props.iloscGlosow) / parseInt(props.sumaGlosow)) * 10000
        ) / 100}
        %
      </td>
    </tr>
  );
}
