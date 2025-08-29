const app = Vue.createApp({
    data(){
        return{
            product:`Socks`,
            image:`./assets/images/socks_green.jpg`,
            description:`Implement a new descrription to socks`,
            url:`https://github.com/codearemos-online`,
            inStock:false,
            details:[
                "50% cotton",
                "30% wool",
                "20% polyester"
            ]
        }
    }
})