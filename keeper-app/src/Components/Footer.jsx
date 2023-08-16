import React from 'react';


function Footer() {
    const year = new Date().getFullYear();

    return  (<footer><p>Copyright ⓒ {year} </p></footer>);
}
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
export default Footer;