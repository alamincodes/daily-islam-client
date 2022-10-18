import React from 'react';
import InfoCards from './InfoCards';
import tasbihSvg from "../Images/info-img/tasbih.svg";
import namajSvg from "../Images/info-img/namaj.svg";
import quranSvg from "../Images/info-img/quran.svg";
const Info = () => {
    return (
        <div className='grid md:grid-cols-3 md:gap-3 sm:gap-2 sm:grid-cols-1'>
            <InfoCards title="নামাজ দোয়া" img={namajSvg} bg="bg-gradient-to-t from-[#f3696e] to-[#f8a902]" />
            <InfoCards title="কোরআন" img={quranSvg} bg="bg-gradient-to-t from-[#919bff]  to-[#ab2aed]" />
            <InfoCards title="দোয়া ও যিক্‌র " img={tasbihSvg} bg="bg-gradient-to-t from-[#5ab2f7] to-[#12cff3]"/>
        </div>
    );
};

export default Info;