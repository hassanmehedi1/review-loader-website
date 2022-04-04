import React from 'react';

const Blogs = () => {
   return (
     <section class="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
       <div class="">
         <div>
           <p class="mt-10 mb-3 font-semibold text-xl text-gray-900">
             What is Context API?
           </p>
           <p class="text-gray-600">
             Context API is a kind of new feature in React that allows us to
             share state throughout your whole project quickly and easily or
             portion of it. Let's have a look at how we can use it. For React,
             there's a context API. We'll look at what Context API is and how we
             can use it in your React project in this matter. The Context API is
             a React framework that allows us to communicate unique data and
             address prop-drilling difficulties at different stages of your
             project. The React Context API can be used by a React project to
             create global variables that can be passed around. This is an
             alternative to "prop drilling," in which props are passed from
             grandmother to child to parent and so on. React.create Context is
             all that is required. It will serve as both a customer and a
             provider for us. As its name implies, Provider is a component that
             provides the state to its children. It will house the "store" and
             act as the parent for any components that need it. A consumer is a
             component that consumes and utilizes the state.
           </p>
           <p class="mt-10 mb-3 text-xl font-semibold text-gray-900">
             What is Semantic tag?
           </p>
           <p class="text-gray-600">
             In HTML, we frequently come across the jargon word semantic. Here,
             I'll explain what semantic is and how it's utilized in HTML. So,
             first and foremost, let's define what a semantic word is. Semantic
             tags are those elements that convey some specific meanings and
             indicate what type of content they contain and what role that
             content plays in the document, as defined by Wikipedia. Semantic
             tags are those elements that convey some specific meanings and
             indicate what type of content they contain and what role that
             content plays in the document. But why bother with Semantic HTML in
             the first place? You won't notice any difference in the UI of your
             webpage if you create all of the div correctly. However, keep in
             mind that we're dealing with more than just humans; we're also
             dealing with Web Crawlers and search engine spiders, who skim web
             pages automatically. These are based on the semantic clarity of the
             web pages they locate, as they employ various techniques and
             algorithms to read and index millions of web pages every day and
             deliver relevant results to online visitors, which, of course,
             leads to a higher search engine ranking. Semantic components also
             benefit screen readers by increasing the accessibility of online
             pages. It also makes website navigating easier for assistive
             technology.
           </p>
           <p class="mt-10 mb-3 font-semibold text-gray-900">
             Difference between Inline and block elements?
           </p>
           <p class="text-gray-600">
             Block Elements: Block Elements always start on a new line and take
             up the full width available on the web page. It spans out to the
             right and to the left as far as possible and blocks out any other
             element from sitting next to it. Some of the common block elements
             include div, p, h1 to h6, forms etc.
             <p>
               Inline Elements: Inline elements start on the same line and only
               take the amount of width required to display the content of the
               element. It allows other elements to sit next to it. Some of the
               common inline elements include span, img, a, em etc
             </p>
           </p>
         </div>
       </div>
     </section>
   );
};

export default Blogs;