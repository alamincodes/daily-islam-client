import React from "react";

const HadithName = ({ hadith }) => {
  const { hadithBengali, topicName, hadithNo } = hadith;
  const regex = hadithBengali;
  const regexTwo = topicName;
  const hadithBangla = regex.replace(
    /<br>(?=(?:\s*<[^>]*>)*$)|(<br>)|#39|&ldquo;|&rdquo;|&zwnj;|&mdash;|&rsquo;|<[^>]*>/gi,
    ""
  );
  const hadithTopicName = regexTwo.replace(
    /<br>(?=(?:\s*<[^>]*>)*$)|(<br>)|#39|&ldquo;|&lsquo;|&rdquo;|&zwnj;|&mdash;|&rsquo;|<[^>]*>/gi,
    ""
  );

  const finalEnglishToBanglaNumber = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  String.prototype.getDigitBanglaFromEnglish = function () {
    let retStr = this;
    for (const x in finalEnglishToBanglaNumber) {
      retStr = retStr.replace(
        new RegExp(x, "g"),
        finalEnglishToBanglaNumber[x]
      );
    }
    return retStr;
  };
  return (
    <div>
      <div className="bg-[#0B1120] text-white/90 rounded-lg p-2 my-2 px-3">
        <h2 className="text-center sm:text-[16px] md:text-[22px] my-5 p-2 text-[#009000] font-semibold bg-green-100 rounded-lg">
          {hadithTopicName}
        </h2>
        <h2 className="sm:text-[15px] md:text-[19px] text-justify">{hadithBangla}</h2>
        <p className="text-right sm:text-[12px] md:text-[15px] mt-2">
          <span className="bg-blue-100 px-5 rounded-full text-[#000]">সহীহ বুখারী, হাদিস নংঃ {hadithNo.getDigitBanglaFromEnglish()}</span>
        </p>
      </div>
    </div>
  );
};

export default HadithName;
