import React from 'react'
import EducactionData from './EducactionData';
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.jpg'


const Eduction = () => {
    const education = [
        {
          id: 0,
          heading: "Eduction",
          img: logo,
          school: "Lyallpur khalsa college technical campus Jalandhar",
          date: "2021 - Sep 2025",
          grade: "6 CGPA",
          desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Lyallpur khalsa college technical campus Jalandhar. I have completed 7 semesters and have a CGPA of 6 . I have taken courses in MERN Stack.",
          degree: "Bachelor of Technology - B.Tech, Computer Science and Engineering",
        },
        {
          id: 1,
          img:logo2,
          school: "T.W.E.I.Sen.sec.School",
          date: "Apr 2020 - Apr 2021",
          grade: "70%",
          desc: "I completed my class 12 high school education atT.W.E.I.Sen.sec.School,Punjab, where I studied in Science.",
          degree: "PSEB(XII), Science",
        },
        {
          id: 2,
          img:logo2,
          school: "National Model School",
          date: "Apr 2018 - Apr 2019",
          grade: "60.3%",
          desc: "I completed my class 10 education atNational Model School, Punjab, where I studied Science with Computer Application.",
          degree: "PSEB(X), Science with Computer",
        },
      ];
    
      return (
        <div>
          <h1>I Am Parent</h1>
          <EducactionData  data={education}/>
        </div>
      );
    };


export default Eduction;
