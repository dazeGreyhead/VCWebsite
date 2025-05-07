import Image from "next/image";
import React from "react";

export default function ContentAndTextSBS() {
  return (
    <section className="catsbs-container">
      <div className="catsbs-content-container">
        <Image
          src="/Jajarkot-Response.jpg"
          alt="current issue image"
          width={1600}
          height={1200}
          className="catsbs-content"
        />
      </div>
      <div className="catsbs-text-container">
        <h2 className="h2">Jajarkot Is Rebuilding</h2>
        <div className="catsbs-paragraph-button-container">
          <div className="catsbs-paragraph-container">
            <p className="paragraph1 black-text-100">
              We can all agree that time has flown and a lot has been
              accomplished and now is the time for action. VCN has done so much
              and our work continues in so many sections and sectors and we have
              been vigilant in rebuilding Jajarkot to the best it can be.
            </p>
            <p className="paragraph1 black-text-100">
              Here are some glimpses of our work for you to enjoy.
            </p>
          </div>
          <button className="arrow-out-button">LEARN MORE</button>
        </div>
      </div>
    </section>
  );
}
