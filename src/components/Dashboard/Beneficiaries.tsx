import { MoveUpRight } from "lucide-react";

const Beneficiaries = () => {
  const beneficiaries = [
    { name: "Precious Njoku", bank: "Guarantee Trust Bank" },
    { name: "Emeka Obi", bank: "First Bank" },
    { name: "Chioma Eze", bank: "Zenith Bank" },
    { name: "Ifeanyi Okeke", bank: "Access Bank" },
    { name: "Adaora Umeh", bank: "Union Bank" },
    { name: "Kelechi Nwosu", bank: "Fidelity Bank" },
    { name: "Obinna Uzo", bank: "UBA" },
  ];

  return (
    <div className="p-2 md:p-6 bg-white rounded-[24px] h-auto">
      <h1 className="text-2xl font-semibold mb-8">Saved beneficiaries</h1>
      <section className="space-y-2">
        {beneficiaries.map((beneficiary, index) => (
          <div
            key={index}
            className="cursor-pointer hover:bg-secondary p-2 rounded-md border-b flex justify-between items-center w-full"
          >
            <div className="flex justify-start items-center gap-x-3 h-[45px]">
              <div className="flex-wrap flex justify-center items-center w-[45px] h-[45px] border rounded-full bg-[#D9D9D9]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-bookmark-fill text-[#231F20]"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                </svg>
              </div>
              <div>
                <h2 className="font-semibold">{beneficiary.name}</h2>
                <p className="text-[#666161] text-sm">{beneficiary.bank}</p>
              </div>
            </div>
            <MoveUpRight className="" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Beneficiaries;
