import React from "react";
import styles from "./testimonials.module.css";
import YoutubeEmbed from "./youtube";

interface Testimonial {
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Stop fucking asking me questions that are already in the whatsapp description",
    author: "Nick Kolev",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className={styles.testimonials_container}>
      <h1 className={styles.testimonials_header}>Testimonials</h1>
      <div className={styles.youtube_video}>
        <h1>Youtube Embed</h1>
        <YoutubeEmbed embedId="T8XS3VP2HC0" />
      </div>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={styles.testimonial_item}>
          <p className={styles.testimonial_text}>{testimonial.text}</p>
          <p className={styles.testimonial_author}>- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
