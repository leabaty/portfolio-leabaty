This is my personal portfolio, allowing me to share easily all the projects I've done so far !

## Languages used

JS, React, Node.js for Nodemailer (the contact form).

### Use of external librairies

#### Client side :
- Fullpage.js for the fullpage effect/navigation dots
- React Icons for the small icons across the webpage
- React Slick/Slick Carousel for the "Work" carousel
- React Spring for the mouse parallax effect on the forms

More generally, Axios is used for the link with the API and SASS for better CSS structuring.

#### Server side : 
- Nodemailer for the handling of emails linked with the contact form 
- Handlebars for the templating of emails

## Specifics to the project

### SCSS Naming
95% of the naming is based on the BEM approach. 

### Background forms 
On the components that display forms, there is an additional component/page dedicated to the background styling that is bearing the forms. 
Form classes are named after their : "Location on page - Component - Position order from left to right".
For example : bh1 = bottom home 1, tn2 top navbar 2... etc. 

### Navbar management
Due to the specificity of fullpage.js, I have two different navbars (with exact same design) depending on the location on the website. 
There is a "fullpage.js navbar" with anchors, and a normal navbar working with links on normal pages (Legal Notice, Privacy Policy).

### Font Use 
There is a custom font for the titles in this project : Friendly Schoolmates. All rights to Situjuh (7NTypes). 
The secondary font is Jost (Google fonts). 

### Images' rights 
The image in "About" is based on the work of pch.vector, found on the website freepik.com (https://fr.freepik.com/vecteurs-libre/site-web-programmation-petits-developpeurs-pour-illustration-vectorielle-plane-plate-forme-internet-programmeurs-dessins-animes-pres-ecran-code-ouvert-script-developpement-logiciels-concept-technologie-numerique_10613714.htm#query=developer&position=2&from_view=author) and readapted with AI for the use of this portfolio.
