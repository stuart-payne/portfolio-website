<template>
      <div class="projView">
        <h2 class="accent--text">Blog Site made with Laravel</h2>
        <p>
        Full code here: <a href="https://github.com/stuart-payne/laravelblog">github</a>
        </p>
        <p>
            The goal for this project was to create a blog website similar to what I did originally in a previous post. This means having features such as user authentication, the ability to write articles 
            and and be able to leave comments on each article. The problem I ran into with my previous blog website was that I was doing the majority of things from scratch without the use of frameworks. 
            Now with Laravel and my increased knowledge of general back-end principles, I was able to create a fully functioning website in a fraction of the time.
        </p>
        <p>
            The project is structured using REST principles. We have three resources: users, articles and comments. Each of these have their own database with the neccessary relationships between them. I used 
            MySQL as the database system and Eloquent as the ORM for easily assessing the data. The resources then have unique controllers and the necessary routes to allow CRUD operations to occur through the
            website.
        </p>
        <p>
            To keep this post brief, I will focus on the articles in this website on go through steps neccessary to get the website functioning through laravel.
        </p>
        <p>
            First step was creating the migration for Articles. A migration in Laravel sets up the table that the article data will be stored in including the fields and their data types. This allows you 
            to set up a database without writing any raw SQL. In the picture below, you can see the code used for the article table in this website.
        </p>
        <div class="imgDisplay">
            <img :src="require('../assets/codeSnippets/laravelBlog/Migration.png')"/>
            <p class="imgCap">Migration code used to build the database</p>
        </div>
        <!-- Migration code -->
        <p>
            Next, we need to Eloquent model that will be a primary tool for accessing the table. Here the code is very simple but the important part is the empty guarded property which allows us to use 
            mass assignment. This will allow us easier database operations in our controller. We also define the relationships to the other models we have, these being Users, which an article can only belong to v-once
            and Comments which an article owns and can have many. Eloquent provides nice methods to describe these.
        </p>
        <div class="imgDisplay">
            <img :src="require('../assets/codeSnippets/laravelBlog/Model.png')"/>
            <p class="imgCap">Eloquent model for easy data access</p>
        </div>
        <!-- Eloquent model -->
        <!-- Controller -->
        <p>
            The controller is the brains of the operation. Here, we are using a Restful structure so we have the seven functions: show, index, edit, update, create, store and delete. These will either return
            an appropriate view or do work on the database. When one of the operations are done on the database, we have some validation to ensure the data received from the request has the neccessary 
            data as well as nothing malicious.
        </p>
        <div class="imgDisplay">
            <img :src="require('../assets/codeSnippets/laravelBlog/Controller.png')"/>
            <p class="imgCap">Example function from Articles Controller</p>
        </div>
        <p>
            One fo the big advantages of using Laravel is that we get User authentication out of the box. It acts as a middleware, a layer that all requests must pass through before reaching our controllers. 
            Therefore there is a little need for us to handle the authentication ourselves and we can also access the information gathered by this layer using the Auth facade.
        </p>
        <!-- Routes -->
        <p>
            For our routes, we need to map the requests to our controller functions. The HTTP methods we used are GET, POST, PUT and DELETE. GET requests return a view with POST, PUT and DELETE acting on the database.
            Only POST is supported in html forms but this is another place where Laravel makes it easy for us, we can use @method directive which Laravel supplies and tells the server what actual method we are using.
            Neat. The code below shows the mapping used for the routes to controller.
        </p>
        <div class="imgDisplay">
            <img :src="require('../assets/codeSnippets/laravelBlog/Routes.png')"/>
            <p class="imgCap">Routes defined in the web.php file</p>
        </div>
        <!-- Views -->
        <p>
            For the views, we have a layout file which is used in every view to maintain a consistent site structure. All views extend this layout file and use the @section directives to define the content they display.
            The code below shows out edit view for articles. This is a good example of the method directive which here we use PUT as we are looking to edit an existing record. We also require the @csrf directive which
            laravel replaces with a hidden input that holds a token which then is used to verify that the form was sent by the web server and stop an cross site attack.
        </p>
        <div class="imgDisplay">
            <img :src="require('../assets/codeSnippets/laravelBlog/View.png')"/>
            <p class="imgCap">Edit article form view</p>
        </div>
        <p>
            That concludes this post, there was a fair amount more work and code that went into the making of this website but for breivty sake I;ve just stuck to the implementation fo the articles. The full code can be inspected
            in the github repo if you are interested in seeing more.
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>