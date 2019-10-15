<template>
  <div class="projView">
    <h2 class="accent--text mb-2">Authentication with JWT</h2>
    <p>
      The goal of this project is to maintain a login session with a mock blog website where the authentication uses a JSON web token.
      We will be using mongoDB to store user login information, Vue for the website, hapi.js for the server and crypto.js for the 
      cryptography.
    </p> 
    <p>
      We need two parts for this on the server. We need to be able to log a user in, checking his login credentials against our database,
      returning a JWT if they pass the check. The second part is the authentication middleware that will be used for when any
      part of the server api is used which we want there to be a user check for.
    </p>
    <p>
      We will tackle the login first. The login consists of a route on the web server, a handler function and a function for generating JWTs.
    </p>
    <div class="imgDisplay">
      <img :src="require('../assets/codeSnippets/jwt/route.png')"/>
      <p class="imgCap">Route used in the Hapi.js configuration</p>
    </div>
    <p>
      In the above code snippet, the path of "/auth" is made for POST requests. The handler is then set to the function authHandler
      which hapi will then pass the request to. The handler is shown in the snippet below.
    </p>
    <div class="imgDisplay">
      <img :src="require('../assets/codeSnippets/jwt/handler.png')"/>
      <p class="imgCap">Handler used for auth route</p>
    </div>
    <p>
      Here we take the payload of the request which will hold the username and password of the user trying to authenticate. We then take the 
      username and check if it exists in the database, if it does, the query will return the hash of the password which is stored as well as the salt
      that was used to hash it. The db.verifyPassord method takes the password from the payload and will hash it with the salt to check if it matches to
      the hash stored in the database. If this check succeeds, we can know generate a JSON Web Token for the user. If the check doesn't succeed, a 401 
      access denied code is returned in the response.
    </p>
    <div class="imgDisplay">
      <img :src="require('../assets/codeSnippets/jwt/jwt.png')"/>
      <p class="imgCap">JWT generator</p>
    </div>
    <p>
      Generating the JSON web token is simple. Using the jsonwebtoken npm package, we are provided with the sign method whic takes an 
      config object and returns a JWT. In the config, we set out what information we want stored in the JWT, we will choose the username,
      the secretkey that is used in the encryption and which algorithm to use.
    </p>
    <p>
      With the login and generation in place, we now need to implement the middleware that validates routes which we only want authenticated
      users to have have access to. 
    </p>
    <div class="imgDisplay">
      <img :src="require('../assets/codeSnippets/jwt/strategy.png')"/>
      <p class="imgCap">Hapi strategy config</p>
    </div>
    <p>
      Hapi allows us to add a "strategy" to the server config. This strategy works as the middleware we described earlier. With the code above, 
      we can provide a property to a routes options object that specifies that we want a certain strategy for that route. The route will then pass
      the request through the validate function and only if the validate function allows it, does the reuqest go to the route handler.
    </p>
    <div class="imgDisplay">
      <img :src="require('../assets/codeSnippets/jwt/validate.png')"/>
      <p class="imgCap">Validate function</p>
    </div>
    <p>
      With this setup, we have our goal of easy authentication using JWT!
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>