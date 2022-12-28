<template>
  <Header />

  <div class="album py-5 bg-light">
    <div class="container">
      <router-view/>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

