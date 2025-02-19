
# CSC 317 Assignment 2 Submission

**Name:** Rama Harish Varma Vegesna  
**Student ID:** 922975128 
**GitHub Username:** Ace13505
**Assignment Number:** 2  


##  HTML Personal Portfolio Website Assignment

### Description:
This assignment involved creating a personal portfolio website using HTML5. The objective was to structure a well-organized webpage that showcases information about myself, including an introduction, education, projects, and contact details. The site follows proper HTML semantics and includes multimedia elements such as images and an embedded Google Map.


## Approach / What I Did:
Structured the HTML document properly

Used <!DOCTYPE html> to define the document type.
Included necessary meta tags for responsiveness and SEO.
Used appropriate sectioning elements (<header>, <main>, <section>, <footer>) for better readability.

Created a navigation menu

Implemented an unordered list (<ul>) for navigation.
Used internal links (<a href="#section-id">) to enable smooth navigation between sections.
Added content sections

About Me: Brief introduction and a Google Maps location embed.
Education: Listed my university, major, and courses in a table format.
Projects: Showcased a "Hello World" project with an image and embedded GitHub repository.
Experience: Placeholder for future work experience.
Contact Form: A structured form with input fields for user messages.
Multimedia Elements

Used images for school and hometown.
Embedded an interactive Google Map for location reference.
Included an iframe linking to my GitHub repository.
Ensured Code Quality

Followed HTML5 semantic structure.
Used alt attributes for images for accessibility.
Kept code well-formatted with comments explaining key sections.



## Code Explanation:
<nav>
    <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>      
</nav>

 Explanation:

The <nav> tag defines the navigation bar.
The <ul> (unordered list) contains a list of <li> (list items), each with an <a> tag (anchor) that links to different sections of the page using id references.
When a user clicks one of these links, the page scrolls smoothly to that section.
