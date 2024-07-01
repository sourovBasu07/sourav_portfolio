import React from 'react'
import { HiOutlineCheckBadge } from 'react-icons/hi2'

const Database = () => {
    return (
        <div className="px-0 md:px-16 py-8 rounded-[1.25rem]">
            <div className="font-medium text-normal-font text-center mb-6">
                Databases
            </div>
            <div className="w-full">
                <div className="w-full flex flex-wrap justify-center items-center gap-y-4 gap-x-6">
                    {["MongoDB"].map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 border border-solid border-[rgba(0,0,0,0.1)] px-6 py-3 rounded-full text-titleColor cursor-pointer"
                        >
                            <HiOutlineCheckBadge size="1rem" />
                            <h3 className="font-medium text-normal-font leading-4 ">
                                {skill}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Database