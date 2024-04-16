import React from "react"

function CommEdArticle() {
    return (
        <div>
            <h1 id="comm-ed-article" >CommEd</h1>


            <a href='https://github.com/EvanLosh/CommEd'>https://github.com/EvanLosh/CommEd</a>

            <p> CommEd is a dynamic full-stack web application and an interactive forum, designed to enrich education in the realm of mathematics and beyond. With CommEd, users can type up solutions to math problems including textbook-quality mathematical expressions using the TeX standard. Beyond mere typesetting, CommEd fosters a vibrant community where users can publish posts, engage in discussions, browse problem solutions, and save personalized lists of posts. Whether you’re a student navigating college-level coursework or a seasoned teacher, CommEd offers a versatile platform to elevate your learning experience.
            </p>

            <h3>Inspiration</h3>

            <p> My inspiration for CommEd comes from personal experience. As a student grappling with math and physics assignments, I yearned for a way to present my work with the same professionalism found in textbooks and academic papers. Yet, existing tools were inconvenient. Additionally, I envisioned a repository—a treasure trove—where problem solutions could be saved and easily accessed by anyone eager to learn. </p>

            <h3>Technologies: </h3>

            <ul>
                <li>
                    JavaScript and React: The frontend of CommEd comes alive through these powerful technologies, ensuring a seamless user interface.
                </li>
                <li>
                    react-tex: This essential library enables users to submit TeX code and have their code interpereted into beautiful mathimatical expressions.
                </li>
                <li>
                    Python and Flask: The backend, powered by Flask,
                    defines a relational databse, authenticates users with JWTs, and provides a RESTful API for client-server communication.

                </li>
                <li>
                    SQLAlchemy: The Flask database stores users, posts, comments, users' post-lists, and post tags. It defines relationships, validations, and serialization using an ORM.
                </li>
                <li>

                    Formik: For smooth form handling, Formik steps in, allowing users to create, edit, and manage content effortlessly.
                </li>
                <li>
                    CSS: The visual finesse of CommEd owes much to thoughtful styling and layout design.
                </li>
            </ul>

            <h3>One of the development challenges</h3>

            <p>I am particularly proud of how I implemented comments on posts. There are many ways to define comments and how they get rendered on posts. In my ORM, I chose to define comment objects to have either a post ID or a parent comment ID, not both, with reciprocal relationships. Because of this choice, my API's post objects each have an attribute for a list of top-level comments, and comments each have their own attribute for a list of their direct child comments. This means that when the client fetches a post from the server, it comes with all of its comments naturally nested inside.</p>

            <p>

                To render comments on a post, I defined two functions:
            </p>
            <ul>
                <li>

                    f1 takes a list of comment objects as an argument, iterates through the list, and calls f2 for each item
                </li>
                <li> f2 takes a comment object as an argument, renders the comment as a React component, and then calls f1 on its list of children comments.
                </li>
            </ul>
            <p>
                These two functions call each other recursively, descedning through all of the nested comments and inserting them into the DOM one by one.                 All together, I can simply fetch a post object and call <span className="code">
                    f1(post.comments)
                </span>
                to render all of the comments on that post in the client. I found this to be the most elegant solution.
            </p>

            <h3>How to run CommEd on your own PC</h3>

            <p>I welcome you to view my code and run it yourself. The repository is here: <a href='https://github.com/EvanLosh/CommEd'>https://github.com/EvanLosh/CommEd</a>.</p>

            <p> To create the database, seed it, and run the server, enter the following in a terminal in the project directory:</p>

            <div className='code-block'>
                <p className='code'>$ pipenv install</p>
                <p className='code'>$ pipenv shell</p>
                <p className='code'>$ cd server</p>
                <p className='code'>server$ flask db init</p>
                <p className='code'>server$ flask db migrate -m "initial migration"</p>
                <p className='code'>server$ flask db upgrade head</p>
                <p className='code'>server$ python seed.py</p>
                <p className='code'>server$ python app.py</p>
            </div>

            <p>To run the client, enter these commands in a second terminal in the project directory:</p>

            <div className='code-block'>
                <p className='code'>$ cd client</p>
                <p className='code'>client$ npm install</p>
                <p className='code'>client$ npm run start</p>
            </div>

            If you want to reset the databse to the seeded state, open a third terminal and enter these commands in the server directory:

            <div className='code-block'>
                <p className='code'>server$ chmod +x new-db.sh</p>
                <p className='code'>server$ ./new-db.sh</p>
            </div>

        </div >

    )
}

export default CommEdArticle