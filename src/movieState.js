//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Gym Website",
      website: "http://10thplanetsaltlakecity.com/",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/gym-website",
      awards: [
        {
          title: "About",
          description:
            "Built with: HTML, CSS, Reactstrap, React, Class Based Components, React-Router. Mobile Responsive.",
        },
        {
          title: "Truly Mediocre",
          description:
            "“Meh. It's aight”- The Gym Owner",
        },
        {
          title: "Inspiring Professionals Everywhere",
          description:
            "“Looking at Cristian's website made me relapse...again” - Jon 'Bones' Jones, UFC Fighter ",
        },
      ],
    },
    {
      title: "Portfolio Website (You're on it!)",
      website: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      mainImg: goodtimes,
      url: "/work/portfolio-website",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "About",
          description:
            "Built Using: HTML, CSS/Styled Components, React, React-Router and Framer Motion",
        },
        {
          title: "Are you a curious creature?",
          description:
            "If your're already on my portfolio website then where does the button take you? Hmmm maybe click it and find out...",
        },
        {
          title: "Ryan Reynolds Approves",
          description:
            "“As an entrepreneur, business owner, superstar and national treasure myself, I am still unable to reach the heights Cristian has achieved. I actually asked him to be the sperm donor for my baby.“ - Ryan Reynolds ",
        },
      ],
    },
    {
      title: "The Music App",
      website: "https://cristianbaeza-music-app.netlify.app/",
      mainImg: theracer,
      url: "/work/the-musicapp",
      secondaryImg: theracer2,
      awards: [
        {
          title: "About",
          description:
            "Built using: HTML, CSS/Styled Components, React (Hooks), React-Router, Framer Motion and it is Mobile Responsive!"
        },
        {
          title: "What the best critics are saying",
          description:
            "“Absolutely amazing. Cristian's app inspired me to make my next album.“ -Armin Van Buuren",
        },
        {
          title: "What the not so cool critics are saying",
          description:
            "“Stop trying to contact me and leave me alone before I call the police.“ -Rihanna",
        },
      ],
    },
  ];
};
