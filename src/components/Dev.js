import React from "react";
import "../App.css";
import Team from "./Team";

const Dev = () => {
  return (
    <>
      <div className="container ">
        <div className="row mt-5" id="oneCol">
          <div className="col-8">
            <h1>
              Meet our team of <span>creators</span>, <span>designers</span>,
              and subject oriented <span>problem solvers</span>
            </h1>
            <p>
              To be the company our customers want us to be, it takes the
              electic group of passionated operators. Get to know the people
              leading the way at ABC inc
            </p>
          </div>
          <div className="col-4">
            <img src="https://essenceofqatar.com/wp-content/uploads/2020/10/team.png" />
          </div>
        </div>

        <Team
          image="https://pbs.twimg.com/profile_images/1057852339762024448/B1MY-xYL_400x400.jpg"
          name="Ankit Kumar"
          designation="Full Stack Devloper"
          from="New Delhi, India"
          technologies="HTML, CSS, Javascript, Java, Spring Boot, Reactjs, MySQL"
          industry="4 years"
          description="Ankit has over 4 years of experience in database management and software development"
        />

        <Team
          image="https://media-exp1.licdn.com/dms/image/C5103AQHg9pPF73PgEQ/profile-displayphoto-shrink_200_200/0/1547025787983?e=2147483647&v=beta&t=q1_-DxXJFT7C6wFuqFgIxSHWVw_rTOkpk0MCmg5UEJc"
          name="Kalindi Rawat"
          designation="Full Stack Devloper"
          from="New Delhi, India"
          technologies="HTML, CSS, Javascript, Java, Advanced Java, Spring Boot, Angular, MySQL, Bootstrap"
          industry="2.5 years"
          description="Ankit has over 4 years of experience in database management and software development"
        />

        <Team
          image="https://storage.googleapis.com/kaggle-avatars/images/9522713-kg.jpg"
          name="Swaraj Singh Rawat"
          designation="Business Development"
          from="New Delhi, India"
          technologies="HTML, CSS, Javascript, Java,Rest API, Spring Boot, Reactjs, MySQL"
          industry="4 years"
          description="Ankit has over 4 years of experience in database management and software development"
        />

        <Team
          image="http://www.nxttechnologies.com/wp-content/uploads/2017/01/how-to-become-a-software-engineer.jpg"
          name="Shagufta Naaz"
          designation="Senior Web Developer"
          from="New Delhi, India"
          technologies="HTML, CSS, Javascript, Node Js, Angular, Mongo DB, Experess Js, MySQL"
          industry="3.7 years"
          description="Ankit has over 3.7 years of experience in database management and software development"
        />

        <Team
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0EbhvKaouoyDlJUDdaCqfyI1Jq98TnG5APaZpmNF3sKe3KIiLhij0baTosq7R7vrLVs&usqp=CAU"
          name="Mohd Sameer"
          designation="Backend Devloper"
          from="New Delhi, India"
          technologies="Java, Advanced Java, Spring Boot,Rest API, MySQL"
          industry="2.5 years"
          description="Ankit has over 4 years of experience in database management and software development"
        />

        <Team
          image="https://bsmedia.business-standard.com/_media/bs/img/article/2021-11/09/full/1636403301-3168.jpg"
          name="Shivam"
          designation="Backend Devloper"
          from="New Delhi, India"
          technologies="Java, Advanced Java, Spring Boot,Rest API, MySQL"
          industry="1 years"
          description="Ankit has over 4 years of experience in database management and software development"
        />

       
      </div>
    </>
  );
};

export default Dev;
