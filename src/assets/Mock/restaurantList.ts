export let restaurantList: 
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

