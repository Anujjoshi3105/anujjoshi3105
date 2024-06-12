import { skills } from '@/helper/data';
import Template from '@/components/Template';

const Skill = () => {
      return (
        <Template title="Skills" subtitle="My Abilities" id="skill">      
            <div className="flex justify-center items-start w-full gap-8 flex-wrap text-center">
            {
                skills.map((skill,index)=>{
                    return (
                        <div key={index} className="lg:w-[calc(33%-2rem)] md:w-[calc(50%-1rem)] w-full flex justify-start md:items-center items-start flex-col gap-6 mb-4">
                            <h3 className="text-xl lg:texl-2xl color-theme font-bold capitalize">{skill.title}</h3>
                            <div className="flex justify-start items-start gap-6 sm:gap-2 flex-wrap">
                                {
                                    skill.skill.map((e,j)=>(
                                        <div key={j} className="group text-center md:w-[calc(50%-0.5rem)] lg:w-[calc(33%-1rem)] sm:flex sm:justify-start items-center sm:flex-col gap-2 w-auto hover:scale-105 transition-all delay-150 font-semibold">
                                            <div className="sm:p-2.5 p-1 flex justify-center items-center rounded-full relative overflow-hidden group-hover:[&::after]:absolute group-hover:[&::after]:top-0 group-hover:[&::after]:w-full group-hover:[&::after]:h-2.5 group-hover:[&::after]:content-[''] group-hover:[&::after]:bg-theme group-hover:[&::after]:animate-animateIcon">
                                                <span className="text-xl sm:text-2xl mx-auto">{e.icon}</span>
                                            </div>
                                            <h5 className='group-hover:text-theme w-full sm:text-md text-sm text-nowrap'>{e.name}</h5>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </Template>
  )
}

export default Skill