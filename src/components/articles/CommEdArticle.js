import React from "react"

function CommEdArticle() {
    return (
        <div>
            <h1 id="comm-ed-article" >CommEd</h1>


            <a href='https://github.com/EvanLosh/CommEd'>https://github.com/EvanLosh/CommEd</a>

            <p>CommEd is a full-stack web app and a forum where users can easily typeset textbook-quality mathematical expressions using the <a href='https://en.wikipedia.org/wiki/TeX' >TeX</a> system. Users can publish posts, comment on posts, reply to comments, browse other users' posts, and save lists of posts. CommEd is useful to students and teachers of Math, Engineering, Physics, Chemistry, and other subjects from the college level to graduate and professional levels.</p>

            <h3>Why did I make CommEd?</h3>

            <p>This was my capstone project for FlatIron School's bootcamp for software engineering. I was inspired to make CommEd by my own experience doing math and physics homework in college and grad school. I wanted my work to look as professional as textbooks and academic papers, but the means to do so were quite inconvenient. I was also inspired to create a conveniently searchable collection of problem solutions from which everyone is free to learn.</p>

            <h3>How did I make CommEd?</h3>

            <p>CommEd is a full-stack project that I created by myself using Javascript, React, react-tex, Python, Flask, SQLalchemy, Formik, and CSS. I began working on this project on January 29th and presented a minimum viable product to my cohort on February 15th. Even though my bootcamp course is completed, I will enthusiastically continue development.</p>

            <p>For this project, I created Object Relationship Models and a corresponding relational database. Then I created a development server and defined a RESTful API for client-server communication. Next I created React components, added API fetches and rendered response data, and added Formik forms to perform CRUD actions on the database.</p>

            <p>I am particularly proud of how I implemented comments on posts. In my ORM, I defined comment objects to have either a post ID or a parent comment ID, not both. Then I gave comments a relationship to either a post or a parent comment, accordingly, with reciprocal relationships to "comments". Because of this ORM, my API's post objects have their comments as an attribute, and the comments are naturally nested—I never fetch a comment directly from my API. In the client, every post and every comment object has a property which is an array called comments. I defined two functions: f1(comments) calls f2(comment) for each item in comments, while f2(comment) renders a React component for the comment and then calls f1(comment.comments). These two functions call each other cyclically, descedning through all of the nested comments and inserting them into the DOM as nested HTML as they go.</p>

            <h3>How to run CommEd on your own PC</h3>

            <p>I welcome you to try my code for yourself. You can obtain the code from github here <a href='https://github.com/EvanLosh/CommEd'>https://github.com/EvanLosh/CommEd</a>.</p>

            <p> To run the server, enter the following in a terminal in the prject directory:</p>

            <div className='code-block'>
                <p className='code'># pipenv install</p>
                <p className='code'># pipenv shell</p>
                <p className='code'># cd server</p>
                <p className='code'>server# flask db init</p>
                <p className='code'>server# flask db migrate -m "initial migration"</p>
                <p className='code'>server# flask db upgrade head</p>
                <p className='code'>server# python seed.py</p>
                <p className='code'>server# python app.py</p>
            </div>


            <p>Then in a second terminal in the prject directory:</p>

            <div className='code-block'>
                <p className='code'># cd client</p>
                <p className='code'>client# npm install</p>
                <p className='code'>client# npm run start</p>
            </div>





        </div>

    )
}

export default CommEdArticle