import React from 'react'

interface TagProps {
    tag: string | React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ tag }) => {
    return (
        <div className="rounded-full border border-[#2c2c2c] dark:border-[#121212] px-1 py-0.5" >
            <p className="text-sm font-['PRETENDARD-SEMIBOLD'] text-center text-[#191919] dark:text-[#121212] text-nowrap px-1 py-[2px] flex flex-row flex-nowrap" >
                {tag}
            </p>
        </div>
    )
}

export default Tag