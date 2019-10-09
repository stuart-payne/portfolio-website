<template>
  <div class="projView">
    <h2 class="mb-4 accent--text">Portfolio Website</h2>
    <p><b>Github here: </b><a>link will be here</a></p>
    <p>
      I needed a website to serve as a quick and concise access point for the projects which I have undertaken; 
      allowing for people interested in my work to find it easily. The requirements for it were for it to be simple,
      for the projects to be easily found and to serve as an advertisement for my own skills.
    </p>
    <p>
      I chose to use <b>Vue</b> as the framework, mainly due to familiarity with it. Having done several other projects wuth Vue
      already, there would be little for me to learn when unergoing the construction of this website. Why use a framework at all?
      Because I want to make it as easy as possible to add further projects that I do in the future. With the templating that 
      comes with Vue as well as the routing, the ability to add to the website is simlpe and will allow for minimal maintenance after 
      it is deployed.
    </p>
    <p>
      For the styling, <b>Vuetify</b> was chosen. The reasoning was to limit the amount of time styling so out-of-the-box functionality 
      that Vuetify offers was a good fit. Even when not using the Vuetify components, the helper classes that are provided are 
      useful, an example as the margin and padding classes, giving a helpful shorthand for common uses.
    </p>
    <p>
      Design-wise, with the requirement of quick access to my portfolio, I wanted all my information to be displayed on a single screen.
      Scrolling for information is to be avoided. I chose the idea of displaying the information in the form of an elaborate business
      card. 
    </p>
    <p>
      The site is an SPA. The main page is simply the card and the router view. Each page, including the home page is a component that is 
      accessed through vue-router. 
    </p>
    <div class="imgDisplay">
      <img :src="require('../assets/codeSnippets/routing.png')"/>
      <p class="imgCap">The code used for the configuration of the Vue router</p>
    </div>
    <p>
      The components used in the routing are all vue files which are lazily loaded into the the main.js file.
      Using lazy loading we can ensure that the file size stays low and that these components are only loaded if actually selected for viewing.
    </p>
    <div class="imgDisplay">
      <img :src="require('../assets/codeSnippets/components.png')"/>
      <p class="imgCap">Lazy loading of components</p>
    </div>
    <p> 
      The project list on the home page is list rendered using a js file containing an array of project objects.
      These objects contain the information needed for the project card components on allow me to easily add to the array if I'm adding a new project without having to touch any Vue or html code. 
    </p>
    <div class="imgDisplay">
      <img :src="require('../assets/codeSnippets/projects.png')"/>
      <p class="imgCap">Project array used for list rendering</p>
    </div>
    <div class="imgDisplay">
      <img :src="require('../assets/codeSnippets/projectCard.png')"/>
      <p class="imgCap">List rendering for project cards</p>
    </div>
    <p>
      The list rendering only will show four cards at a time so the array in renders from is a comnputed property which returns an array which returns 4 project
      objects depending on the starting index and end index. These indices are changed by the up and down button by the project list, allowing the user to navigate through the projects.
    </p>
    <p>
      With this setup, it is trivial for my to add nerw projects, just add the component and routing to main.js, create a vue file with the content and connect it with an object in the projects files.
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>