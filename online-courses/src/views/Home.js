import React from 'react';
//import SignUp from '../src/views/SignUp';

function HomePage() {
 return (
    <><>
     <h3>Welcome to The Patriot's Portal!</h3>

     <br></br>

     <p>This website is the Patriot’s Guide to resisting Psychological Warfare. Our goal is not to incite violence, but to equip, encourage, and empower Patriots with information, knowledge, understanding, strategies and counterstrategies to defeat the Enemy in this war against Evil.</p></><p>On this website you’ll find:</p><ul>
       <li>Short Courses to develop your critical thinking skills, counterstrategies for resisting the tactics of the    Enemy, and much more.</li>
       <a href={'../Courses'}>Go to Courses</a>
       <li>An encyclopedia of people, historical events, words and terms related to psychological warfare, mind control, manipulation and tactics of the Enemy.</li>
       <a href={'../Encyclopedia'}>Go to Encyclopedia</a>
       <li>Book Sales</li>
       <a href={'../BookSales'}>Go to Book Sales</a>

       <li>Resources, references and alternative news sources for Patriots.</li>
     </ul></>

        )
    }

    export default function Home() { 
        return (

        <section>

         <HomePage />

       </section>
       );
       }         


   


