<template>
  <div class="projView">
    <h2 class="accent--text">Weather Finder</h2>
    <p>
      Full code here: <a href="https://github.com/stuart-payne/weather-app">weather-app</a> & <a href="https://github.com/stuart-payne/weather-app-site">server</a>
    </p>
    <p>
      The goal of this mini project was to create a simple website that requests data from an external API based on user input.
      In this example, we want to find out the weather either from the user's geolocation or a city which tte user requests. The API 
      we will be using is openweathermap.org. Reason being, it has a free tier for the API usage and gives us the information we need.
    </p>
    <p>
      The app is made with Vue. This is probably unneccessary for a simple project like this and the same can be done without the use of a 
      framework but at the time of making this project, I was used to using Vue and chose that because of familiarity.
    </p>
    <p>
      The first feature is getting the geolocation from the browser and using that in a fetch request ot the Open Weather Map api.
    </p>
    <div class="imgDisplay">
      <img :src="require('../assets/codeSnippets/weather/location.png')"/>
      <p class="imgCap">Html for the button used by the user</p>
    </div>
    <div class="imgDisplay">
      <img width="700" :src="require('../assets/codeSnippets/weather/locationMethods.png')"/>
      <p class="imgCap">Methods used for processing the geolocation</p>
    </div>
    <p>
      The geolocation is gotten thriough the navigator object, the method geolocation then takes a callback which will be passed the location.
      We pass the geoCallback method and use the bind method on the function to bind the current lexical scope to the callback so that the 
      data properties and methods can still be used by the callback when the it is called by the navigator object. The url for the fetch request
      is contructed using a string template literal and then passed to the weatherFetch method with handles the fetch request itself.
    </p>
    <div class="imgDisplay">
      <img :src="require('../assets/codeSnippets/weather/weatherFetch.png')"/>
      <p class="imgCap">Fetch request</p>
    </div>
    <p>
      The request is in the form of JSON and is parsed and assigned to the data property weatherResponse. This has a watch property which then updates
      the UI properties which are viewable to the user.
    </p>
    <div class="imgDisplay">
      <img width="700" :src="require('../assets/codeSnippets/weather/watch.png')"/>
      <p class="imgCap">Watcher property</p>
    </div>
    <p>
      With that done, we can show the results!
    </p>
    <div class="imgDisplay">
      <img :src="require('../assets/codeSnippets/weather/finished.png')"/>
      <p class="imgCap">Finished</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>