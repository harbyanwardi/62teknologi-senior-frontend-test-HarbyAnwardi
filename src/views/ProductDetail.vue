<template>
    <Details :products="products" @set-filters="load"/>
  </template>
  
  <script>
  import Details from "../components/Detail";
  import {onMounted, reactive, ref} from "vue";
  import {useRoute} from "vue-router";
  
  export default {
    name: "ProductDetail",
    components: {Details},
    setup() {
      const products = ref([]);
      const filters = reactive({
        s: '',
        sort: '',
        page: 1
      });
      const lastPage = ref(0);
      const route = useRoute();
        const slug = route.params.slug;
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
        
        
        const response = await fetch(`http://localhost:8000/api/business/${slug}`);
  
        const content = await response.json();
  
        products.value =content.data;
      };
  
      onMounted(() => load(filters));
  
      return {
        products,
        load,
      }
    }
  }
  </script>
  