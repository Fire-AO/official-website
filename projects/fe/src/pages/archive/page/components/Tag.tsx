import React from 'react'

interface TagProps {
    tag: string | React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ tag }) => {
    return (
        <div className="rounded-full border border-[#2c2c2c] dark:border-[#d9d9d9] px-1 py-0.5" >
            <p className="text-sm font-['PRETENDARD-SEMIBOLD'] text-center text-[#191919] dark:text-[#d9d9d9] text-nowrap" >
                {tag}
            </p>
        </div>
    )
}

export default Tag