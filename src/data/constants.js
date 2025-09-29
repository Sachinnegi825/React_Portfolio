// Project assets
import Oasis from "../assets/Projects/oasis.webp";

import Project1 from "../assets/Projects/project-1.webp";
import Project2 from "../assets/Projects/project2.webp";
import Project3 from "../assets/Projects/project3.webp";
import Project4 from "../assets/Projects/project4.webp";
import Project5 from "../assets/Projects/project5.webp";
import Project6 from "../assets/Projects/project6.webp";
import Project7 from "../assets/Projects/project7.webp";
import Project8 from "../assets/Projects/project8.webp";
import Project9 from "../assets/Projects/project9.webp";

// Skills assets
import mongoDBSVG from "../assets/Skills/mongodb.svg";
import Html from "../assets/Skills/html.png";
import Css from "../assets/Skills/css.png";
import Js from "../assets/Skills/js.png";
import Bootstrap from "../assets/Skills/bootstrap.png";
import Material from "../assets/Skills/material.png";
import Next from "../assets/Skills/next.png";
import Redux from "../assets/Skills/redux.svg";

import expressSVG from "../assets/Skills/express.svg";
import reactSVG from "../assets/Skills/react.svg";
import githubPNG from "../assets/Skills/github-mark-white.svg";
import postmanSVG from "../assets/Skills/postman.svg";
import tailwindSVG from "../assets/Skills/tailwindcss.svg";

