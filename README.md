# pantry

source: https://gist.github.com/epoch/4b4edb46c499af509006adf8fffb3165

 ```javascript
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
```

given the above:

1. write code to change the comment of no frills pudding from wollies from `taste great` to `taste like vomit` 
2. write code to calculate the total cost of all items in the **pantry** using a for loop.
