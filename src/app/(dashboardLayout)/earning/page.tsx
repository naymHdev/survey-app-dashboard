import Earning from "@/components/modules/Earning";
import NSPageSectionTitle from "@/components/ui/core/NSPageSectionTitle";

const EarningPage = () => {
  return (
    <>
      <NSPageSectionTitle title="Earning" />
      <div className=" font-sora">
        <Earning />
      </div>
    </>
  );
};

export default EarningPage;