export const Bio = {
  name: "Sachin Negi",
  roles: [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Mern Stack Developer",
  ],
  description:
    "Motivated software developer with 1+ years of experience in web development. Passionate about delivering high-quality solutions and continuously improving technical skills to contribute effectively in dynamic environments.",
  github: "https://github.com/Sachinnegi825",
  resume:
    "https://drive.google.com/file/d/1zC-pzbVqilW-6xsmC68h-QbaGbfGqhVG/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/sachin-negi-54aaba222/",
  twitter: "https://x.com/SACHINN68557499",
  insta: "https://www.instagram.com/sachinnegi_019/",
  facebook: "https://www.facebook.com/sachin.negi.524596/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: Html,
      },
      {
        name: "CSS",
        image: Css,
      },
      {
        name: "JavaScript",
        image: Js,
      },
      {
        name: "Bootstrap",
        image: Bootstrap,
      },
      {
        name: "React Js",
        image: reactSVG,
        // "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image: Redux,
      },
      {
        name: "Next Js",
        image: Next,
      },
      {
        name: "Material UI",
        image: Material,
      },
      {
        name: "Tailwind CSS",
        image: tailwindSVG,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
        //nodeSVG,
      },
      {
        name: "Express Js",
        image: expressSVG,
        // image: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
        //"data:image/png;base64,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",
      },
      {
        name: "MySQL",
        image: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
      },
      {
        name: "MongoDB",
        image: mongoDBSVG,
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },

  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
      },
      {
        name: "GitHub",
        // image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        image: githubPNG,
      },

      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image: postmanSVG,
      },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    img: "data:image/png;base64, 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",

    role: "Fullstack Developer",
    company: "Sidlabs LLP",
    date: "Oct 2024 - Current",
    desc: [
      "Developed responsive UIs and robust back-end solutions using ReactJS, Next.js, Node.js, and Express, improving application performance by 20%",
      "Designed and implemented RESTful APIs, optimizing server-side processes and reducing response time by 15%",
      "Integrated front-end and back-end components to create seamless user experiences, enhancing functionality and user engagement by 20%",
      "Collaborated with design and product teams to improve UI/UX, increasing overall user satisfaction by 15%",
      "Optimized application performance through code splitting, lazy loading, and database indexing techniques.",
      "Contributed to a custom design system, ensuring consistency and improving code maintainability across both front-end and back-end",
    ],
  },
  {
    id: 2,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw8QEBAVERATEA4QDRUVDQ8QEA4RFREYFhcRGBcYHSggGBolIBkXITMhJSorLi4uFx8zODMsNzQtLisBCgoKDg0OGhAQGisdHyUvLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLSstLS0tLSstLf/AABEIAMgAyAMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEEBQYIAwL/xABLEAABAwIBBQoJCgQEBwAAAAABAAIDBBEFBgcSITETFCJBUWFxgZGxMjQ1cnN0obKzFRYjM1JTVJLB8EJik9EIJEODNnWCoqO04f/EABsBAQACAwEBAAAAAAAAAAAAAAABBAIDBQYH/8QALhEBAAICAQIFAwQCAgMAAAAAAAECAxEEITEFEhMyQQYiMxRRcYEjYSTwNFLB/9oADAMBAAIRAxEAPwDcM8+Jz0tBE+CQxvNQxpIA2FrtSJQx888S/FO/K1A+eeJfinflaiWRwjOTidO8EzbqwHWxwAaexEJyyJythxSn3SPgyNs2aM7WHl6OdENjCCoKAUFEH0gIKAoKoCAgICAgICAgICAgIIzz8+TofWme45EoHYwuIDQXE7ANZKD23jN9y/8AIUHg4WJBFjxjjCJbLm6yhOH4hDISdyeRFUDX4LjbS6RqRDpaujc+GRrDZzo3hhvsJbYFELTJeklgoqaGd2lMyJrZXXvpOG03QZF+sG3GDbsQaU+arwzDYGyO053VkcTnX0rMln29iDdy6w19aDG5SyFtDVuabEQTFpB2ENOtBbZETOkwyge8lz3UsDnE7SSwXKDOoCAgICAgICAgICAgII0z9eTofWo/cciYRZmxYHYxQhwuDJJcEXB+heg6T+ToPumfkCI20jORkHBVUsksETWVMTXPZotDd0AGtptxonbns9h19Or9UHTGTuLGpwNk9yH70eHEHWHsaW39iIasK+qqcMwOhimc2eti0p5tImRkUbdJzr8ZKD1wKlq6HGI6KSpfNAKOpmhLnHhAkCxvtLT3oMLiVLPWYLQSOqZA4V7oyS4ku05i1rulqDZcUwWtqJaXDG1MjIIaYSVM4LtOd5dYNvyoLfBd3p4Mbw+eZ04p4S+B7iS4xyRE2KJbfkB5Kw71Sn9wIhsCAgICAgICAgICAgICCNM/Pk6H1pnuORMIuzW+WaD0knwXoOnEYqEIlyllhQinxCsiAs1s8mjzNJuESljNLVF+BVrD/pPqWjodEH/qg88jNU+ThOx2GTNZ5w1nrsiGy4u4fLtIP4vk6sJ6C5qDVqLyDQ/81h/9koM/lbiNfU1ww7D3thc2Bs9TK4HgaTrNagwOCUEtPJj8U05nlFGzdJHbSTETZEt9yA8k4d6pT/DCIbAgICAgICAgICAgICAgjTP15Oh9aZ7jkTCLs1vlmg9JJ8F6DpxECDmnO3GG4zWAce4u/NC0oluGZQOkocUibrcfBHO6It/RCWdlyXqRheFCEhmIUTGujBPharPZ2ILHAqWtOORS1pG7TUFS7QaTowsDw0N/fKgvXZMVfyE2nYA2qiqDURDlLZS4BB4VUeLU9TFiMNM2WWopI4KuIkjc5GvJDtXEg9sEyarmOxV9RZ8lZSaVxewlII3PoAsiG55IUb6fD6KGQWkjp4Y3jkc1oBCDMICAgICAgICAgICAgII0z9eTofWme45Ewi7Nb5ZoPSSfBeg6cRAg5wzyAfLNRbaWQX6dyaES2/8Aw++BX+dB3OQluGXlDWaVJWUXCmpnyF0ZdZs0b26Jb0/3RC2yNoK2esmxGuYInGJsFNGDfQjvpOPWbIN5QEBAQEBAQEBAQEBAQEBAQEEaZ+vJ0PrTPcciYRdmt8s0HpJPgvQdOIhQohzZneeDjVXr4oB2QtFkZN2/w+s+irncRkhHWGk29qaQlxEfIkJnp1VumgQVQEFEBBVAQEBAQEBAQEBAQRpn68nQ+tR+45Ewi7Nb5ZoPSSfBeg6cRChRDnbKF8dTiFfI5rX/AOZexpOvgtAb+ip58tqvS+FeHYuRj3deYHjktCx7KcNY1zg59uMgWutH6izrx4Lx9dIZL59V32x7VP6iUz4Nx/2ZrBM48geG1LAWGw0m7R/Mb8S24+S5/L8Ajy7xSkqlqGSsa9jg5rgC0jYQVcidvK5MU0nUvdSxVQEFHIhRqD6RIgICAgICAgICAgjTP15Oh9aZ7jkTCLs1vlmg9JJ8F6Dpu6IYPK/KKLD6WSaRwDg1wibcXe8jUFA56wSQvZI9210rnO6SLqhyfc9r4DqMM7ZA/vaq3WXenpHSdF/3rRHmjttX99qnUJ6pFzVY0bvpHuuLF8PNr4TVc4+T4eU8f4fl/wAtf7SUSrjy3bqpdCdwaSR2OrF5QtqCyPeztF27Rafo9LhLG+9dFrjTjiZ88Mm0rNW+X1dY/Oif9AKnR8KgoKoCAgICAgICCNM/Xk6H1pnuORMILoqySCRssTtGRpJYRxXFkGZ+e2JfiXIMViGJT1LtKeV0hvfW42HPY7FEjLZPfVO889wVDk93s/AIj0ZSfmso45X1O6MD7NjtcA2uXLLjREy1+P5b44r5Z0kKTAqVwIMLbHV4IVv06y8zHNzx1iyNMv8AJVtIWzQC0TjovGvgOOzqVLPhiOz1Pg/iduR9mSerXsna7e9XTy7NGRml5hNitWK2rbdTxDD6vHtVOOK17aenkmdsYwu6dWpdO1vt2+fYcPqXijS4qzEacRVs7w6GRzBNHYfRsebNPSLhaIm1esuzbHxcsThpGphfYxJV1dXJBTS7kyGNjnmwJc940h1f3WVptaejTx4w4ccXyxvb4lxqqFDA9/AnFUyGXV4YEmiSOYpN7RCP02GeRMV7aemL1NZV1b4KWTcmQMa+V1gdKRwu1vQlptaftTgpgw4ovljfm7MfTY/VGixGR7tGWGVjGCw4Ng2/br7VjW1orMz3WLcTDGfHWvadja/EIZKarmeDDNJGx0ergMeeCelRW141aUWxca9bYqR1hIbTqVp5+VUBAQEBAQEBBGufaNzsOhDWlx3yzUATq0Ha0EE71l+6f/SeiTekv3T/AOk9BfYTk7WVbxHDA8k2GthYNu254lEjbcSyZdhhjge/TkdGJZDsAc4kaI7FR5Puez8AneKW7ZofrKrzYu9yy4vyrfUfaiTbK78PKMPldSCaiqWWv9G5w6QLhYZY3Vc8Py+lyKyghcrs+iT1p/SXcopzLgZffW6CEnrsujad43h+LSK87yz/ALY6twnFZ4DFJLHuTmtB4NtXEsPLae8rdc/DpfzVj7uq8x/BquOZtXRPBkEbGTsuLPsNRKm9LR91Wni8rDenpZ46bnUrXEsZNZQwuczQkZWwxyt5HteL9Si2SbVZYuNGHkTETuNdGYyT8ZxK+3fDfy7mLLbjn7pU+bv0sX9sHiIG98cts3yz3I1qntZdwb8+Hf7SzGVw/wAjTempPeC2ZPbCrwpn9Rb+22x7B0BbnKt3fSIEBAQEBAQEHnLC1ws5ocL31gFB57xi+7b+UIG8Yvu2/lCD0ZEGizQAOKwCiREudbx5noGe+5UeV7oey+nvxSv80P1lV5sXe5ZcX5aPqPtRJwV34eUeNU27Hjla4exRPWGeOdXiXO8jbFw5CR2Gy5Nn0zHO6QmDAqPfeCxxfbhe0cxDiB3LoUrvG8PzL+jz7W/3/wDGIFVX1McVA6FzHBzG1Ev8Ogw3uOc29qw++0eXS1OLjYpnPFt/tDI4pUVNDVySsidNDNHGLDXoPYLLK82rPSOivhrh5GKK2nyzCx+SKg0jXujO6zV0dTIzV9G0vGrsCRFtRDZ6+KM2qz0iNL3F46qjq5Kili3Zk7GCRoI4EjRYOU281Z3DDBbDnxRjyzrXZh8OpJ30WLRlunOahukBxuLWOstdYmYstZ8mOmbFaJ+3Utmyoo5JKOBjGFzhLTFwHEGuFyt169HN4mWtM82nt1bMwah0BbXOnu+kQICAgICAgICAgIKFQIizrePM9Az3nKjyvdD2X09+Cf5X+aH6yq82LvcsuL8tH1H2ok4K68o+JvBd0HuUMqd3PFaLSyDke8djlybd30vD+OEz5vvJlL5snxHLpYPZDwvi/wD5l/8Avw2HRG2wv1La5u5HNB2i/YiN6CE+ERMx1abi2IVdFVzubC6eCVrTGG3O5vaLEdf6KvNpiXb4+DDyMVd28swyeRtDJHA+SYWlnkfNIPs6R1N7LLZjjUKnPyUnJ5adobBZbFDfXb6QEBAQEBAQEBAQEBBQqBEWdbx5noGe85UeV7oey+nvwT/K/wA0P1lV5sXe5ZcX5aPqPtRJwV15R5zngu813collT3Q53qHXe88rnHtK5Nt7fTMWvTjqmrIAEYbS3+y/wBr3LpYPZDwXi0/8u//AH4bCVtc4JUBZTvSNKaIUTESmP3hUIdBTJtUFAugqgogXUACpBBVBS6gVUggICgRDnW8eZ6BvvuVHle57L6e/DP8r/ND4dV5sXe5ZcX5afqTtRJwV34eT/0ssXnEdPM/7Mb3djUbMUbtEObpKp2kdm08XOu1j4OGaxOlTP4xysd5rFuy+p8pqyNrWMnc1rRZoB1DjVmOLir8Obk5mW9ptae6QM1NTV1Us008znxxt0Ggk2L3a79neudzq1pGlriXm3WV/l9l9vN296azp7AyOOtsfNblWPF4c5OtuzLPyfJ0hkc2WLTVlI+Sd2k8TPbfmsNS1c3FXHfUNnFv567bdpC9uNVNSsRKpIG1D5aznCqHx0JdG8sdusAu02NjILhb8Fd3Y3nUdGyRuBAF9dhdaZjUsu6pcBt61GpT2VBUdugoCDx9KnSGs4HUPdiuJsc8ljG0ZjaTwW6TXXst+Sv+OssYnrLZtIXt261o18s/hVxA1nUkdex2Lp8ncumjT6QEBAUCIc63jzPQN99yo8r3PZfT34Z/lf5ofrKrzYu9yy4vy0/UfaiTVcl5NqGcjF2w0j4tL6SbgAcejfhFast9RDreFcWcuTza6REoJl8J3Se9es4+/Th4/l9M1v5fK27VtzvqmfJ2ZuF4CJyLPe10o/mfIbNHZZcTLE5eRqXVxzGPChyomdI50jyS9zi5xO0km912aR5Y8rmWtu25S1myrhTYPVTnZG+aQ8+iwGy4/Np5ssQ6nDnVHhvWvp6ePFn1LnPJbLNET9HuDneD0gFY7pafTiFj/bMZRyTV9ZBRQSmKLcN8VD2nhEO1NateOtaUm1uqZnc9GDxp9TFhlbTTkyOp6mAQvd/qsc5rm+3Ut+Py2yRavRjPSOq8hpa2gqaGomqTIKmUR1LCeC0vbwbdCwtNLxMRHY+6NFZS1ddiWIUrKh0cDDA9xB1gmIWYOa+vqTdK46zMGrTt60OUNRBhVUHu3SqgqH0THcb3lwaw+32KJxVtliY7SmJl5to6zCpKWpkqXTRyyMirWuNwxz9jh16utTNqZYmtY6p2vBX71rsdn27nBSPHOdB9gsZr5qUqj5linUdfSQRYq6pc95dHJVRE8DcXuA0RzgH2LOJx2tOMnemXx4zYlWMpIZjDDHAyonc02c4yeA32XWvHFMVfNaEz1YmkkrdyxmCSdxlp4o9ycDrs0F2l1hZzFPttrujemfx/FXvwylfE4tkqXUkbSNoLyC4961YqRGWdspluSqsxAQUKCIs6vjzPQM99yocuPuey+nvw2a9g2OT0ZeYXW0wA7qWiuWauryuHi5MRF47Mmcuq+x+k9gWyOTZUjwTjfswVbWyzvMkzy954zsHVxLCbza0L1OPjw45rSPhgpvCd5x717rj79KHx3nR/yLKMYXENG0kAdZsttvbuVWsTMwkjOzWCKKioWHUyNsjxzAaLR39i5nCru1rL3KtMREI1XU3EdFDrtJWTP/DmI/71+jRC5PIn/PDqcXc41+7JWvlpAJMQtA+FtwbBoYWjV0LV6+OtukdViKT5WbychEeK1TL30aGha0/aDQQSOZacs7xxP8tlYiJVziVUb6SWNrgZGTUpkHGLyC104tJ80TPZFtaemXQ1Yb69T96YO9k3+H1k35VxnzqP4KZfx0I90tVqSdzqyfBGPR6fRugW+s9v4YT3ltecrxDnNRS6PTuzVW4v5Gd+rW8or7pj9vusPLugXurOPeqf2wnvLasqXN+R6jkNKA3raAFVw9c+mc+1jMiQRW1Qf4W8cMJ6NyP/ANW3kfjj9urGndd4SxkmJYuzaCyna8dMesLG3THSUx1mWv5PuMrsJo3azTT1z5f9lxa0f947Fuy9Itf92MfCT1z24QEFCgiDOsbVzL/cM95yo8n3PZfT2vRn+WmaQ5faFV11eh3AHjl9oUTEomfnbJYTgtRVPayKMm9uEQQ0c91sx4rTMKfL5uLDSZtLzqciq8PeBCSA5wBsddja69ng5FK0iJfJeXS2TNa1VKDJ+ograJk8ehuk8eiDxhrwSFnfNW1J000w2peIl75w6k1OKzNbrs5kDB0C3eSo4dYpiiZOTM2yaWvzLxD7g8XKs/1mP5R+nslDIXJyWLDZ6WpaGmV0oI28FzAFyuVni2WLQ6PGpNasQ3D8VkiZhb2AQtc1r59LW6Brr2ty/wBlPnx787bG+zOZS4dU09RBW0TN0LId7zxk20473B6QtWG1LRNbptE7YyTJyrmoqmWRo31U1MEr2gjgRscLNvx6lnOWtbxFe0MYrMw2PKzDpZ95bmL7nVQySczW8a04smts7QYHh0seIYlM8WjmdTGI38LRj0Sl7xOOsJiPulimZMSy02Kwv4LpqyWemN+QgsdzawtnrViazDHXSVpRUmJV8tNFWRCOCme2SU3vvh7RZvVxrO1sdKzaveUREzLLDAHyVWLbo36GqhgjjPQxwPetU5Y8lNfCfL1lr7MPxSojiw2ZgbAxzBNNf6yFjrtHTqCsTfDWZvHdGujMZSYZVR1MdVh+iZWxCGojLgNKP+B3UtOLJWa+W/ZPl1K2zfU80dZiQndpTEwOmI2abm3t0LLkzXy10jH3l6ZMYdo4zib9rGBoZ/K6YNe7uUZr7xVhMR1lvaptggIKFBZVWFQTO0pYmPdawJaCbA7FjNat2PkZMcfZbTx+b9J+Hj/ptUenT9mz9byP/eQZP0n4eP8AptT06o/WZ/m0r2npWRizGBo5gApiIhpvktf3S9rLJr00XLJl8WwcfzynsF1dwfhuqZvyVRS2fdcSbJ9usa7tmuut5dYdOfveR0eAvOO5rorZAsoCyAApCygLIFkCykLKNBZSNLykhr6at33SM3ZkkTYpo7+CWm7Xe0q1h8lo1Zhbb7yeoKyClraqRo37UF02hxNLW2ZH++VMtq2tFY7QRC8yHoJ44ZZqoBtTUTOllA/gAAa1vYFrzTEzqE1hsy0shAQEFEBEaVRKidAQaJlq62KYUeTfJ7Iyr/FjeOyln98IgwjxuD1iH4oK69/Zpzqe900F5j5d2FVKRAQEBAQEBAQCoFEJUTWhUJ1FVIICAgICAgICgR5nCk0MRwx3NUDtYQujw/bZR5HS0Inwjxun9Yh+IF18n43Px+900F5h3VUSICAgICAgICAgIFkBAQEBAQEBAQEBBGWdWTRrMMdxB5v0F7QV0+BG62c/me6qMsMBFZAOSpiH/lC6eT8ajT3umAvMu7D6RIgICAgICAgICAgICAgICAgICAgICCJs9x4dHbboy27Qur4d8ubzfhotOb18LhsdUQPH/U8EBdDJ7JU8fvh0iF5qXdj4fSJEBAQEBAQEBAQEBAQEBAQEBAQEBAQRNnu8Oj82XvC63hny5nO+GhYYbz0TuSeFh6RID3H2LoZfZKpi98OlAvMu7D6RIgICAgICAgICAgICAgICAgICAgICCKM9cTnPpNEE8GW9ukLq+G/Lm874aLk/A/fELC0i80Dgbag5sgPUr+afsVMXd0eF5uXcjs+kSICAgICAgICAgICAg//Z",

    role: "Frontend Developer",
    company: "DDT Software & E Comm Pvt Ltd .",
    date: "Nov 2023 - June 2024",
    desc: [
      "Built reusable and responsive user interfaces.",
      "Integrated frontend and backend systems through robust API implementation, enhancing system performance and reliability.",
      "Developed a diverse skill set with a proven track record of delivering results.",
      "Championed innovative technologies and best practices, fostering a culture of continuous learning and excellence.",
      "Projects I contributed to : https://exampreptool.com/, https://scanconnect.in",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "data:image/webp;base64,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",
    school: "Dr. Akhilesh Das Gupta Institute of Technology & Management",
    date: "Aug 2019 - Aug 2023",
    grade: "8.8 CGPA",
    desc: "",
    degree: "Bachelor of Technology",
  },

  {
    id: 1,
    img: "https://i.pinimg.com/originals/0a/d4/cf/0ad4cf56058de6c3697a149f50f45e20.png",
    school: "Kendriya Vidyalaya Shalimar Bagh",
    date: "Jun 2017 - Mar 2018",
    grade: "78.4%",
    desc: "I completed my class 12 education at Kendriya Vidyalaya Shalimar Bagh,Delhi-88",
    degree: "CBSE(XII), Science",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/originals/0a/d4/cf/0ad4cf56058de6c3697a149f50f45e20.png",
    school: "Kendriya Vidyalaya Shalimar Bagh",
    date: "Jun 2015 - Mar 2016",
    grade: "85.5%",
    desc: "I completed my class 10 education at Kendriya Vidyalaya Shalimar Bagh,Delhi-88",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Oasis Platform",
    date: "Apr 2025 - Aug 2025",
    description:
      "Oasis Platform is a full-stack MERN learning platform with secure authentication, role-based access, tiered learning paths, AI chatbot support, course enrollments, quizzes, and a built-in peer community — all wrapped in a responsive web and mobile-friendly UI.",
    image: Oasis,
    tags: [
      "React Js",
      "Node Js",
      "Express Js",
      "Mongo DB",
      "Google Gemini API",
      "Tailwind Css",
    ],
    category: "mern stack",
    webapp: "https://oasis-platform.netlify.app/",
  },
  {
    id: 1,
    title: "Blog App",
    date: "Jul 2024 - Aug 2024",
    description:
      "A Mern Stack log App consists of features like login,logout,post creation,edit post,add comment and many more.",
    image: Project6,
    tags: ["React Js", "Node Js", "Express Js", "Mongo DB", "Tailwind Css"],
    category: "mern stack",
    github: "https://github.com/Sachinnegi825/Mern-Stack-Blog-App",
    webapp: "https://mernstackblog.netlify.app/",
  },
  {
    id: 2,
    title: "Youtube Clone",
    date: "feb 2023 - feb 2023",
    description: "Youtube clone",
    image: Project1,
    tags: ["React Js", "Redux", "Tailwind Css"],
    category: "frontend",
    github: "https://github.com/Sachinnegi825/youtube-Clone",
    webapp: "https://sachin-youtube-clone.netlify.app/",
  },

  {
    id: 3,
    title: "DocWeb",
    date: "Nov 2024 - Nov 2024",
    description:
      "DocWeb is a platform designed to provide top-notch psychological assessments",
    image: Project9,
    tags: ["React Js", "Framer Motion", "Tailwind Css"],
    category: "frontend",
    github: "https://github.com/Sachinnegi825/DocWeb",
    webapp: "https://docweb-app.netlify.app/",
  },

  {
    id: 4,
    title: "Galeto Landing Page",
    date: "feb 2024 - feb 2024",
    description: "Galeto Landing Page",
    image: Project7,
    tags: ["React Js", "Tailwind Css"],
    category: "frontend",
    github: "https://github.com/Sachinnegi825/Gelato-Landing-Page",
    webapp: "https://galeto-landing-page.netlify.app/",
  },

  {
    id: 5,
    title: "Thence",
    date: "Apr 2023 - Apr 2023",
    description:
      "A fully-responsive landing page consists of features like registration form,redirection, accordian",
    image: Project8,
    tags: ["React Js"],
    category: "frontend",
    github: "https://github.com/Sachinnegi825/Thence-Theme",
    webapp: "https://thence-app.netlify.app/",
  },

  {
    id: 6,
    title: "SocialSnap",
    date: "feb 2023 - Mar 2023",
    description: "SocialSnap",
    image: Project2,
    tags: ["React Js", "Redux", "Tailwind Css"],
    category: "frontend",
    github: "https://github.com/Sachinnegi825/Socialsnap",
    webapp: "https://sachin-socialsnap.netlify.app/",
  },

  {
    id: 7,
    title: "FoodZilla",
    date: "March 2023 - Apr 2023",
    description: "FoodZilla - a food app which fetched data from swiggy api ",
    image: Project3,
    tags: ["React Js", "Redux", "Tailwind Css"],
    category: "frontend",
    github: "https://github.com/Sachinnegi825/Foodzilla",
    webapp: "https://sachin-foodzilla.netlify.app/",
  },

  {
    id: 8,
    title: "Tea Titans",
    date: "Feb 2022 - Jul 2022",
    description: "Tea Titans a tea company landing page with greate visuals",
    image: Project4,
    tags: ["Html", "Css", "Javascript"],
    category: "frontend",
    github: "https://github.com/Sachinnegi825/html-css-javascript-tea-titans",
    webapp: "https://frontend-project-tea-titans.netlify.app/",
  },
  {
    id: 9,
    title: "Spider hitting Game",
    date: "Jun 2022 - Jul 2022",
    description:
      "A Spider hitting Game where you get point on htting the spider",
    image: Project5,
    tags: ["Html", "Css", "Javascript"],
    category: "frontend",
    github: "https://github.com/Sachinnegi825/javascript-spider-hitting-game",
    webapp: "https://javascript-spider-hitting-game.netlify.app/",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
