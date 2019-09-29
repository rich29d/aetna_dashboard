import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, CartesianGrid, Tooltip
} from 'recharts';
import serviceAuth from '../../services/auth';
import moment from 'moment';
import 'moment/locale/pt-br';

import installationsService from '../../services/installations';
import '../../assets/style/graphic.css';

moment.locale('pt-BR');

class Graphic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      period: 'ano',
      today: moment().format('YYYY-MM-DD'),
      sumSystemSizeByPeriod: []
    };
  }

  changePeriodGraphic(period = 'ano') {
    this.loadSumSystemSizeByPeriod(period);
  }

  async loadSumSystemSizeByPeriod(period = 'ano') {
    const sumSystemSizeByPeriod = await installationsService.sumSystemSizeByPeriod(period);
    this.setState({ sumSystemSizeByPeriod, period });
  }

  getNamePeriod(value, period) {
    if (period === 'mes') {
      return moment().month(+value - 1).format('MMMM');
    }

    if (period === 'semana') {
      return `semana ${value}`;
    }

    return value;
  }

  mountDataGraphic(sumSystemSizeByPeriod, period) {
    const dataKeyX = `dataInstalacao_${period}`;

    return sumSystemSizeByPeriod.map(sumSystemSize => ({
      periodo: this.getNamePeriod(sumSystemSize[dataKeyX], period),
      potencia: +sumSystemSize.potenciaSistema_soma
    }))
  }

  componentDidMount() {
    this.changePeriodGraphic();
  }

  render() {
    const { today, sumSystemSizeByPeriod, period } = this.state;
    const descriptionDate = moment(today, 'YYYY-MM-DD').format('dddd, DD [de] MMMM');
    const dataGraphic = this.mountDataGraphic(sumSystemSizeByPeriod, period);

    dataGraphic.reverse();

    return (
      <div className="Graphic Margin__Bottom--45">
        <div className="MaxWidth">
          <div className="Flex SpaceBetween Margin__Bottom--45">
            <div className="Graphic__Date Width--8">
              <ul className="Graphic__Date--menu Flex Margin__Bottom--25">
                <li className={period === 'dia' ? 'Active' : ''} onClick={() => this.changePeriodGraphic('dia')}>Dia</li>
                <li className={period === 'semana' ? 'Active' : ''} onClick={() => this.changePeriodGraphic('semana')}>Semana</li>
                <li className={period === 'mes' ? 'Active' : ''} onClick={() => this.changePeriodGraphic('mes')}>Mês</li>
                <li className={period === 'ano' ? 'Active' : ''} onClick={() => this.changePeriodGraphic('ano')}>Ano</li>
              </ul>

              <div className="Graphic__Date--description Size--25">{descriptionDate}</div>
            </div>

            <div className="Perfil__Photo Flex">
              <a href="#/login" onClick={() => serviceAuth.logout()}>Sair</a>
              <img src={require('../../assets/images/72.jpg')} alt="" />
            </div>
          </div>

          <LineChart
            width={1200}
            height={250}
            data={dataGraphic}
          >
            <CartesianGrid horizontal={false} stroke="#614b98" height={200} />
            <XAxis dataKey="periodo" axisLine={false} tickLine={false} tick={{ fill: '#b2a1f3' }} interval="preserveStartEnd"/>
            <Tooltip
              cursor={{ stroke: '#523e8a', strokeWidth: 2 }}
              labelStyle={{ color: "#FFF" }}
              itemStyle={{ color: "#FFF" }}
            />
            <Line type="monotone" dataKey="potencia" stroke="#71eaee" dot={false} strokeWidth={3.5} activeDot={{ stroke: '#49c5ca', fill: '#49c5ca' }} />
          </LineChart>
        </div>
      </div>
    );
  }
}

export default Graphic;
