import React from "react";

function Article() {
  return (
    <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
  );
}

function Comment() {
  return <div>Naturally, I agree with this article.</div>;
  
}

// eslint-disable-next-line no-unused-vars
function App() {
  return(
    <div>
      <Article/>
      <Comment/>
    </div>
  );
  
}
export default Article;
