<template>
  <div class="col-md-12 mb-4 input-group">
    <input class="form-control" placeholder="Search" @keyup="search($event.target.value)"/>
    <div class="input-group-append">
      <select class="form-select" @change="price_range($event.target.value)">
        <option>Range Price</option>
        <option value="0">All Price</option>
        <option value="10">Rp 0 - Rp 10.000</option>
        <option value="20">Rp 10.000 - Rp 30.000</option>
        <option value="30">Rp 30.000 - Rp 50.000</option>
        <option value="50">> Rp 50.000</option>
      </select>
    </div>
    <div class="input-group-append">
      <select class="form-select" @change="sort($event.target.value)">
        <option>Price Order</option>
        <option value="asc">Price Ascending</option>
        <option value="desc">Price Descending</option>
      </select>
    </div>
    <div class="input-group-append">
      <select class="form-select" @change="limit($event.target.value)">
        <option>Limit</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
    </div>
  </div>

  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <div class="col" v-for="product in products" :key="product.id">
      <div class="card shadow-sm">
        <img :src="product.image_url" height="200">

        <div class="card-body">
          <p class="card-text">{{ product.name }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <small class="text-muted">${{ product.price }}</small>
            <router-link v-bind:to="'/business/' + product.id"
                      >+ Quick View</router-link
                    >
            
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center mt-4" v-if="filters.page < lastPage">
    <button class="btn btn-primary" @click="loadMore">Load More</button>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: ['products', 'filters', 'lastPage'],
  emits: ['set-filters'],
  setup(props, context) {
    const search = (s) => {
      context.emit('set-filters', {
        ...props.filters,
        s,
        page: 1
      })
    }

    const sort = (sort) => {
      context.emit('set-filters', {
        ...props.filters,
        sort,
        page: 1
      })
    }
    const limit = (limit) => {
      context.emit('set-filters', {
        ...props.filters,
        limit,
        page: 1
      })
    }

    const price_range = (price_range) => {
      context.emit('set-filters', {
        ...props.filters,
        price_range,
        page: 1
      })
    }

    const loadMore = () => {
      context.emit('set-filters', {
        ...props.filters,
        page: props.filters.page + 1
      })
    }

    return {
      search,
      sort,
      limit,
      price_range,
      loadMore
    }
  }
}
</script>
