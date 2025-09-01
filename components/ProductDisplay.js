app.component('product-display', {
    template: `
        <div class="product-display"><div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img v-bind:src="image" alt="" :class="[!inStock ? 'out-of-stock-img' : '']">
                </div>
                <div class="product-info">
                    <h1 v-if="onSale">{{title}}</h1>
                    <p v-if="inStock">In stock</p>
                    <p v-else>Out of stock</p>
                    <ul>
                        <li v-for="detail in details">{{detail}}</li>
                    </ul>
                    <div class="color-circle" v-bind:style="{backgroundColor: variant.color}" v-for="(variant, index) in variants" :key="variant.id" @mouseOver="updateVariant(index)" >
                        
                    </div>
                    <div v-for="size in sizes">
                        {{size}}
                    </div>
                    <button :class="{disabledButton: !inStock}" class="button" v-on:click="addToCart" v-bind:disabled="!inStock">Add to Cart</button>
                </div>
            </div>
        </div>`,
        data(){
            return{
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