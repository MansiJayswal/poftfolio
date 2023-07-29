import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello, and welcome to my portfolio website! My name is Mansi Jayswal, and I am a passionate and dedicated 3rd year computer engineering student at LD College of Engineering.
        </p>

        <br />

        <p className="text-xl">
        I have always been fascinated by the world of technology, and my journey in computer engineering has allowed me to dive deeper into this exciting field. Currently, I am honing my skills in web development using the MERN stack.Problem-solving is another aspect of computer engineering that greatly interests me. I enjoy tackling complex challenges and finding innovative solutions. Through my coursework and personal projects, I have gained valuable experience in analyzing problems, breaking them down into smaller components, and implementing effective solutions.


        </p>
      </div>
    </div>
  );
};

export default About;
