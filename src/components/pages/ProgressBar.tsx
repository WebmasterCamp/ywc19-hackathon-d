import { useAtom } from "jotai"
import { useMemo } from "react"
import { durationBeforeBirthByMonth, durationBeforePrePreSchoolByMonth, durationBeforePreSchoolByMonth, durationBeforePrimarySchoolByMonth } from "~/atoms/durationPerPhase"

const ProgressBar = () => {

    const [durationBeforeBirth] = useAtom(durationBeforeBirthByMonth)
    const [durationBeforePrepreSchool] = useAtom(durationBeforePrePreSchoolByMonth)
    const [durationBeforePreSchool] = useAtom(durationBeforePreSchoolByMonth)
    const [durationBeforePrimarySchool] = useAtom(durationBeforePrimarySchoolByMonth)

    const totalTime = useMemo(() => {
        return durationBeforeBirth + durationBeforePrepreSchool + durationBeforePreSchool + durationBeforePrimarySchool
    }, [durationBeforeBirth, durationBeforePrepreSchool, durationBeforePreSchool, durationBeforePrimarySchool])

    const beforeBirthDurationByPercent = useMemo(() => {
        return durationBeforeBirth / totalTime * 100
    }, [durationBeforeBirth, totalTime])
    const beforePrepreSchoolByPercent = useMemo(() => {
        return durationBeforePrepreSchool / totalTime * 100
    }, [durationBeforePrepreSchool, totalTime])
    const beforePreschoolByPrecent = useMemo(() => {
        return durationBeforePreSchool / totalTime * 100
    }, [durationBeforePreSchool, totalTime])
    const beforePrimarySchoolByPrecent = useMemo(() => {
        return durationBeforePrimarySchool / totalTime * 100
    }, [durationBeforePrimarySchool, totalTime])

    return (
        <div className="flex flex-col gap-y-8">
            {/* Mark */}
            <div className="flex flex-col gap-y-8">
                <div className="w-full h-0.5 flex">
                    <div style={{
                        width: `${beforeBirthDurationByPercent}%`
                    }} className="h-full bg-black"></div>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full w-2 h-2"></div>
                        <h5 className="w-auto -inset-x-20 text-center inline-block absolute left-1/2 transform -translate-x-1/2 -top-8">
                            คลอดลูก
                        </h5>
                    </div>
                    {/* prepreschool */}
                    <div style={{
                        width: `${beforePrepreSchoolByPercent}%`
                    }} className="h-full bg-black"></div>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full w-2 h-2"></div>
                        <h5 className="w-auto -inset-x-48 text-center inline-block absolute left-1/2 transform -translate-x-1/2 -top-8">
                            เตรียมอนุบาล
                        </h5>
                    </div>
                    {/* preschool */}
                    <div style={{
                        width: `${beforePreschoolByPrecent}%`
                    }} className="h-full bg-black"></div>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full w-2 h-2"></div>
                        <h5 className="w-auto -inset-x-48 text-center inline-block absolute left-1/2 transform -translate-x-1/2 -top-8">
                            อนุบาล
                        </h5>
                    </div>
                    {/* primary school */}
                    <div style={{
                        width: `${beforePrimarySchoolByPrecent}%`
                    }} className="h-full bg-black"></div>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full w-2 h-2"></div>
                        <h5 className="w-auto -inset-x-48 text-center inline-block absolute left-1/2 transform -translate-x-1/2 -top-8">
                            ประถมศึกษา
                        </h5>
                    </div>
                </div>



            </div>


            {/* progress bar */}
            <div className="w-full h-10 bg-cyan-200 relative text-white font-bold">
                <div style={{
                    width: `${beforeBirthDurationByPercent}%`
                }} className={`text-center inline-block w-[${beforeBirthDurationByPercent * 100}%] bg-cyan-700 h-full relative`}>
                    <div className="grid place-items-center absolute inset-0" >
                        <h1>200 บาทต่อเดือน</h1>
                    </div>
                </div>
                <div style={{
                    width: `${beforePrepreSchoolByPercent}%`
                }} className={`text-center inline-block bg-cyan-500 h-full relative`}></div>
                <div style={{
                    width: `${beforePreschoolByPrecent}%`
                }} className={`text-center inline-block bg-cyan-400 h-full relative`}></div>
                <div style={{
                    width: `${beforePrimarySchoolByPrecent}%`
                }} className={`text-center inline-block bg-cyan-600 h-full relative`}></div>
            </div></div>
    )
}

export default ProgressBar