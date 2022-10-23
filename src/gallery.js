import React from "react";
const craigPost = require('./postings')
       
function Posting(props){
let postList = craigPost.postings.map((data, i) => {
  return <p><Posting data={data} key='' /></p>
})
  return postList
}

function Gallery(){
    return (
      <div>
        <h2>Gallery</h2>
        <div>
          <Posting/>
        </div>
      </div>
      
    )
  }

  export default Gallery