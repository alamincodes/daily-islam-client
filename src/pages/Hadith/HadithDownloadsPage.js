import React from "react";
import bukhariPart1 from '../../Images/BukhariSarif/Sahih-Bukhari-part-1.pdf';
import bukhariPart2 from '../../Images/BukhariSarif/Sahih-Bukhari-part-2.pdf';
import bukhariPart3 from '../../Images/BukhariSarif/Sahih-Bukhari-part-3.pdf';
import bukhariPart4 from '../../Images/BukhariSarif/Sahih-Bukhari-part-4.pdf';
import bukhariPart5 from '../../Images/BukhariSarif/Sahih-Bukhari-part-5.pdf';
import bukhariPart6 from '../../Images/BukhariSarif/Sahih-Bukhari-part-6.pdf';
import bukhariPart7 from '../../Images/BukhariSarif/Sahih-Bukhari-part-7.pdf';
import bukhariPart8 from '../../Images/BukhariSarif/Sahih-Bukhari-part-8.pdf';
import bukhariPart9 from '../../Images/BukhariSarif/Sahih-Bukhari-part-9.pdf';
import bukhariPart10 from '../../Images/BukhariSarif/Sahih-Bukhari-part-10.pdf';
import HadithDownload from "./HadithDownload";
const HadithDownloadsPage = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-3 my-24">
      <HadithDownload hadithPdf={bukhariPart1} partName="প্রথম খন্ড" hadithName="সহীহ বুখারী শরিফ"/> 
      <HadithDownload hadithPdf={bukhariPart2} partName="দ্বিতীয় খন্ড" hadithName="সহীহ বুখারী শরিফ"/> 
      <HadithDownload hadithPdf={bukhariPart3} partName="তৃতীয় খন্ড" hadithName="সহীহ বুখারী শরিফ"/> 
      <HadithDownload hadithPdf={bukhariPart4} partName="চতুর্থ খন্ড" hadithName="সহীহ বুখারী শরিফ"/> 
      <HadithDownload hadithPdf={bukhariPart5} partName="পঞ্চম খন্ড" hadithName="সহীহ বুখারী শরিফ"/> 
      <HadithDownload hadithPdf={bukhariPart6} partName="ষষ্ঠ খন্ড" hadithName="সহীহ বুখারী শরিফ"/> 
      <HadithDownload hadithPdf={bukhariPart7} partName="সপ্তম খন্ড" hadithName="সহীহ বুখারী শরিফ"/> 
      <HadithDownload hadithPdf={bukhariPart8} partName="অষ্টম খন্ড" hadithName="সহীহ বুখারী শরিফ"/> 
      <HadithDownload hadithPdf={bukhariPart9} partName="নবম খন্ড" hadithName="সহীহ বুখারী শরিফ"/> 
      <HadithDownload hadithPdf={bukhariPart10} partName="দশম খন্ড" hadithName="সহীহ বুখারী শরিফ"/> 
    </div>
  );
};

export default HadithDownloadsPage;
