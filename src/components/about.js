import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
              "I'm Harsh Kumar. Nice to meet you. Take a look around."
              </p>
            </div>
            <div>
              <p>
                {" "}
                I finished my high school and decided to pursue my passion for programming. I chose to study Computer Science with a focus on Information Technology at VIT College. I'm currently in my pre final year of college.

I love programming because it involves solving complex problems, and I find it incredibly satisfying when I come up with solutions. I'm excited to start my professional journey and would love to work as an intern to apply what I've learned.

Outside of coding, I enjoy painting, cricket, graphic designing, and spending time with my family. I'm always eager to learn new things.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;