import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';

import installationsService from '../../services/installations';
import Header from './Header';
import Graphic from './Graphic';
import Widget from './Widget';
import { periodGraphic } from '../../share/actions';

import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-BR');

class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countInstallations: [],
      biggerCostInstallations: [],
      biggersSumInstallations: [],
    };
  }

  async loadNumberInstallations() {
    const countInstallations = await installationsService.countInstallations();
    this.setState({ countInstallations });
  }

  async loadBiggerCostInstallations() {
    const biggerCostInstallations = await installationsService.biggerCostInstallations();
    this.setState({ biggerCostInstallations });
  }

  async loadBiggersSumInstallations() {
    const biggersSumInstallations = await installationsService.biggersSumInstallations();
    this.setState({ biggersSumInstallations });
  }

  componentDidMount() {
    this.loadNumberInstallations();
    this.loadBiggerCostInstallations();
    this.loadBiggersSumInstallations();
  }

  changePeriod(period) {
    this.loadSumSystemSizeByPeriod(period);
  }

  countInstallationsInfo(countInstallations = []) {
    return [{
      label: 'Total de instalações realizadas',
      value: get(countInstallations, '[0].id_conta', 0),
    }]
  }

  biggerCostInstallationsInfo(biggerCostInstallations = []) {
    const { cep, custo } = biggerCostInstallations[0] || {};
    
    return [{
      label: 'Maior custo de instalação',
      value: custo,
    },{
      label: 'Cep',
      value: cep,
    }]
  }

  biggersSumInstallationsInfo(biggersSumInstallations = []) {
    biggersSumInstallations.sort(function (a, b) {
      if (a.dataInstalacao_mes > b.dataInstalacao_mes) {
        return 1;
      }
      if (a.dataInstalacao_mes < b.dataInstalacao_mes) {
        return -1;
      }

      return 0;
    });
    
    return biggersSumInstallations.map(sum => ({
      label: moment().month(+sum.dataInstalacao_mes - 1).format('MMMM'),
      value: sum.custo_soma,
    }))
  }

  render() {
    const {
      countInstallations,
      biggerCostInstallations,
      biggersSumInstallations,
    } = this.state;
    
    return (
      <div>
        <Header />
        <Graphic/>

        <div className="Flex SpaceBetween MaxWidth Margin__Bottom--45">
          <Widget title={'Número de instalações'} infos={this.countInstallationsInfo(countInstallations)} index={'1'}></Widget>
          <Widget title={'Maior custo'} infos={this.biggerCostInstallationsInfo(biggerCostInstallations)} index={2}></Widget>
          <Widget title={'Meses com mais instalações'} infos={this.biggersSumInstallationsInfo(biggersSumInstallations)} index={3}></Widget>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  const period = store.rootReducer.period;

  return { period }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ periodGraphic }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Base);
