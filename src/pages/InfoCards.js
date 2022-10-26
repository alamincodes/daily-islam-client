import React from 'react';

const InfoCards = ({title, img, bg}) => {
    return (
        <div className={`${bg} select-none flex md:flex-col  sm:flex-row md:justify-center sm:justify-center items-center sm:py-2 md:p-5  md:my-5 md:rounded-lg sm:rounded-2xl`}>
            <img src={img} draggable="false" className=" lg:h-[100px] md:h-[80px] sm:h-[70px] p-3" alt="" />
            <h3 className='text-white'>{title}</h3>
        </div>
    );
};

export default InfoCards;