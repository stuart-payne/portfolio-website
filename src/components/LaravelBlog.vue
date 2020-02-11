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
        <!-- Migration code -->
        <p>
            Next, we need to Eloquent model that will be a primary tool for accessing the table. Here the code is very simple but the important part is the HHHHHHHHHHHHHHHHHHHHHHHHHH which allows us to use 
            mass assignment. This will allow us easier database operations in our controller.
        </p>
        <!-- Eloquent model -->
        <!-- Contoller -->
        <!-- Routes -->
        <!-- Views -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>