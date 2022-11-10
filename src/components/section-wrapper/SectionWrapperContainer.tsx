import SectionWrapper from "./SectionWrapper";
import kids from "src/assets/images/kids.webp";
import watchEverywhere from "src/assets/images/watchEverywhere.webp";
import offline from "src/assets/images/offline.webp";
import { IStringProps } from "src/common/interfaces";

const data = [
  {
    key: "kids",
    title: "Create profiles for children.",
    desc: `Send children on adventures with their favourite characters in a
  space made just for them – free with your membership.`,
    img: kids,
  },
  {
    key: "watchEverywhere",
    title: "Watch everywhere.",
    desc: `Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.`,
    img: watchEverywhere,
  },
  {
    key: "offline",
    title: "Download your programmes to watch offline.",
    desc: `Save your favourites easily and always have something to watch.`,
    img: offline,
  },
];

const SectionWrapperContainer = ({ title }: IStringProps) => {
  let result = data.find((t) => t.key === title);

  return result ? (
    <SectionWrapper title={result.title} desc={result.desc} img={result.img} />
  ) : (
    <></>
  );
};

export default SectionWrapperContainer;
