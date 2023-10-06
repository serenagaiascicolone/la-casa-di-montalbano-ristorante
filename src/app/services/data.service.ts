import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class dataService {


  // LIST PER RIEMPIRE SECTIONS COMPONENT E HEADER 
  cardsList: {image: string, title: string, description: string, id: string}[]  = [
    {
      image: 'pan',
      title: 'About us',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cupiditate totam vero. Unde tenetur quisquam illum eveniet nemo dignissimos minima ad harum quo. Non et laboriosam iure. Quidem, ducimus a?',
      id: 'about-us'
    },
    {
      image: 'ingredients',
      title: 'Ingredienti',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cupiditate totam vero. Unde tenetur quisquam illum eveniet nemo dignissimos minima ad harum quo. Non et laboriosam iure. Quidem, ducimus a?',
      id: 'ingredienti'
    },
    {
      image: 'pizza',
      title: 'Pizzeria',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cupiditate totam vero. Unde tenetur quisquam illum eveniet nemo dignissimos minima ad harum quo. Non et laboriosam iure. Quidem, ducimus a?',
      id: 'pizzeria'
    },
    {
      image: 'restourant',
      title: 'Ristorante',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cupiditate totam vero. Unde tenetur quisquam illum eveniet nemo dignissimos minima ad harum quo. Non et laboriosam iure. Quidem, ducimus a?',
      id: 'ristorante'
    },
  ]

  pizzeList = [
    {
        name: 'Il ladro di merendine',
        description: 'pomodoro, aglio, olive, origano',
        price: 3.00,
        img: '1',
    },
    {
        name: 'Il cane di terracotta',
        description: 'pomodoro, fiordilatte, basilico',
        price: 3.50,
        img: '2',
    },
    {
        name: `La forma dell'acqua`,
        description: 'burro di pistacchi, mortadella di pollo, granella di pistacchio, ricotta',
        price: 11.50,
        img: '3',
    },
    {
        name: 'Riccardino',
        description: 'crema di zucchine, fiordilatte, prezzemolo, zucchine grigliate',
        price: 8.00,
        img: '4',
    },
    {
        name: 'La voce del violino',
        description: 'datterino giallo, acciughe, fiordilatte,  olive',
        price: 8.00,
        img: '5',
    },
    {
        name: 'La gita a Tindari',
        description: 'fiori di zucca, fiordilatte, acciughe',
        price: 7.00,
        img: '6',
    },
    {
        name: 'La luna di carta',
        description: 'fiordilatte, insalata, prosciutto cotto, limone',
        price: 8.00,
        img: '7',
    },
    {
        name: 'Le ali della sfinge',
        description: 'fiordilatte, funghi porcini, prezzemolo, olio',
        price: 8.00,
        img: '8',
    },
    {
        name: 'La pazienza del ragno',
        description: 'vellutata di zucca, fiordilatte, speck, olio',
        price: 10.00,
        img: '9',
    },
]

restaurantList: 
{primi: {name: string, description: string, price: number, image: string} [],
secondi: {name: string, description: string, price: number, image: string} [],
desserts: {name: string, description: string, price: number, image: string} [],
vini: {name: string, description: '', price: number, image: string} []} = 
    { 
        primi: [

            {
                name: 'il sorriso di angelica',
                description: 'riso carnaroli, zucca delica, speck del Trentino',
                price: 12.00,
                image: 'primo1',
            },
            {
                name: 'la rete di protezione',
                description: 'spaghetti, vongole veraci, bottarga',
                price: 15.00,
                image: 'primo2',
            },
        ],
        secondi: [
            {
                name: 'la giostra degli scambi',
                description: 'orata, lattuga verde, ciliegino, carote, finocchi e patate novelle',
                price: 20.00,
                image: 'secondo1',
            },
            {
                name: 'la caccia al tesoro',
                description: 'fuso di pollo ruspante, broccoli e patate',
                price: 12.00,
                image: 'secondo2',
            },
        ],
        desserts: [
            {
                name: 'una lama di luce',
                description: 'mascarpone, savoiardi, uova, caffè, cacao, zucchero',
                price: 7.00,
                image: 'dessert1',
            },
            {
                name: 'la luna di carta',
                description: 'mandorle, panna, burro, tuorli, zucchero, cioccolato',
                price: 10.00,
                image: 'dessert2',
            },
        ],
          vini: [
            {
                name: 'Donnafugata',
                description: '',
                price: 18.00,
                image: 'wine1',
            },
            {
                name: 'Carjcanti',
                description: '',
                price: 15.00,
                image: 'wine2',
            },
        ]
    }

slides = [
  {
      img: '1'
  },
  {
      img: '2'
  },
  {
      img: '3'
  },
  {
      img: '4'
  },
  {
      img: '5'
  },
]

}
