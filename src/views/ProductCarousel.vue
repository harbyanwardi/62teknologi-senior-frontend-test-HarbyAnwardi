<template>
    <Carousel :products="products" :filters="filters" @set-filters="load" :lastPage="lastPage"/>
  </template>
  
  <script>
  import Carousel from "../components/Carousel";
  import {onMounted, reactive, ref} from "vue";
  import {useRoute} from "vue-router";
  
  export default {
    name: "Backend",
    components: {Carousel},
    setup() {
      const products = ref([]);
      const filters = reactive({
        s: '',
        sort: '',
        page: 1
      });
      const lastPage = ref(0);
      const route = useRoute();
        const id = route.params.id;
      const load = async (f) => {
        filters.s = f.s;
        filters.page = f.page;
  
        const arr = [];
  
        if (filters.s) {
          arr.push(`name=${filters.s}`);
        }
  
        if (filters.page) {
          arr.push(`page=${filters.page}`);
        }
        
        
        const response = await fetch(`http://localhost:8000/api/business/${id}`);
  
        const content = await response.json();
  
        products.value = filters.page === 1 ? content.data : [...products.value, ...content.data];
        lastPage.value = content.last_page;
      };
  
      onMounted(() => load(filters));
  
      return {
        products,
        filters,
        lastPage,
        load
      }
    }
  }
  </script>
  