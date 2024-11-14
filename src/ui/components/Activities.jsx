import ActivityBook from "../../assets/img/ActivityBook.png";

const Activities = () => {
  return (
    <section className="container px-3 py-2 font-poppins">
      <div>
        <div className="title flex items-center justify-between">
          <h1 className="text-[18px] font-semibold">Recent Book</h1>
          <p className="text-[12px] text-[#828285]">View all</p>
        </div>

        <div className="wrapper flex space-x-2">
          <img src={ActivityBook} alt="" className="shadow-lg" />
          <div className="wrapper-in w-full">
            <div className="title">
              <h1 className="font-medium text-[16px]">Atomic Habits</h1>
              <p className="font-medium text-[12px] text-[#828285]">
                James Clear
              </p>
            </div>
            <div className="progress mt-16">
              <div className="text-page flex justify-between">
                <p className="text-[10px] text-[#828285]">Pages 178/356</p>
                <p className="text-[10px] text-[#828285]">50%</p>
              </div>
              <div className="progress-bar">
                <div className="h-2 bg-[#3EB86B] rounded-sm relative top-2 w-1/2"></div>
                <div className="h-2 bg-[#F4F4F4] rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
