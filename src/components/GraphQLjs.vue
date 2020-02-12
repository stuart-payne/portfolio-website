<template>
    <div class="projView">
        <h2 class="accent--text">GraphQl with Express</h2>
        <p>
        Full code here: <a href="https://github.com/stuart-payne/simple-graphql-js">github</a>
        </p>
        <!-- intro -->
        <p>
            Objective of this exercise was to introduce myself to GraphQL to be used as an alternative to traditional methods of building a web API. I decided to use Express as the web server for this exercise
            due to the ease of creating something simple as well as the large amount of support from graphql itself.
        </p>
        <p>
            There are three parts that a GraphQL API requires to function. First is the schema that defines the overall structure of the data as well as the fields and what type they are as well as the possible Queries
            that can be make and what arguments can be entered. Below you can see the type Person which is the primary object that is stored in the database fro the server. The Query type then exposes all the possible
            ways that a client can request data, here we have the ability to request data by each field that person holds as an argument. The last part is the resolver which is reponsible for how the server actually
            handles the request and database access.
        </p>
        <div class="imgDisplay">
            <img :src="require('../assets/codeSnippets/GraphQLjs/Schema.png')"/>
            <p class="imgCap">Schema code!</p>
        </div>
        <!-- Query API -->
        <p>
            Below is the resolver functions. These match the Query type which is also shown above. Each function dictates how exactly the server gets the information. Being a simple example, we are only accessing
            an array which holds the Person data. In a proper website, this is where the database access would happen.
        </p>
        <div class="imgDisplay">
            <img :src="require('../assets/codeSnippets/GraphQLjs/Resolver.png')"/>
            <p class="imgCap">Functions used to resolve the queries</p>
        </div>
        <!-- Resolvers -->
        <p>
            Using graphiql, we get an easy GraphQL client which we can use to test our server. Below is a query to see what data is returned.
        </p>
        <div class="imgDisplay">
            <img :src="require('../assets/codeSnippets/GraphQLjs/Query.png')"/>
            <p class="imgCap">Query in Graphiql</p>
        </div>
        <div class="imgDisplay">
            <img :src="require('../assets/codeSnippets/GraphQLjs/Data.png')"/>
            <p class="imgCap">Some of the data returned by our successful query!</p>
        </div>
        <p>
            And there we have a working GraphQL API albeit a very barebones one.
        </p>
        <!-- Example Queries -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>