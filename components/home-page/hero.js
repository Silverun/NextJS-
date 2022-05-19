import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.jpg"
          alt="Image showing myself"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Tony</h1>
      <p>I blog about web dev - frontend frameworks like React and Angular</p>
    </section>
  );
}

export default Hero;
