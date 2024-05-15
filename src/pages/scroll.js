import React from "react";

class Scroll extends React.Component{
    render() {
        return(
<>
  <section />
  <div className="marquee">
    <div className="marquee__content">
      <div
        className="marquee__item"
        style={{ backgroundImage: "url(https://picsum.photos/300/400)" }}
      />
      <div
        className="marquee__item"
        style={{ backgroundImage: "url(https://picsum.photos/300/300)" }}
      />
      <div
        className="marquee__item"
        style={{ backgroundImage: "url(https://picsum.photos/400/300)" }}
      />
    </div>
    <div className="marquee__content">
      <div
        className="marquee__item"
        style={{ backgroundImage: "url(https://picsum.photos/300/400)" }}
      />
      <div
        className="marquee__item"
        style={{ backgroundImage: "url(https://picsum.photos/300/300)" }}
      />
      <div
        className="marquee__item"
        style={{ backgroundImage: "url(https://picsum.photos/400/300)" }}
      />
    </div>
  </div>
  <section />
</>

        )
    }
}

export default Scroll;