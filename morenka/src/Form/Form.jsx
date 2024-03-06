import { React, useRef } from 'react';

export default function Form({
  dodajKomitetRef,
  editing,
  ustawEditing,
  edited,
}) {
  const nazwaInp = useRef(null);
  const iloscGlosowInp = useRef(null);
  const jestKoalicjaInp = useRef(null);

  const resetForm = () => {
    nazwaInp.current.value = null;
    jestKoalicjaInp.current.checked = false;
    iloscGlosowInp.current.value = 0;
    ustawEditing(false);
  };

  const form = useRef(null);

  const add = (evt) => {
    evt.preventDefault();

    let tempObject = {
      nazwa: nazwaInp.current.value,
      iloscGlosow: iloscGlosowInp.current.value,
      jestKoalicja: jestKoalicjaInp.current.checked ? true : false,
    };
    console.log(iloscGlosowInp.current.value);
    dodajKomitetRef(tempObject);
    ustawEditing(false);

    //form clear
    resetForm();
  };

  const reset = (evt) => {
    evt.preventDefault();
    resetForm();
  };

  if (!editing) {
    edited.nazwa = null;
    edited.iloscGlosow = 0;
    edited.jestKoalicja = false;
  }

  return (
    <form
      class={`d-flex flex-column align-items-center gap-3 shadow p-4 container ${
        editing ? 'bg-secondary' : ''
      }`}
      ref={form}
    >
      <h2 class="text-primary">Dane komitetu wyborczego</h2>

      <label htmlFor="nazwa" class="d-flex flex-column align-items-start gap-2">
        Nazwa komitetu:{' '}
        <input
          type="text"
          id="nazwa"
          ref={nazwaInp}
          defaultValue={edited.nazwa}
        ></input>
      </label>

      <label htmlFor="jestKoalicja" class="d-flex gap-3">
        <input
          type="checkbox"
          id="jestKoalicja"
          ref={jestKoalicjaInp}
          checked={edited.jestKoalicja}
        ></input>{' '}
        Czy jest koalicją
      </label>

      <label htmlFor="ilosc" class="d-flex flex-column align-items-start gap-2">
        Ilość głosów:{' '}
        <input
          type="number"
          id="ilosc"
          ref={iloscGlosowInp}
          defaultValue={edited.iloscGlosow}
        ></input>
      </label>

      <div class="d-flex gap-3">
        <button class="btn btn-primary" onClick={add}>
          {editing ? 'Potwierdź' : 'Zatwierdź'}
        </button>
        <button class="btn btn-primary" onClick={reset}>
          {editing ? 'Usuń' : 'Anuluj'}
        </button>
      </div>
    </form>
  );
}
