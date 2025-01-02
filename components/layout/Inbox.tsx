import Button from "@/components/module/Button";

function Inbox() {
  return (
    <div className="bg-gradient-to-b from-white to-[#E7F9FD] w-[980px] py-20 mb-24 rounded-3xl mx-auto flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold text-center">
        Deliciousness to your inbox
      </h1>
      <p className="text-sm font-normal w-[600px] text-black/60 text-center py-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </p>
      <div className="flex gap-5 bg-white rounded-xl mt-10 items-center p-2">
        <input
          className="text-black/60 pl-1 bg-inherit border border-transparent focus:border-none"
          type="text"
          placeholder="Your email address..."
        />
        <Button text="Subscribe" />
      </div>
    </div>
  );
}

export default Inbox;
