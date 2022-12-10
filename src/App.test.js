import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import nock from 'nock';
import axios from "axios";
import supertest from 'supertest';

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
});

const request = require('supertest')('http://vps-f0007953.vps.ovh.net:8000/api');
const assert = require('chai').assert;

describe("test de l'api", () => {
  it('GET / materiels', () => {
    return request.get('/getAllMateriels').expect(200);
  })
  it('GET / emprunts', () => {
    return request.get('/getAllEmprunts').expect(200);
  })
  it('GET / étudiants', () => {
    return request.get('/getStudents').expect(200);
  })
  it('GET / étudiants', () => {
    return request.get('/getStudentss').expect(200);
  })
});

