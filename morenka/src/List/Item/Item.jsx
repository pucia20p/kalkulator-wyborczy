import { React } from 'react';

export default function Item({
  props,
  usunKomitetRefRef,
  edytujKomitetRefRef,
}) {
  const usun = () => {
    usunKomitetRefRef(props.id);
  };
  const edytuj = () => {
    edytujKomitetRefRef(props.id);
    console.log(props.id);
  };

  return (
    <li class="d-flex gap-1 justify-content-between align-items-center container border rounded p-1">
      <div>
        <b>{props.nazwa}</b> {props.jestKoalicja ? '' : 'nie'} jest koalicją,
        ilość głosów: <b>{props.iloscGlosow}</b>
      </div>
      <div class="d-flex gap-1">
        <button class="btn btn-outline-primary" onClick={edytuj}>
          edytuj
        </button>
        <button class="btn btn-outline-danger" onClick={usun}>
          usuń
        </button>
      </div>
    </li>
  );
}
