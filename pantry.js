let home = {
    kitchen: {
        pantry: [
            {
                label: 'hemp seeds',
                cost: 12
            },
            {
                label: 'flour',
                cost: 4
            },
            {
                label: 'nutella',
                cost: 5
            },
            {
                label: 'honey',
                cost: 8
            },
            {
                label: 'oats',
                cost: 4
            }
        ],

        bench: [
            {
                brand: 'vitamix',
                color: 'red'
            },
            {
                brand: 'kitchenaid',
                color: 'white'
            },
            {
                brand: 'breville',
                color: 'black'
            },
        ],

        fridge: [
            {
                name: 'no frills pudding from wollies',
                comment: 'taste great',
                ingredients: ['sugar', 'preservatives', 'vomit']
            }
        ]
    }
}

let opinion = home.kitchen.fridge[0].comment

opinion = 'taste like vomit'


function calculateCost() {
    let total = 0
    let pan = home.kitchen.pantry
    for (let i = 0; i < pan.length; i++) {
        price = pan[i]
        total += price.cost
    }
    // console.log(total)
    return total

}
console.log(opinion);
console.log(calculateCost())
// calculateCost()