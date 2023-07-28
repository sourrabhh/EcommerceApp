
export const color = [
    "White",
    "Black",
    "Red",
    "Beige",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Navy Blue",
    "Maroon",
    "Peach"
];

export const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White' },
        { value: 'beige', label: 'Beige' },
        { value: 'blue', label: 'Blue'},
        { value: 'brown', label: 'Brown'},
        { value: 'green', label: 'Green' },
        { value: 'purple', label: 'Purple' },
      ],
    },
    
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'S', label: 'S' },
        { value: 'M', label: 'M' },
        { value: 'L', label: 'L' },
        { value: 'XL', label: 'XL' },
        { value: 'XXL', label: 'XXL' },
      ],
    },
  ];

  export const singleFilter = [
    {
        id: 'price',
        name: 'Price',
        options:[
            {value: '100-499', label: '₹100 To ₹499'},
            {value: '400-999', label: '₹400 To ₹999'},
            {value: '1000-1999', label: '₹1000 To ₹1999'},
            {value: '2000-3999', label: '₹2000 To ₹3999'},
            {value: '4000-100000', label: '₹4000 To Above'},
        ],
    },

    {
        id: "discount",
        name: "Discount Range",
        options: [
            {value: "10", label: "10% And Above"},
            {value: "20", label: "20% And Above"},
            {value: "30", label: "30% And Above"},
            {value: "40", label: "40% And Above"},
            {value: "50", label: "50% And Above"},
            {value: "60", label: "60% And Above"},
            {value: "70", label: "70% And Above"},
            {value: "80", label: "80% And Above"},
        ],
    },

    {
        id: "stock",
        name: "Availibility",
        options: [
            {value: "in_stock", label: "In Stock"},
            {value: "out_of_stock", label: "Out Of Stock"},
        ],
    },
  ];

  
