import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
} from './styles';

export function Home() {

  const carDataOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
  }

  const carDataTwo = {
    brand: 'Bugatti',
    name: 'Premium',
    rent: {
      period: 'AO DIA',
      price: 953,
    },
    thumbnail: 'https://i.pinimg.com/originals/ac/e6/3b/ace63b2f6ccd29c7e567e070089fcd5b.png'
  }

  const carDataThree = {
    brand: 'Lamborghini',
    name: 'Revent XF3N',
    rent: {
      period: 'AO DIA',
      price: 626,
    },
    thumbnail: 'https://www.pngmart.com/files/16/Convertible-Red-Lamborghini-PNG-Clipart.png'
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carDataOne}/>

      <Car data={carDataTwo}/>

      <Car data={carDataThree}/>

    </Container>
  );
}