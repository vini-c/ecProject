<template>
  <v-layout>
    <v-main>
  <eC_mainNavBar />
  <ec_checkoutDesktop class="hideDesktopCheckout" v-bind:flightOptionData="recommendations"></ec_checkoutDesktop>
  <ec_checkoutMobile class="hideMobileCheckout" v-bind:flightOptionData="recommendations"></ec_checkoutMobile>
  <ec_secureFooter/>
</v-main>
</v-layout>
</template>
<script setup>
import '@/components/organisms/checkout/scss/checkout.scss'
import eC_mainNavBar from '@/components/organisms/nav/mainNavBar.vue'
import ec_checkoutDesktop from '@/components/organisms/checkout/ec_checkoutDesktop.vue'
import ec_checkoutMobile from '@/components/organisms/checkout/ec_checkoutMobile.vue'
import ec_secureFooter from '@/components/organisms/nav/secureFooter.vue'

</script>

<script>
export default {
  data() {
    return {
      "recommendations": [
                  {
                    "itineraries": [
                        {
                            "type": "Outbound",
                            "departureDate": "17/04",
                            "departureDetailedDate": "Sáb 17 de Mar, 2024",
                            "departureHour": "15:00",
                            "departureLocation": {
                                "id": 0,
                                "airportCode": "BSB",
                                "airportCity": "Brasília"
                            },
                            "arrivalLocation": {
                                "id": 0,
                                "airportCode": "GYN",
                                "airportCity": "Goiânia"
                            },
                            "mandatoryAirline": 
                                        {
                                            "code": "Gol",
                                            "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                                        },
                            "options": 
                                [
                                    {   
                                        "departureDate": "17/04",
                                        "departureHour": "15:00",
                                        "departureLocation": 
                                            {
                                                "id": 0,
                                                "airportCode": "BSB",
                                                "airportCity": "Brasília"
                                            },
                                        "arrivalDate": "17/04",
                                        "arrivalHour": "19:00",
                                            "arrivalLocation": 
                                            {
                                                "id": 0,
                                                "airportCode": "GYN",
                                                "airportCity": "Goiânia"
                                            },
                                        "mandatoryAirline": 
                                            {
                                                "code": "Gol",
                                                "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                                            },
                                        "baggageType": "Personal",
                                        "hasConnection": "false",
                                        "tripId": "9AoAAB+LCAAAAAAABADtlt9v2jAQx/+VyntNITGEH34LVNBshWZAK03THq6JAavBjpywMSH+oP0d+8d2dsLP7aGV+rYiBGff8eXufB85WxIQRh3St589+znYEFboNXfIVOSEtV1rhAlhzS5GCiCMDBvEIaPnjLA5pDmGRnbh1jB4pta6rxIeJkGWihgSRZiP2yJTVv+G54WQCqW/bsk9ivWmPVS7MbJfxmhFaFGXNq/d5rXXnrkus2/0TE493aNn9w31QYs5zFQBKWZKaavWxGQirVYqxmzyfTLmfw/h9xnXuKfhWAjgBmCQ55BHVWU5GmqsDpN1yB1+e+SsD0leLVR6dSfkEvKr4PcvzVHFIcGxwsCWOHkwxU4vamwxzy9rvDUut+X5Jqx/EdZhXtWKW+NyO56xb9YaYlBmw2O++eF4vTJ5Nt0uLqZ8seKyMP4QlwPQfPYz41Uj+koeiz9bHI+0h90y9Y8/BsHQG4bmlHr91LTJNqU3QCOyVnSwJuM12miFsZIczWVRZDmr138o9QTXOcjkSW1qhYbvPE2FfK7FalV70vWHLFWQ1FO1UCvQMeR1dGQglwJErPzaQsxtGSuRmr5vyVitjL49a3M0KhELtc+jXIWy4FqaTUo9arsWaT4XGxs3KQNNjR/aHco7jXI9UPgzszm3L7LDXZyPGLUEDnEM5XiUo40DE8rEzpi2g/55DbIQCSS87EPEczWCjcAky7Y+SOsd8QS/MebT8Kqc351zED1XbbxIxfKQYoY2u0dIbWVmamewQGuQisWyQFm+MVDxOddcxgIi2FQnJucm9bSaBSMXGvZsYhUMYQUDfS0MJQHBkfdLGChl9BQGSunfMHQs/f4pDK7rX8LQdE9g8N13GN5hKGGgbwvD/mZovBoGS4CFoboGz2Dozrw2DvEJDF7bzvQ5DBjWYY3Tm8HrNC5uBpf5JzC0m945DI/vMPy3MLzJzfAv4YPu/pnwZaLOUaHlHzSKta4Kyu1jWyyUBJEHMc9zZZ5PX5bw7g9kWWEa9AoAAA==",
                                        // "hasDirectFlight": "true",
                                        // "hasMultipleConnection": "false",
                                        "isLayover": false,
                                        "totalDuration": "17h 50min",
                                        "segments": [
                                                {
                                                    "mandatoryAirline": 
                                                        {
                                                            "code": "Gol",
                                                            "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                                                        },
                                                    "departure": {
                                                        "dateInLocation": "2024-04-17T14:15:00",
                                                        "hour": "15:00",
                                                        "date": "Segunda-feira, 05 de Maio",
                                                        "id": 0,
                                                        "airportCode": "BSB",
                                                        "airportCity": "Brasília - Distrito Federal",
                                                        "airportName": "Aeroporto Internacional de Brasília",
                                                    },
                                                    "arrival": {
                                                        "dateInLocation": "2024-04-17T16:10:00",
                                                        "hour": "15:00",
                                                        "date": "Segunda-feira, 05 de Maio",
                                                        "id": 0,
                                                        "airportCode": "GRU",
                                                        "airportCity": "Guaruhos - São Paulo",
                                                        "airportName": "Aeroporto Internacional de Guarulhos",
                                                    },
                                                    "stopQuantity": 0,
                                                    "duration": "01:55:00",
                                                    "baggageInfo": {
                                                        "baggageType": "CarryOn"
                                                    },
                                                    "fareInfo": {
                                                        "fareBasis": "ONJAAG1GIN",
                                                        "fareBasisCode": "O",
                                                        "fareFamilyName": "Promo",
                                                        "fareFamilyCode": "PRO",
                                                        "fareType": 2
                                                    },
                                                    "aircraftType": "738",
                                                    "flightNumber": "1409",
                                                    "tripId": "9AoAAB+LCAAAAAAABADtlt9v2jAQx/+VyntNITGEH34LVNBshWZAK03THq6JAavBjpywMSH+oP0d+8d2dsLP7aGV+rYiBGff8eXufB85WxIQRh3St589+znYEFboNXfIVOSEtV1rhAlhzS5GCiCMDBvEIaPnjLA5pDmGRnbh1jB4pta6rxIeJkGWihgSRZiP2yJTVv+G54WQCqW/bsk9ivWmPVS7MbJfxmhFaFGXNq/d5rXXnrkus2/0TE493aNn9w31QYs5zFQBKWZKaavWxGQirVYqxmzyfTLmfw/h9xnXuKfhWAjgBmCQ55BHVWU5GmqsDpN1yB1+e+SsD0leLVR6dSfkEvKr4PcvzVHFIcGxwsCWOHkwxU4vamwxzy9rvDUut+X5Jqx/EdZhXtWKW+NyO56xb9YaYlBmw2O++eF4vTJ5Nt0uLqZ8seKyMP4QlwPQfPYz41Uj+koeiz9bHI+0h90y9Y8/BsHQG4bmlHr91LTJNqU3QCOyVnSwJuM12miFsZIczWVRZDmr138o9QTXOcjkSW1qhYbvPE2FfK7FalV70vWHLFWQ1FO1UCvQMeR1dGQglwJErPzaQsxtGSuRmr5vyVitjL49a3M0KhELtc+jXIWy4FqaTUo9arsWaT4XGxs3KQNNjR/aHco7jXI9UPgzszm3L7LDXZyPGLUEDnEM5XiUo40DE8rEzpi2g/55DbIQCSS87EPEczWCjcAky7Y+SOsd8QS/MebT8Kqc351zED1XbbxIxfKQYoY2u0dIbWVmamewQGuQisWyQFm+MVDxOddcxgIi2FQnJucm9bSaBSMXGvZsYhUMYQUDfS0MJQHBkfdLGChl9BQGSunfMHQs/f4pDK7rX8LQdE9g8N13GN5hKGGgbwvD/mZovBoGS4CFoboGz2Dozrw2DvEJDF7bzvQ5DBjWYY3Tm8HrNC5uBpf5JzC0m945DI/vMPy3MLzJzfAv4YPu/pnwZaLOUaHlHzSKta4Kyu1jWyyUBJEHMc9zZZ5PX5bw7g9kWWEa9AoAAA==",
                                                    "flightId": 0,
                                                    "seatsRemaining": 9,
                                                    "isConnection": false,
                                                    "isLayover": false,
                                                    "cabinType": "Economic",
                                                    "hasConnection": true,
                                                },
                                                {
                                                    "mandatoryAirline": 
                                                        {
                                                            "code": "Gol",
                                                            "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                                                        },
                                                    "departure": {
                                                        "dateInLocation": "2024-04-17T14:15:00",
                                                        "hour": "15:00",
                                                        "date": "Segunda-feira, 05 de Maio",
                                                        "id": 0,
                                                        "airportCode": "BSB",
                                                        "airportCity": "Brasília - Distrito Federal",
                                                        "airportName": "Aeroporto Internacional de Brasília",
                                                    },
                                                    "arrival": {
                                                        "dateInLocation": "2024-04-17T16:10:00",
                                                        "hour": "15:00",
                                                        "date": "Segunda-feira, 05 de Maio",
                                                        "id": 0,
                                                        "airportCode": "GRU",
                                                        "airportCity": "Guaruhos - São Paulo",
                                                        "airportName": "Aeroporto Internacional de Guarulhos",
                                                    },
                                                    "stopQuantity": 0,
                                                    "duration": "01:55:00",
                                                    "baggageInfo": {
                                                        "baggageType": "CarryOn"
                                                    },
                                                    "fareInfo": {
                                                        "fareBasis": "ONJAAG1GIN",
                                                        "fareBasisCode": "O",
                                                        "fareFamilyName": "Promo",
                                                        "fareFamilyCode": "PRO",
                                                        "fareType": 2
                                                    },
                                                    "aircraftType": "738",
                                                    "flightNumber": "1409",
                                                    "tripId": "9AoAAB+LCAAAAAAABADtlt9v2jAQx/+VyntNITGEH34LVNBshWZAK03THq6JAavBjpywMSH+oP0d+8d2dsLP7aGV+rYiBGff8eXufB85WxIQRh3St589+znYEFboNXfIVOSEtV1rhAlhzS5GCiCMDBvEIaPnjLA5pDmGRnbh1jB4pta6rxIeJkGWihgSRZiP2yJTVv+G54WQCqW/bsk9ivWmPVS7MbJfxmhFaFGXNq/d5rXXnrkus2/0TE493aNn9w31QYs5zFQBKWZKaavWxGQirVYqxmzyfTLmfw/h9xnXuKfhWAjgBmCQ55BHVWU5GmqsDpN1yB1+e+SsD0leLVR6dSfkEvKr4PcvzVHFIcGxwsCWOHkwxU4vamwxzy9rvDUut+X5Jqx/EdZhXtWKW+NyO56xb9YaYlBmw2O++eF4vTJ5Nt0uLqZ8seKyMP4QlwPQfPYz41Uj+koeiz9bHI+0h90y9Y8/BsHQG4bmlHr91LTJNqU3QCOyVnSwJuM12miFsZIczWVRZDmr138o9QTXOcjkSW1qhYbvPE2FfK7FalV70vWHLFWQ1FO1UCvQMeR1dGQglwJErPzaQsxtGSuRmr5vyVitjL49a3M0KhELtc+jXIWy4FqaTUo9arsWaT4XGxs3KQNNjR/aHco7jXI9UPgzszm3L7LDXZyPGLUEDnEM5XiUo40DE8rEzpi2g/55DbIQCSS87EPEczWCjcAky7Y+SOsd8QS/MebT8Kqc351zED1XbbxIxfKQYoY2u0dIbWVmamewQGuQisWyQFm+MVDxOddcxgIi2FQnJucm9bSaBSMXGvZsYhUMYQUDfS0MJQHBkfdLGChl9BQGSunfMHQs/f4pDK7rX8LQdE9g8N13GN5hKGGgbwvD/mZovBoGS4CFoboGz2Dozrw2DvEJDF7bzvQ5DBjWYY3Tm8HrNC5uBpf5JzC0m945DI/vMPy3MLzJzfAv4YPu/pnwZaLOUaHlHzSKta4Kyu1jWyyUBJEHMc9zZZ5PX5bw7g9kWWEa9AoAAA==",
                                                    "flightId": 0,
                                                    "seatsRemaining": 9,
                                                    "isConnection": true,
                                                    "isLayover": false,
                                                    "cabinType": "Economic",
                                                    "hasConnection": false,
                                                },
                                                
                                            ],
                                    }
                                ],
                            "priceDetails": {
                                "pricesPerPassenger": [
                                    {
                                        "type": "ADT",
                                        "quantity": 2,
                                        "exchange": 1,
                                        "currency": "BRL",
                                        "individualEquivalentFare": 176.10,
                                        "individualFare": 176.10,
                                        "individualBoardingCharge": 37.165,
                                        "individualServiceCharge": 20.50,
                                        "individualFuelSurcharge": 0,
                                        "totalIndividualCharges": 57.665
                                    },
                                    {
                                        "type": "CHD",
                                        "quantity": 2,
                                        "exchange": 1,
                                        "currency": "BRL",
                                        "individualEquivalentFare": 176.10,
                                        "individualFare": 176.10,
                                        "individualBoardingCharge": 37.165,
                                        "individualServiceCharge": 20.50,
                                        "individualFuelSurcharge": 0,
                                        "totalIndividualCharges": 57.665
                                    },
                                    {
                                        "type": "INF",
                                        "quantity": 2,
                                        "exchange": 1,
                                        "currency": "BRL",
                                        "individualEquivalentFare": 0.00,
                                        "individualFare": 0.00,
                                        "individualBoardingCharge": -20.00,
                                        "individualServiceCharge": 20.50,
                                        "individualFuelSurcharge": 0,
                                        "totalIndividualCharges": 0.50
                                    }
                                ],
                                "segmentCharges": 231.660,
                                "totalFare": 704.40,
                                "totalAmount": 936.060
                            },
                            "totalDuration": "17:50:00",
                            "numberOfStops": 1
                        },
                        {
                            "type": "Inbound",
                            "departureDate": "17/04",
                            "departureDetailedDate": "Sáb 17 de Mar, 2024",
                            "departureHour": "15:00",
                            "departureLocation": {
                                "id": 0,
                                "airportCode": "BSB",
                                "airportCity": "Brasília"
                            },
                            "arrivalLocation": {
                                "id": 0,
                                "airportCode": "GYN",
                                "airportCity": "Goiânia"
                            },
                            "mandatoryAirline": 
                                        {
                                            "code": "Gol",
                                            "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                                        },
                            "options": 
                                [
                                    {   
                                        "departureDate": "17/04",
                                        "departureHour": "15:00",
                                        "departureLocation": 
                                            {
                                                "id": 0,
                                                "airportCode": "BSB",
                                                "airportCity": "Brasília"
                                            },
                                        "arrivalDate": "17/04",
                                        "arrivalHour": "19:00",
                                            "arrivalLocation": 
                                            {
                                                "id": 0,
                                                "airportCode": "GYN",
                                                "airportCity": "Goiânia"
                                            },
                                        "mandatoryAirline": 
                                            {
                                                "code": "Gol",
                                                "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                                            },
                                        "baggageType": "CarryOn",
                                        "hasConnection": "false",
                                        // "hasDirectFlight": "true",
                                        // "hasMultipleConnection": "false",
                                        "isLayover": false,
                                        "totalDuration": "17h 50min",
                                        "tripId": "9AoAAB+LCAAAAAAABADtlt9v2jAQx/+VyntNITGEH34LVNBshWZAK03THq6JAavBjpywMSH+oP0d+8d2dsLP7aGV+rYiBGff8eXufB85WxIQRh3St589+znYEFboNXfIVOSEtV1rhAlhzS5GC412421412421iCMDBvEIaPnjLA5pDmGRnbh1jB4pta6rxIeJkGWihgSRZiP2yJTVv+G54WQCqW/bsk9ivWmPVS7MbJfxmhFaFGXNq/d5rXXnrkus2/0TE493aNn9w31QYs5zFQBKWZKaavWxGQirVYqxmzyfTLmfw/h9xnXuKfhWAjgBmCQ55BHVWU5GmqsDpN1yB1+e+SsD0leLVR6dSfkEvKr4PcvzVHFIcGxwsCWOHkwxU4vamwxzy9rvDUut+X5Jqx/EdZhXtWKW+NyO56xb9YaYlBmw2O++eF4vTJ5Nt0uLqZ8seKyMP4QlwPQfPYz41Uj+koeiz9bHI+0h90y9Y8/BsHQG4bmlHr91LTJNqU3QCOyVnSwJuM12miFsZIczWVRZDmr138o9QTXOcjkSW1qhYbvPE2FfK7FalV70vWHLFWQ1FO1UCvQMeR1dGQglwJErPzaQsxtGSuRmr5vyVitjL49a3M0KhELtc+jXIWy4FqaTUo9arsWaT4XGxs3KQNNjR/aHco7jXI9UPgzszm3L7LDXZyPGLUEDnEM5XiUo40DE8rEzpi2g/55DbIQCSS87EPEczWCjcAky7Y+SOsd8QS/MebT8Kqc351zED1XbbxIxfKQYoY2u0dIbWVmamewQGuQisWyQFm+MVDxOddcxgIi2FQnJucm9bSaBSMXGvZsYhUMYQUDfS0MJQHBkfdLGChl9BQGSunfMHQs/f4pDK7rX8LQdE9g8N13GN5hKGGgbwvD/mZovBoGS4CFoboGz2Dozrw2DvEJDF7bzvQ5DBjWYY5233Tm8HrNC5uBpf5JzC0m945DI/vMPy3MLzJzfAv4YPu/pnwZaLOUaHlHzSKta4Kyu1jWyyUBJEHMc9zZZ5PX5bw7g9kWWEa9AoAAA==",
                                        "segments": [
                                                {
                                                    "mandatoryAirline": 
                                                        {
                                                            "code": "Gol",
                                                            "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                                                        },
                                                    "departure": {
                                                        "dateInLocation": "2024-04-17T14:15:00",
                                                        "hour": "15:00",
                                                        "date": "Segunda-feira, 05 de Maio",
                                                        "id": 0,
                                                        "airportCode": "BSB",
                                                        "airportCity": "Brasília - Distrito Federal",
                                                        "airportName": "Aeroporto Internacional de Brasília",
                                                    },
                                                    "arrival": {
                                                        "dateInLocation": "2024-04-17T16:10:00",
                                                        "hour": "15:00",
                                                        "date": "Segunda-feira, 05 de Maio",
                                                        "id": 0,
                                                        "airportCode": "GRU",
                                                        "airportCity": "Guaruhos - São Paulo",
                                                        "airportName": "Aeroporto Internacional de Guarulhos",
                                                    },
                                                    "stopQuantity": 0,
                                                    "duration": "01:55:00",
                                                    "baggageInfo": {
                                                        "baggageType": "CarryOn"
                                                    },
                                                    "fareInfo": {
                                                        "fareBasis": "ONJAAG1GIN",
                                                        "fareBasisCode": "O",
                                                        "fareFamilyName": "Promo",
                                                        "fareFamilyCode": "PRO",
                                                        "fareType": 2
                                                    },
                                                    "aircraftType": "738",
                                                    "flightNumber": "1409",
                                                    "tripId": "9AoAAB+LCAAAAAAABADtlt9v2jAQx/+VyntNITGEH34LVNBshWZAK03THq6JAavBjpywMSH+oP0d+8d2dsLP7aGV+rYiBGff8eXufB85WxIQRh3St589+znYEFboNXfIVOSEtV1rhAlhzS5GCiCMDBvEIaPnjLA5pDmGRnbh1jB4pta6rxIeJkGWihgSRZiP2yJTVv+G54WQCqW/bsk9ivWmPVS7MbJfxmhFaFGXNq/d5rXXnrkus2/0TE493aNn9w31QYs5zFQBKWZKaavWxGQirVYqxmzyfTLmfw/h9xnXuKfhWAjgBmCQ55BHVWU5GmqsDpN1yB1+e+SsD0leLVR6dSfkEvKr4PcvzVHFIcGxwsCWOHkwxU4vamwxzy9rvDUut+X5Jqx/EdZhXtWKW+NyO56xb9YaYlBmw2O++eF4vTJ5Nt0uLqZ8seKyMP4QlwPQfPYz41Uj+koeiz9bHI+0h90y9Y8/BsHQG4bmlHr91LTJNqU3QCOyVnSwJuM12miFsZIczWVRZDmr138o9QTXOcjkSW1qhYbvPE2FfK7FalV70vWHLFWQ1FO1UCvQMeR1dGQglwJErPzaQsxtGSuRmr5vyVitjL49a3M0KhELtc+jXIWy4FqaTUo9arsWaT4XGxs3KQNNjR/aHco7jXI9UPgzszm3L7LDXZyPGLUEDnEM5XiUo40DE8rEzpi2g/55DbIQCSS87EPEczWCjcAky7Y+SOsd8QS/MebT8Kqc351zED1XbbxIxfKQYoY2u0dIbWVmamewQGuQisWyQFm+MVDxOddcxgIi2FQnJucm9bSaBSMXGvZsYhUMYQUDfS0MJQHBkfdLGChl9BQGSunfMHQs/f4pDK7rX8LQdE9g8N13GN5hKGGgbwvD/mZovBoGS4CFoboGz2Dozrw2DvEJDF7bzvQ5DBjWYY3Tm8HrNC5uBpf5JzC0m945DI/vMPy3MLzJzfAv4YPu/pnwZaLOUaHlHzSKta4Kyu1jWyyUBJEHMc9zZZ5PX5bw7g9kWWEa9AoAAA==",
                                                    "flightId": 0,
                                                    "seatsRemaining": 9,
                                                    "isConnection": false,
                                                    "isLayover": false,
                                                    "cabinType": "Economic",
                                                    "hasConnection": true,
                                                },
                                                {
                                                    "mandatoryAirline": 
                                                        {
                                                            "code": "Gol",
                                                            "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                                                        },
                                                    "departure": {
                                                        "dateInLocation": "2024-04-17T14:15:00",
                                                        "hour": "15:00",
                                                        "date": "Segunda-feira, 05 de Maio",
                                                        "id": 0,
                                                        "airportCode": "BSB",
                                                        "airportCity": "Brasília - Distrito Federal",
                                                        "airportName": "Aeroporto Internacional de Brasília",
                                                    },
                                                    "arrival": {
                                                        "dateInLocation": "2024-04-17T16:10:00",
                                                        "hour": "15:00",
                                                        "date": "Segunda-feira, 05 de Maio",
                                                        "id": 0,
                                                        "airportCode": "GRU",
                                                        "airportCity": "Guaruhos - São Paulo",
                                                        "airportName": "Aeroporto Internacional de Guarulhos",
                                                    },
                                                    "stopQuantity": 0,
                                                    "duration": "01:55:00",
                                                    "baggageInfo": {
                                                        "baggageType": "CarryOn"
                                                    },
                                                    "fareInfo": {
                                                        "fareBasis": "ONJAAG1GIN",
                                                        "fareBasisCode": "O",
                                                        "fareFamilyName": "Promo",
                                                        "fareFamilyCode": "PRO",
                                                        "fareType": 2
                                                    },
                                                    "aircraftType": "738",
                                                    "flightNumber": "1409",
                                                    "tripId": "9AoAAB+LCAAAAAAABADtlt9v2jAQx/+VyntNITGEH34LVNBshWZAK03THq6JAavBjpywMSH+oP0d+8d2dsLP7aGV+rYiBGff8eXufB85WxIQRh3St589+znYEFboNXfIVOSEtV1rhAlhzS5GCiCMDBvEIaPnjLA5pDmGRnbh1jB4pta6rxIeJkGWihgSRZiP2yJTVv+G54WQCqW/bsk9ivWmPVS7MbJfxmhFaFGXNq/d5rXXnrkus2/0TE493aNn9w31QYs5zFQBKWZKaavWxGQirVYqxmzyfTLmfw/h9xnXuKfhWAjgBmCQ55BHVWU5GmqsDpN1yB1+e+SsD0leLVR6dSfkEvKr4PcvzVHFIcGxwsCWOHkwxU4vamwxzy9rvDUut+X5Jqx/EdZhXtWKW+NyO56xb9YaYlBmw2O++eF4vTJ5Nt0uLqZ8seKyMP4QlwPQfPYz41Uj+koeiz9bHI+0h90y9Y8/BsHQG4bmlHr91LTJNqU3QCOyVnSwJuM12miFsZIczWVRZDmr138o9QTXOcjkSW1qhYbvPE2FfK7FalV70vWHLFWQ1FO1UCvQMeR1dGQglwJErPzaQsxtGSuRmr5vyVitjL49a3M0KhELtc+jXIWy4FqaTUo9arsWaT4XGxs3KQNNjR/aHco7jXI9UPgzszm3L7LDXZyPGLUEDnEM5XiUo40DE8rEzpi2g/55DbIQCSS87EPEczWCjcAky7Y+SOsd8QS/MebT8Kqc351zED1XbbxIxfKQYoY2u0dIbWVmamewQGuQisWyQFm+MVDxOddcxgIi2FQnJucm9bSaBSMXGvZsYhUMYQUDfS0MJQHBkfdLGChl9BQGSunfMHQs/f4pDK7rX8LQdE9g8N13GN5hKGGgbwvD/mZovBoGS4CFoboGz2Dozrw2DvEJDF7bzvQ5DBjWYY3Tm8HrNC5uBpf5JzC0m945DI/vMPy3MLzJzfAv4YPu/pnwZaLOUaHlHzSKta4Kyu1jWyyUBJEHMc9zZZ5PX5bw7g9kWWEa9AoAAA==",
                                                    "flightId": 0,
                                                    "seatsRemaining": 9,
                                                    "isConnection": true,
                                                    "isLayover": false,
                                                    "cabinType": "Economic",
                                                    "hasConnection": false,
                                                },
                                                
                                            ],
                                    }
                                ],
                            "priceDetails": {
                                "pricesPerPassenger": [
                                    {
                                        "type": "ADT",
                                        "quantity": 2,
                                        "exchange": 1,
                                        "currency": "BRL",
                                        "individualEquivalentFare": 176.10,
                                        "individualFare": 176.10,
                                        "individualBoardingCharge": 37.165,
                                        "individualServiceCharge": 20.50,
                                        "individualFuelSurcharge": 0,
                                        "totalIndividualCharges": 57.665
                                    },
                                    {
                                        "type": "CHD",
                                        "quantity": 2,
                                        "exchange": 1,
                                        "currency": "BRL",
                                        "individualEquivalentFare": 176.10,
                                        "individualFare": 176.10,
                                        "individualBoardingCharge": 37.165,
                                        "individualServiceCharge": 20.50,
                                        "individualFuelSurcharge": 0,
                                        "totalIndividualCharges": 57.665
                                    },
                                    {
                                        "type": "INF",
                                        "quantity": 2,
                                        "exchange": 1,
                                        "currency": "BRL",
                                        "individualEquivalentFare": 0.00,
                                        "individualFare": 0.00,
                                        "individualBoardingCharge": -20.00,
                                        "individualServiceCharge": 20.50,
                                        "individualFuelSurcharge": 0,
                                        "totalIndividualCharges": 0.50
                                    }
                                ],
                                "segmentCharges": 231.660,
                                "totalFare": 704.40,
                                "totalAmount": 936.060
                            },
                            "totalDuration": "17:50:00",
                            "numberOfStops": 1
                        },
                    ],
                    "mandatoryAirline": {
                        "code": "Gol",
                        "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                    },
                    "totalAdultFare": 704.40,
                    "totalAdultBoardingCharge": 148.66,
                    "totalAdultServiceCharge": 82.00,
                    "totalChildFare": 704.40,
                    "totalChildBoardingCharge": 148.66,
                    "totalChildServiceCharge": 82.00,
                    "totalInfantFare": 0.00,
                    "totalInfantBoardingCharge": -80.00,
                    "totalInfantServiceCharge": 82.00,
                    "totalFare": 1408.80,
                    "totalBoardingCharge": 217.32,
                    "totalServiceCharge": 246.00,
                    "totalTaxes": 463.32,
                    "totalAmount": 1872.12,
                    "baggageType": "CarryOn",
                    "isRefundable": false,
                    "generalInfos": "Em todo voo você tem direito a levar uma bolsa pequena com seus pertences O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia",
                    "sourceType": 1
                     },
          ]
        
      }
  }
}
</script>

