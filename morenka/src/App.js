import './App.css';
import Header from './Header/Header.jsx';
import Form from './Form/Form.jsx';
import List from './List/List.jsx';
import Results from './Results/Results.jsx';
import Footer from './Footer/Footer.jsx';
import { useState, useRef } from 'react';

function App() {
  const title = 'Kalkulator Wyborczy';

  let startKomitety = [
    {
      nazwa: 'NSDAP',
      iloscGlosow: 1254,
      jestKoalicja: true,
      id: crypto.randomUUID(),
    },
    {
      nazwa: 'getElementById',
      iloscGlosow: 14,
      jestKoalicja: false,
      id: crypto.randomUUID(),
    },
    {
      nazwa: 'NKWD',
      iloscGlosow: 2137,
      jestKoalicja: false,
      id: crypto.randomUUID(),
    },
  ];

  const [komitety, ustawKomitety] = useState(startKomitety);

  const dodajKomitet = (komitet) => {
    ustawKomitety((prevState) => {
      komitet.id = crypto.randomUUID();

      return [...prevState, komitet];
    });
  };
  let [editedKomitet, setEditedKomitet] = useState(null);
  let [editing, ustawEditing] = useState(false);
  const edytujKomitet = (id) => {
    setFormShown(false);
    ustawEditing(true);
    const crr = komitety.find((k) => k.id === id);

    setEditedKomitet(crr);

    usunKomitet(id);
  };

  // const usunKomitet = (id) => {
  //   ustawKomitety((prevState) => {
  //     let betterState = new Array();
  //     prevState.forEach((kom) => {
  //       if (kom.id != id) {
  //         betterState.push(kom);
  //       }
  //     });
  //     return betterState;
  //   });
  // };

  const usunKomitet = (id) => {
    ustawKomitety((prevState) => {
      return prevState.filter((kom) => kom.id !== id);
    });
  };

  let [formShown, setFormShown] = useState(false);
  let [resShown, setResShown] = useState(false);

  const switchFormShown = () => {
    setFormShown(!formShown);
  };

  const switchResShown = () => {
    setResShown(!resShown);
  };

  return (
    <div class="d-flex flex-column align-items-center gap-5 p-5">
      <Header title={title} />
      <List
        komitety={komitety}
        usunKomitetRef={usunKomitet}
        edytujKomitetRef={edytujKomitet}
      />

      <button onClick={switchFormShown} class="btn btn-primary">
        {formShown ? 'Schowaj formularz' : 'Dodaj nowe'}
      </button>
      {(formShown || editing) && (
        <Form
          dodajKomitetRef={dodajKomitet}
          edited={editedKomitet}
          editing={editing}
          ustawEditing={ustawEditing}
        />
      )}
      <button onClick={switchResShown} class="btn btn-primary">
        {resShown ? 'Schowaj wyniki' : 'Zobacz wyniki'}
      </button>

      {resShown && <Results komitety={komitety} />}
      <Footer />
    </div>
  );
}

export default App;
