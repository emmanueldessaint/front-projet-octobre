import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import nock from 'nock';
import axios from "axios";
import supertest from 'supertest';
import * as api from "./api";

jest.mock("./api");

// import renderer from 'react-test-renderer';

test('boutons et affichage du tableau', () => {
  render(<App />);
  expect(
    screen.getByText("Matériel")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Stock")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Ajouter un emprunt")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Supprimer le matériel")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Ajouter du matériel")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Ajouter / supprimer un étudiant")
  ).toBeInTheDocument();
});

describe('expectedData', () => {

  const mock = jest.fn();

  it('blabla', async () => {
    api.getMaterielsApi.mockReturnValue(42);
    mock();
    console.log(mock())
    // api.getMaterielsApi.mockReturnValue({
    //   results: [{ prenom: "Emmanuel"}]
    // })
    // render(<App />);
    // await waitFor(() => {
    //   screen.getByText('Emmanuel')
    // })
  })
})

