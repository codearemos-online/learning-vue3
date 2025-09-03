const app = Vue.createApp({
    data(){
        return{
            cart:0,
            brand:'Vue Mastery',
            product:`Socks`,
            selectedVariant:0,
            description:`Implement a new descrription to socks`,
            url:`https://github.com/codearemos-online`,
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
                    quantity:50,
                    onSale:true
                },
                {
                    id:2235,
                    color:`blue`,
                    image:`./assets/images/socks_blue.jpg`,
                    quantity:0,
                    onSale:false
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
        updateVariant(index){
            this.selectedVariant = index;
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product;
        },
        image(){
            return this.variants[this.selectedVariant].image;
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity;
        },
        onSale(){
            return this.variants[this.selectedVariant].onSale;
        }
    }
})