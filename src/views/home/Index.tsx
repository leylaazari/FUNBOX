import PopularContainer from "src/components/popular/PopularContainer";
import Intro from "src/components/intro/Intro";
import SectionWrapperContainer from "src/components/section-wrapper/SectionWrapperContainer";
import { PopularHeaderType } from "src/common/enums/PopularHeaderType";

const Index = () => {
  return (
    <>
      <Intro />
      <PopularContainer type={PopularHeaderType.movie} />
      <SectionWrapperContainer title="watchEverywhere" />
      <PopularContainer type={PopularHeaderType.kids} />
      <SectionWrapperContainer title="kids" />
      <PopularContainer type={PopularHeaderType.year2010} />
      <SectionWrapperContainer title="offline" />
    </>
  );
};

export default Index;
