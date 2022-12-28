<template>
    <div class="map-canvas">
        
        <GMapMap
        :center="{lat: coordinates.latitude, lng: coordinates.longitude}"
        :zoom="17"
        map-type-id="terrain"
        style="width: 800px; height: 340px"
    >
      <GMapMarker
          :key="marker.id"
          v-for="marker in markers"
          :position="{lat: coordinates.latitude, lng: coordinates.longitude}"
      />
    </GMapMap>
    </div>
    
  </template>
  <script>
  export default {
    name: 'Gmap',
    props: ['products','coordinates'],
    data() {
      return {
        center: {lat: this.coordinates.latitude, lng: this.coordinates.longitude},
        markers: [
          {
            id: 'dfsldjl3r',
            position: {
                lat: this.coordinates.latitude, lng: this.coordinates.longitude
            },
          }
        ]
      }
    },
    
  }
  </script>
  <style scoped>
    .map-canvas {
        padding-left: 10px;
    }
</style>
  