import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import { Suspense, useState, useEffect } from "react";
import { ReactLenis } from 'lenis/react'
import { AnimatePresence, motion } from 'motion/react';
import FloatingCard from "./components/FloatingCard";
import { ScrollContext } from "./Contexts";
import T30AdmissionStats from "./components/T30Admissions";
import { FaArrowDown } from 'react-icons/fa6';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollPx / scrollHeight);
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <ReactLenis root>
      <ScrollContext.Provider value={scrollProgress}>
        <main className="overflow-hidden h-screen md:h-[500vh]">
          <section className="h-screen p-10 flex flex-col justify-center w-7/12">
            <h1 className="text-8xl pt-20 mb-6">College Admissions.</h1>
            <p className="text-lg">
              The culmination of not four, but for many students six years of effort, stress, and planning—college admissions often feel like the ultimate high school competition, especially at Boston Latin Academy. But how does the "college rat race" actually play out for BLA Dragons?
              <br /><br />
              Data visualization by Phaedra Sanon, BLA '25
              <br /><br />
              Scroll to continue <FaArrowDown className="ml-2 inline-block size-5 animate-bounce" />
            </p>
          </section>
          <section className="h-screen p-10 flex justify-between items-center">
            <div className="flex flex-col justify-center w-1/2">
              <h2 className="text-6xl">"Feeder" vs. "Anti-Feeder"</h2>
              <p className="text-base font-light">To classify past college results from BLA students, here's a table of the top 20 BLA students apply to (minus Ivy Leagues and other national T20s) and their national vs. BLA acceptance rates (as of 2024).
                <br /><br />
                <span className="flex flex-col text-sm">
                  <span className="text-stone-500 flex items-center gap-1 ">
                    <span className="bg-stone-500 size-2 rounded-full inline-block"></span>
                    National Acceptance Rate (%)</span>
                  <span>Accepted Students/Applied Students (BLA)</span>
                  <span className="flex items-end gap-4">
                    <span className="">BLA Acceptance Rate (%)</span> 
                    <span className="text-green-500"><span className="bg-green-500 size-2 rounded-full inline-block"></span> Difference (%)</span> 
                  </span>
                </span>
              </p>
              <T30AdmissionStats />
            </div>
            <div className="p-20 w-[45vw] translate-y-[25vh]">
              <AnimatePresence>
                {scrollProgress > 0.24 && <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="">
                  <FloatingCard className="size-full relative border-4 border-[#0D3127]">
                    <div className="absolute bg-[#0D3127] w-[5vw] -left-[5vw] h-1 rounded-full -z-10">
                      <div className="size-5 bg-[#0D3127] absolute left-0 -top-2 rounded-full"></div>
                    </div>
                    <div>These statistics largely come as no surprise, however there are some interesting insights from these results:</div>
                    <div className="mt-2">
                      BLA students tend to prefer to apply to schools in state, with <span className="font-bold bg-amber-200">23/30 schools (76.7%)</span> being in Massachusetts
                    </div>
                    <div className="mt-2">
                      The largest difference between publicly-posted and internal acceptance rates at BLA (excluding Northeastern) is located at <span className="bg-amber-200"><span className="font-bold">Penn State</span> (82%, up 26% from the national rate)</span>! This is particularly interesting because it's a public university in <span className="italic">Pennsylvania</span>, not Massachusetts.
                    </div>
                    <div className="mt-2">
                      Based on this data, it is <span className="bg-amber-200">SLIGHTLY easier to get into Northeastern (43%) than UMass Amherst (42%)</span> from BLA. It's only 1 percent, but it's nonetheless surprising given the fact that Northeastern is a private university, and it's posted acceptance rate is much lower than the one reflected here.
                    </div>
                  </FloatingCard>
                </motion.div>}
              </AnimatePresence>
            </div>
          </section>
          <section className="h-screen p-10 flex justify-between items-center">
            <div className="flex flex-col justify-center w-1/2 font-light">
              <h2 className="text-6xl">Class of 2025 Distribution</h2>
              <p className="text-base">Since the removal of nearly all honors courses from the BLA course catalog, there has instead been a shift towards permitting students to take more college-level AP coursework. However, this has resulted in gradually more competitive classes every year.</p>
              <div className="mt-8">
                <div className="big text-5xl font-bold">~1 in 4 students</div>
                <div className="text-xl italic">have a GPA of 4.0* or higher</div>
              </div>
              <div className="mt-8">
                Something beyond just the numbers, however, is the fact that the class of 2025 is the first class to have experienced the full effects of the COVID-19 pandemic. This has resulted in a significant shift in the way students learn and interact with each other, and has also resulted in a significant shift in the way students are evaluated by colleges. Additionally, the lowest GPA in the class of 2025 is a 1.67 (equating to a C-), which is the highest it has been in recent years.
              </div>
              <div className="mt-8 text-sm">
              *At BLA, class rank is determined based off of weighted GPA. GPA is explained in further detail on myBLA, another one of my projects!
              </div>
            </div>
            <div className="p-20 w-[45vw]">
              <AnimatePresence>
                {scrollProgress > 0.4 && <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 100, opacity: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="size-full">
                  <FloatingCard className="flex flex-col items-center justify-center border-4 border-[#0D3127]">
                    <div className="font-bold">Distribution of GPA & Class Rank</div>
                    <table>
                      <thead className="font-bold">
                        <tr>
                          <td className="pr-4">Decile</td>
                          <td>GPA</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1st</td>
                          <td>4.76 - 4.32</td>
                        </tr>
                        <tr>
                          <td>2nd</td>
                          <td>4.29 - 4.11</td>
                        </tr>
                        <tr>
                          <td>3rd</td>
                          <td>4.10 - 3.87</td>
                        </tr>
                        <tr>
                          <td>4th</td>
                          <td>3.85 - 3.64</td>
                        </tr>
                        <tr>
                          <td>5th</td>
                          <td>3.61 - 3.31</td>
                        </tr>
                        <tr>
                          <td>6th</td>
                          <td>3.30 - 3.05</td>
                        </tr>
                        <tr>
                          <td>7th</td>
                          <td>3.04 - 2.88</td>
                        </tr>
                        <tr>
                          <td>8th</td>
                          <td>2.87 - 2.61</td>
                        </tr>
                        <tr>
                          <td>9th</td>
                          <td>2.59 - 2.22</td>
                        </tr>
                        <tr>
                          <td>10th</td>
                          <td>2.20 - 1.67</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-4 italic text-center">Grade Distribution of the Class of 2025 from the 2024-2025 School Profile</div>
                  </FloatingCard>
                </motion.div>}
              </AnimatePresence>
            </div>
          </section>
          <section className="h-screen p-10">
            <div className="w-1/2">
              <h1 className="text-6xl">Standardized Testing</h1>
              <p>BLA, since long before we were awarded "CollegeBoard Honor Roll" in 2024, has invested heavily into the Collegeboard: mostly AP Classes, but more relevant, the SAT. Though some students do decide to take the ACT, BLA doesn't provide much support in alternative routes unaffiliated with the CollegeBoard.</p>
              <div className="mt-4">
                <div className="big text-5xl">419* scores reported by the Class of 2024</div>
                <div className="text-sm italic font-light">*This number is based off of the 2024-2025 School Profile, and includes retakes.</div>
              </div>
              <div className="mt-3">
                <div className="text-xl uppercase">Average score</div>
                <div className="big text-4xl">1110 <span className="big text-2xl">(552 reading, 558 math)</span></div>
                
              </div>
            </div>
          </section>
          <section className="h-screen p-10">
            <div className="w-1/2">
              <h1 className="text-6xl">Takeaways</h1>
              <p>The conclusions that can be drawn from this college admissions data is still indefinite; a lot of interesting questions regarding admissions at top-20 institutions are left unanswered, as well as unstandardized high schools makes it difficult to compare to the other two exam schools. However, this serves as a base point for additional discoveries.
                
                <br /><br />In the future, there will be more data added; in the meantime, this will make do due to a lack of graphs and such. Thank you for reading, and stay tuned for updates!</p>
            </div>
          </section>
          {/* 3D Scene */}
          <Canvas shadows className="!fixed top-0 left-0 z-[-1] !w-screen !h-screen">
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </main>
        <main className="md:hidden top-0 left-0 h-screen w-screen fixed z-50 bg-amber-100/50">
          {/* screen size is too small, issue warning to access on a larger screen */}
          <div className="h-screen flex items-center text-center justify-center">
            <div className="text-4xl text-[#0D3127]">Please access this site on a larger screen.</div>
          </div>
        </main>
      </ScrollContext.Provider>
    </ReactLenis>
  );
}

export default App;
