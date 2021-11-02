import React, { Component } from "react";

class Body extends Component {
  render() {
    return (
      <p className="body-paragraph">
        Hello everyone! The best way to learn something is by doing. So, let’s
        build a simple Blog app using React to understand how things work. We
        won’t be making a very feature-rich blogging website with cool designs
        and all. Instead, it would be simple — to serve the purpose of learning.
        It would be a simple blog website with very few functionalities,
        enabling you to learn better. The features we are going to build into
        this blog are:- Fetching blogs from a local JSON server and displaying
        the blogs in list form. Fetching details about individual blogs and
        displaying them. Adding new blogs. Deleting blogs. It would be pure
        React, and we will not be using any backend server for this blogging
        website. So, the changes we make, i.e. the blogs we delete or add, will
        reset once the page is refreshed. So, it won’t be saving any data on any
        server. This article series is aimed at beginners currently, so we would
        go into all the things In detail so that you can understand how things
        work and will be able to implement more features into it. In the initial
        phase of this tutorial series, we will only use React with no backend or
        cloud to store any data. It all gets reset once we refresh the page.
        But, later on, I plan to add a backend to this React project to make it
        full-stack. We will use Express, Node.js, and MongoDB to build the
        backend for this application and then connect the front-end and
        back-end. Furthermore, if the article series gets a good response, I
        would add some more features into the series with more parts, including
        authentication and some other features to make it more practical. But we
        keep these things for a later date and may or may not be added. So,
        let’s focus on the initial phase for now, which is primarily aimed at
        beginners.
      </p>
    );
  }
}

export default Body;
