import React from 'react';
import Item from './Item/Item.jsx';

export default function List({ komitety, usunKomitetRef, edytujKomitetRef }) {
  return (
    <ol class="shadow container d-flex flex-column align-items-center p-3">
      <h2 class="text-primary">Zarejestrowane komitety</h2>

      {komitety.map((props) => {
        return <Item props={props} usunKomitetRefRef={usunKomitetRef} edytujKomitetRefRef={edytujKomitetRef} />;
      })}
    </ol>
  );
}
