<template>
    <div class="breacrumb-section text-left">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/" class="text-dark">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Business Detail</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="container-fliud">
            <div class="wrapper row">
                <div class="preview col-md-6">

                    <div class="preview-pic tab-content">
                        <div class="tab-pane active" id="pic-1"><img :src="products.image_url" /></div>
                        <div class="tab-pane" id="pic-2"><img :src="products.image_url" /></div>
                        <div class="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                        <div class="tab-pane" id="pic-4"><img src="https://www.foodiesfeed.com/wp-content/uploads/2020/05/costela-de-porco-assada-1.jpg" /></div>
                        <div class="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
                    </div>
                    <ul class="preview-thumbnail nav nav-tabs">
                        <li class="active"><a data-target="#pic-1" data-toggle="tab"><img
                                    :src="products.image_url" /></a></li>
                        <li><a data-target="#pic-2" data-toggle="tab"><img src="https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking.jpg" /></a>
                        </li>
                        <li><a data-target="#pic-3" data-toggle="tab"><img src="https://www.foodiesfeed.com/wp-content/uploads/2020/05/costela-de-porco-assada-1.jpg" /></a>
                        </li>
                        <li><a data-target="#pic-4" data-toggle="tab"><img src="https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-salmon-with-sweet-soy-sauce-in-a-korean-restaurant.jpg" /></a>
                        </li>
                        <li><a data-target="#pic-5" data-toggle="tab"><img src="https://www.foodiesfeed.com/wp-content/uploads/2022/06/take-away-box-with-variety-of-korean-food.jpg" /></a>
                        </li>
                    </ul>

                </div>
                <div class="details col-md-6">

                    <h3 class="product-title">{{ products.name }}</h3>

                    <div v-if="products.is_closed === 'false'" class="badge bg-success text-wrap" style="width: 5rem;">
                       Open
                    </div>
                    <div v-else class="badge bg-danger text-wrap" style="width: 5rem;">
                        Closed
                    </div>


                    <div class="rating">
                        <div class="stars">
                            <template v-for="index in products.rating">
                                <span class="fa fa-star checked"></span>
                            </template>
                            <template v-for="i in (5 - products.rating)">
                                <span class="fa fa-star"></span>
                            </template>

                        </div>
                        <span class="review-no">{{ products.review_count }} reviews</span>
                    </div>
                    <p class="product-description">Makanan cepat saji dengan penyajian yang istimewa, dengan harga terjangkau. Coba sekarang
                        dan rasakan sensasinya.
                    </p>
                    <h4 class="price">price: <span>Rp {{ formatPrice(products.price) }}</span></h4>
                    <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>


                    <div class="row col-md-12">
                        <div class="col-md-4">
                            <h5 class="colors">PHONE:
                            </h5>
                        </div>
                        <div class="col-md-8">
                            <h5>{{ products.phone }}</h5>
                        </div>
                    </div>
                    <div class="row col-md-12">
                        <div class="col-md-4">
                            <h5 class="colors">CATEGORY:
                            </h5>
                        </div>
                        <div class="col-md-8">
                            <template v-for="product in products.categories">
                                <h5>{{ product.title }}</h5>
                            </template>
                        </div>
                    </div>
                    <div class="row col-md-12">
                        <div class="col-md-4">
                            <h5 class="colors">ADDRESS:
                            </h5>
                        </div>
                        <div class="col-md-8">
                            <p class="vote">{{ products.display_location }}</p>
                        </div>
                    </div>


                    <div class="action">
                        <button class=" btn btn-success" type="button">ADD TO CART</button> &nbsp;
                        <button class=" btn btn-success" type="button"><span class="fa fa-heart"></span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
  
<script>
export default {
    name: "Details",
    props: ['products'],
    emits: ['set-filters'],
    methods: {
        counterStar() {

        },
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },
    setup(props, context) {
        const search = (s) => {
            context.emit('set-filters', {
                ...props.filters,

            })
        }

        return {
            search
        }
    }
}
</script>
<style scoped>
img {
    max-width: 100%;
}

.preview {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

@media screen and (max-width: 996px) {
    .preview {
        margin-bottom: 20px;
    }
}

.preview-pic {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.preview-thumbnail.nav-tabs {
    border: none;
    margin-top: 15px;
}

.preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%;
}

.preview-thumbnail.nav-tabs li img {
    max-width: 100%;
    display: block;
}

.preview-thumbnail.nav-tabs li a {
    padding: 0;
    margin: 0;
}

.preview-thumbnail.nav-tabs li:last-of-type {
    margin-right: 0;
}

.tab-content {
    overflow: hidden;
}

.tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
    animation-name: opacity;
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
}

.card {
    margin-top: 50px;
    background: #eee;
    padding: 3em;
    line-height: 1.5em;
}

@media screen and (min-width: 997px) {
    .wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
}

.details {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.colors {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.product-title,
.price,
.sizes,
.colors {
    text-transform: UPPERCASE;
    font-weight: bold;
}

.price span {
    color: #198754;
}

.checked {
    color: #ff9f1a;
}

.product-title,
.rating,
.product-description,
.price,
.vote,
.sizes {
    margin-bottom: 15px;
}

.product-title {
    margin-top: 0;
}

.size {
    margin-right: 10px;
}

.size:first-of-type {
    margin-left: 40px;
}

.color {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    height: 2em;
    width: 2em;
    border-radius: 2px;
}

.color:first-of-type {
    margin-left: 20px;
}



.not-available {
    text-align: center;
    line-height: 2em;
}

.not-available:before {
    font-family: fontawesome;
    content: "\f00d";
    color: #fff;
}

.orange {
    background: #ff9f1a;
}

.green {
    background: #85ad00;
}

.blue {
    background: #0076ad;
}

.tooltip-inner {
    padding: 1.3em;
}

@-webkit-keyframes opacity {
    0% {
        opacity: 0;
        -webkit-transform: scale(3);
        transform: scale(3);
    }

    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes opacity {
    0% {
        opacity: 0;
        -webkit-transform: scale(3);
        transform: scale(3);
    }

    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
</style>

