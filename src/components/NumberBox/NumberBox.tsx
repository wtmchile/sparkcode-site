interface NumberBoxProps {
  number: string;
  text: string;
  flip: boolean;
}

export const NumberBox = ({ number, text, flip }: NumberBoxProps) => {
  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="relative mt-4 flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-transparent sm:h-24 sm:w-20 md:h-32 md:w-28 ">
        <div className="h-full w-full rounded-b-lg rounded-t-lg bg-fuchsia-900"></div>

        <div className="font-kufam absolute z-10 mt-1 text-2xl font-bold text-white sm:mt-3 sm:text-5xl md:mt-4 md:text-7xl">
          {number}
        </div>

        <div className="h-full w-full rounded-b-lg rounded-t-lg bg-fuchsia-700"></div>

        <div
          className={`z-5 absolute top-0 h-1/2 w-full rounded-lg ${
            flip ? 'animate-flip bg-fuchsia-950' : 'bg-transparent'
          }`}
        />
      </div>
      <p className="mt-3 text-sm font-bold text-white md:text-2xl ">{text}</p>
    </div>
  );
};
