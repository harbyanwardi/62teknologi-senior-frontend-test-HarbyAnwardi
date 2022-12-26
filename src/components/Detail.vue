<template>
    <div class="breacrumb-section text-left">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more">
              <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
              <span>Detail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-2 mb-3">
        <div class="row no-gutters">
            <div class="col-md-6 pr-2">
                <div class="card">
                    <div class="demo">
                        <ul id="lightSlider">
                            <li data-thumb={{products.image_url}}> <img
                                :src="products.image_url" /> </li>
                            
                        </ul>
                    </div>
                </div>
                <div class="card mt-2">
                <h6>Reviews</h6>
                <div class="d-flex flex-row">
                    <div class="stars"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div> <span class="ml-1 font-weight-bold">4.6</span>
                </div>
                <hr>
                <div class="badges"> <span class="badge bg-dark ">All ({{products.review_count}})</span>
                    
                </div>
                <hr>
                <div class="comment-section">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center">
                            <img src="https://i.imgur.com/o5uMfKo.jpg" class="rounded-circle profile-image">
                            <div class="d-flex flex-column ml-1 comment-profile">
                                <div class="comment-ratings"> <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                </div>
                                <span class="username">Lori Benneth</span>
                            </div>
                        </div>
                        <div class="date">
                            <span class="text-muted">2 May</span>
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/tmdHXOY.jpg"
                                class="rounded-circle profile-image">
                            <div class="d-flex flex-column ml-1 comment-profile">
                                <div class="comment-ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i
                                        class="fa fa-star"></i> <i class="fa fa-star"></i> </div> <span
                                    class="username">Timona Simaung</span>
                            </div>
                        </div>
                        <div class="date"> <span class="text-muted">12 May</span> </div>
                    </div>
                </div>
            </div>
                
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="d-flex flex-row align-items-center">
                        <div class="p-ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i
                                class="fa fa-star"></i> <i class="fa fa-star"></i> </div> <span class="ml-1">{{ products.rating }}.0</span>
                    </div>
                    <div class="about"> <span class="font-weight-bold">{{ products.name }}</span>
                        <h4 class="font-weight-bold">Rp {{ products.price }}</h4>
                    </div>
                    
                  
                    <hr>
                    <div class="product-description">
                        <div class="d-flex flex-row align-items-center">
                            <span class="font-weight-bold">Category : </span> &nbsp;
                            <div v-for="product in products.categories">
                                <span>{{ product.title }} </span> &nbsp;
                            </div>
                        </div>
                        <div><span class="font-weight-bold">Phone <i class="fa fa-phone"></i>: </span><span> {{products.phone}}</span></div>
                       
                       <div>
                        <span class="font-weight-bold">Address <i class="fa fa-home"></i></span><p>{{ products.display_location }}</p>
                       </div>
                       
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
    
</template>
  
<script>
export default {
  name: "Details",
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

    
   

    return {
      search
    }
  }
}
</script>

