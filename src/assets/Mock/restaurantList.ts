export let restaurantList: 
{primi: {name: string, description: string, price: number, image: string} [],
secondi: {name: string, description: string, price: number, image: string} [],
desserts: {name: string, description: string, price: number, image: string} [],
vini: {name: string, description: '', price: number, image: string} []} = 
    { 
        primi: [

            {
                name: 'risotto con vellutata di zucca e speck',
                description: 'riso carnaroli, zucca delica, speck del Trentino',
                price: 12.00,
                image: 'primo1',
            },
            {
                name: 'spaghetti alle vongole con bottarga',
                description: 'spaghetti, vongole veraci, bottarga',
                price: 15.00,
                image: 'primo2',
            },
        ],
        secondi: [
            {
                name: 'orata alla griglia con contorno di insalata mista e patate',
                description: 'orata, lattuga verde, ciliegino, carote, finocchi e patate novelle',
                price: 20.00,
                image: 'secondo1',
            },
            {
                name: 'fuso di pollo al forno con patate e broccoli',
                description: 'fuso di pollo ruspante, broccoli e patate',
                price: 12.00,
                image: 'secondo2',
            },
        ],
        desserts: [
            {
                name: 'tiramisu',
                description: 'mascarpone, savoiardi, uova, caffè, cacao, zucchero',
                price: 7.00,
                image: 'dessert1',
            },
            {
                name: 'parfait alle mandorle',
                description: 'mandorle, panna, burro, tuorli, zucchero, cioccolato',
                price: 10.00,
                image: 'dessert2',
            },
        ],
          vini: [
            {
                name: `Nero d'Avola`,
                description: '',
                price: 15.00,
                image: 'wine1',
            },
            {
                name: 'Bianco Grillo',
                description: '',
                price: 15.00,
                image: 'wine2',
            },
        ]
    }

