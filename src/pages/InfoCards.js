import React from 'react';

const InfoCards = ({title, img, bg}) => {
    return (
        <div className={`${bg} select-none flex flex-col justify-center items-center py-5 md:my-5 rounded-xl `}>
            <img src={img} draggable="false" className=" lg:h-[100px] md:h-[80px] sm:h-[50px]" alt="" />
            <h3 className='text-white'>{title}</h3>
        </div>
    );
};

export default InfoCards;