import data from '../admissionsData.json';
import { AnimatePresence, motion } from 'motion/react';
import { ScrollContext } from '@/Contexts';
import { useContext, useState } from 'react';

function FeederStatus({ local, national }:{ local: number, national: number }) {
  const differenceInPercent = local - national;
  let status = 'No Diff';

  if (Math.abs(differenceInPercent) >= 7) {
    if (local > national) {
      status = 'Feeder';
    } else {
      status = 'Anti-feeder';
    }
  }

  const color = (() => {
    if (status === 'Feeder') return 'text-green-500';
    if (status === 'Anti-feeder') return 'text-red-500';
    return 'text-gray-500';
  })();

  return <div className={`${color}`}>{differenceInPercent > 0 && '+'}{differenceInPercent}%</div>
}

export default function T30AdmissionsStats() {
  const admissionsData = data.slice().sort((a, b) => (b.localAcceptanceRate - b.nationalAcceptanceRate) - (a.localAcceptanceRate - a.nationalAcceptanceRate));
  const scrollProgress = useContext(ScrollContext);
  const [showHighAcceptances, setShowHighAcceptances] = useState(true);

  return (
    <div className="text-base font-light text-left">
      <div className="h-[50vh] flex flex-col justify-end overflow-hidden">
        <AnimatePresence>
          {scrollProgress >= 0.2 && showHighAcceptances && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: showHighAcceptances ? 0 : 0.5 }} key='feeders' className="grid grid-cols-2 gap-3 mt-4">
            {admissionsData.slice(0, 10).map((school, i) => (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (0.1 * i) + 0.3 }} className="" key={i}>
                <div className="text-lg font-semibold">{school.name}</div>
                <div className="flex gap-2 text-base">
                  <div className="text-stone-500 ">{school.nationalAcceptanceRate}% national</div>
                  &middot;
                  <div>{school.acceptedStudents}/{school.appliedStudents}</div>
                  &middot;
                  <div className="flex items-end gap-2">
                    <div className="">{school.localAcceptanceRate}%</div> 
                    <FeederStatus local={school.localAcceptanceRate} national={school.nationalAcceptanceRate} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>}
          {scrollProgress >= 0.2 && !showHighAcceptances && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: !showHighAcceptances ? 0 : 0.5 }} key='nonfeeders' className="grid grid-cols-2 gap-3 mt-4">
            {admissionsData.slice(19).reverse().map((school, i) => (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (0.1 * i) + 0.3 }} className="" key={i}>
                <div className="text-lg font-semibold">{school.name}</div>
                <div className="flex gap-2 text-base">
                  <div className="text-stone-500 ">{school.nationalAcceptanceRate}% national</div>
                  &middot;
                  <div>{school.acceptedStudents}/{school.appliedStudents}</div>
                  &middot;
                  <div className="flex items-end gap-2">
                    <div className="">{school.localAcceptanceRate}%</div> 
                    <FeederStatus local={school.localAcceptanceRate} national={school.nationalAcceptanceRate} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>}
        </AnimatePresence>
        <button onClick={() => setShowHighAcceptances(!showHighAcceptances)} className="mt-4 py-2 w-full bg-[#0D3127] font-normal text-white rounded-full ">Show {showHighAcceptances ? 'low acceptances' : 'high acceptances'}</button>
      </div>
    </div>
  )
}