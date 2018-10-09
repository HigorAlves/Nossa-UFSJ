import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class CadastrarRecursosFinanceiros extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h4>Cadastar Recursos Financeiros</h4>
              <hr />
              <form>
                <div class="form-group">
                  <label for="inputNome">Data de Cadastro</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Data Cadastro" />
                </div>
                <div class="form-group">
                  <label for="inputData">Valor</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="valor em reais" />
                </div>
                <div class="form-group">
                  <label for="inputIdentificadorEsp">Grande area</label>
                  <select id="inputIdentificadorEsp" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="inputIdentificadorEsp">Area</label>
                  <select id="inputIdentificadorEsp" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="inputIdentificadorEsp">SubArea</label>
                  <select id="inputIdentificadorEsp" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="inputData">CPF do Pro-reitor</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="valor em reais" />
                </div>
                <button type="submit" class="btn btn-primary my-2">Salvar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}