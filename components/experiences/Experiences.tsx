import React from 'react';

const expLists = [
    {
        id: 1,
        exp: "Developed and maintained web applications using the MERN stack",
    },
    {
        id: 2,
        exp: "Designed and implemented RESTful APIs to handle data integration and communication between the front-end and back-end.",
    },
    {
        id: 3,
        exp: "Utilized Redux for state management to ensure efficient data handling and application performance.",
    },
    {
        id: 4,
        exp: "Implemented user authentication and authorization using JWT",
    },
    {
        id: 5,
        exp: "Collaborated with cross-functional teams including designers, product managers, and other developers to deliver high-quality products.",
    },
    {
        id: 6,
        exp: "Participated in code reviews and followed best practices for clean, maintainable code.",
    },
    {
        id: 7,
        exp: "Ensured data security and integrity by implementing encryption and validation techniques."
    }
]

const Experiences = () => {
    return (
        <div className="section container" id="experiences">
            <span className="section__subtitle">My work experiences</span>
            <h2 className="section__title">Professional Experiences</h2>
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0">
                <div className="w-full md:w-1/4">
                    <h3 className="">Core Devs Ltd.</h3>
                    <p className="">Internship</p>
                </div>
                <div className="w-full md:w-3/4 flex gap-3">
                    <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-titleColor" />
                        <div className="w-[2px] h-[calc(100%-24px)] bg-textColor" />
                        <div className="w-3 h-3 rounded-full bg-titleColor" />
                    </div>
                    <div className="flex flex-col gap-2 py-5">
                        <h3 className="">March 2024 - Present</h3>
                        <h2 className="">MERN Stack Developer</h2>
                        <div className="flex flex-col gap-2">
                            {expLists.map(exp => (
                                <div className="flex gap-2">
                                    {/* <div className="w-[2px] bg-textColor rounded-full" /> */}
                                    <p className="">{exp.exp}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences