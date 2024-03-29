export default {
    data() {
          return {
              flightOptionData: [
                  {
                      //General flight Infos
                      type: 'Ida',
                      mainOperation: 'Latam',
                      generalInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences. **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',                    
                      isRefundable: true,
                      betterPrice: false,
                      betterOption: true,
                      fasterOption: false,
                      isReturn: false,
                      isDeparture: true,
                      hasKids: true,
                      hasBabys: true,
                      personalBag: false,
                      checkedBag: false,
                      boardBag: false,
                      economyClass: false,
                      PremiumClass: false,
                      ExecutiveClass: true,
                      pageURL: "#/checkout",
                      ciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Latam-logo_-v_%28Indigo%29.svg/1600px-Latam-logo_-v_%28Indigo%29.svg.png',
  
                      // priceInfos
                      finalPrice: 'R$ 32.544',
                      Adults: '2 Adultos',
                      AdultsPrice: 'R$ 18.506',
                      Kids: '1 Criança',
                      KidsPrice: 'R$ 9.253',
                      Baby: '1 Bebê',
                      BabysPrice: 'R$ 926',
                      flightTax: 'R$ 3.859',
                      serviceTax: 'R$ 512',
                      flightDetail: [
                            {
                              // General infos
                              typeInfo: 'Ida',
                              departurenumberDate: '09/01',
                              ArrivalnumberDate: '10/01',
                              totalFlightDuration: '21h10m',
                              isDeparture: false,
                              directFlight: false,
                              personalBag: false,
                              checkedBag: false,
                              boardBag: true,
                              overNight:true,
                              economyClass: false,
                              PremiumClass: true,
                              ExecutiveClass: false,
                              operation: 'Gol',
                              number: 'AV86',
                              model: 'Airbus A320-100/200',
                              ciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',
  
                              //Departure Flight Details
                              departureDate: 'Ter, 09 de Jan de 2023',
                              departureTime: '07:30',
                              departureLocation: 'Guarulhos, São Paulo',
                              departureIATA: 'GRU',
                              departureAirport: 'Aeroporto Internacional de Guarulhos',
                              departureFlightDuration: '5h 15m',
  
                              //This flight has Connections?
                              hasConnection: true,
                              hasOneConnection: true,
                              hasMultipleConnection: false,
                              optionConnections: [
                                  {
                                      changeAirplane: true,
                                      connectionoperation: 'Gol',
                                      connectionnumber: 'AV86',
                                      connectionmodel: 'Airbus A320-100/200',
                                      connectionciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',
  
                                      connectionDate: 'Ter, 09 de Jan de 2023',
                                      connectionTime: '22:55',
                                      connectionLocation: 'Bogotá, Colombia',
                                      connectionIATA: 'BOG',
                                      connectionAirport: 'Aeroporto Internacional El Nuevo Dorado',
                                      connectionFlightDuration: '3h 50m',
                                      connectionDelay: '11h 30m',
                                  },
                                  
                              ],
  
                              //Arrival Flight Details
                              arrivalDate: 'Quar, 10 de Jan de 2023',
                              arrivalTime: '02:45',
                              arrivalLocation: 'Miami, Florida',
                              arrivalIATA: 'MIA',
                              arrivalAirport: 'Aeroporto Internacional Miami',
                              inFlightExtraInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences.  **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',
  
                            },
                        
                            
                      ],
                      
                  }
                  
              ]
          }
      }
  }