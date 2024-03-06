import React from 'react';

export default function Header({ title }) {
  return (
    <header class="shadow container d-flex justify-content-center p-3">
      <h1 class="text-primary">{title}</h1>
    </header>
  );
}
