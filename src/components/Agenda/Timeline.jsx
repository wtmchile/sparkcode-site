import Image from 'next/image';
import { motion, useAnimation, useInView, useScroll } from 'framer-motion';
import { cn } from '@/common/utils/cn';

const Card = ({
  item,
  leftSide,
  status, // current, future, past
}) => {
  const timeFormatter = new Intl.DateTimeFormat('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const startTime = timeFormatter.format(new Date(item.startHour));
  const endTime = timeFormatter.format(new Date(item.endHour));

  return (
    <motion.li
      onClick={(e) => {
        e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }}
      className={cn(
        'relative mx-4 flex  h-fit min-h-[160px] w-[90vw] cursor-pointer flex-col gap-5 self-start rounded-lg border border-purple-300 bg-gradient-to-br from-[#0A0310] via-[#160E41] to-[#272039] p-5 shadow-xl lg:w-[420px]',
        {
          'md:self-end': leftSide,
          'md:self-start': !leftSide,
          'opacity-30': status === 'past',
          'bg-[purple] text-white': status === 'current',
          'md:text-right': leftSide,
        },
        {
          '': true,
        },
      )}
      initial={{
        opacity: 0.5,
        scale: 0.8,
        y: leftSide ? -20 : 20,
      }}
      margin="100px"
      whileInView={{
        opacity: 1,
        scale: 1,
        y: -40,
      }}
    >
      <div
        className={cn('flex flex-row gap-4 opacity-100', {
          'md:flex-row': leftSide,
        })}
      >
        {item.image && (
          <span className="aspect-square h-20 w-20 flex-col rounded-full">
            <Image
              className="aspect-square h-full w-full rounded-full"
              src={item.image}
              alt={item.name}
              // fill
              width="48"
              height="48"
            />
          </span>
        )}
        <div className={'flex flex-grow flex-col justify-center'}>
          <time className="font-barlow text-sm leading-none text-white">
            {startTime} - {endTime}
          </time>
          <span className="text-lg font-bold text-[#A586FC]">{item.type}</span>
          <span className="text-md font-bold text-white">{item.name}</span>
          {item.community !== 'ninguna' && (
            <p className="text-white-400 text-sm font-bold">
              <a href={item.communityUrl} target="_blank">
                {item.community}
              </a>
            </p>
          )}
          <p className="text-base font-normal">{item.topic}</p>
        </div>
      </div>
    </motion.li>
  );
};

export function Timeline({ data }) {
  return (
    <motion.div className="flex w-full flex-col items-start pb-24 md:items-center">
      <ol className="relative -left-[calc(50vw_-8px)] flex w-1 flex-col items-start justify-center gap-4 py-10 pb-24 md:left-0 md:items-center">
        <div className="absolute top-0 h-full w-[3px] rounded-xl bg-black md:left-1/2 lg:-translate-x-1/2 lg:transform" />
        {data.map((item, index) => {
          return <Card key={index} item={item} leftSide={(index + 1) % 2 === 0} status={'past'} />;
        })}
      </ol>
    </motion.div>
  );
}
