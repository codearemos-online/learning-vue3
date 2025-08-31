const app = Vue.createApp({
    data(){
        return{
            cart:0,
            product:`Socks`,
            image:`./assets/images/socks_green.jpg`,
            description:`Implement a new descrription to socks`,
            url:`https://github.com/codearemos-online`,
            inStock:true,
            details:[
                "50% cotton",
                "30% wool",
                "20% polyester"
            ],
            variants:[
                {
                    id:2234,
                    color:`green`,
                    image:`./assets/images/socks_green.jpg`,
                },
                {
                    id:2235,
                    color:`blue`,
                    image:`./assets/images/socks_blue.jpg`,
                },
            ],
            sizes:[
                "S",
                "M",
                "L",
                "XL",
                "XXL"
            ]
        }
    },
    methods:{
        addToCart(){
            this.cart += 1; 
        },
        updateVariant(image){
            this.image = image;
        }
    }
})