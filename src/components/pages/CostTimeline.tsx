import { useExpensesRatio } from "../Hooks/useExpensesRatio"
import { usePhaseLengthRatio } from "../Hooks/usePhaseLengthRatio"

const CostTimeline = () => {

    const { beforeBirthDurationByPercent, beforePrepreSchoolByPercent, beforePreschoolByPrecent, beforePrimarySchoolByPrecent } = usePhaseLengthRatio()
    const { priceBeforeBirth, priceBeforePreSchool, priceBeforePrepreSchool, priceBeforePrimarySchool } = useExpensesRatio({
        costBeforeBirth: 10000,
        costBeforePrepreSchool: 10000,
        costBeforePreSchool: 10000,
        costBeforePrimarySchool: 10000,
    })

    return (
        <div className="flex flex-col gap-y-8">
            {/* Histrogram */}
            <div className="w-full flex items-end mb-8">
                {/* birth */}
                <div style={{
                    width: `${beforeBirthDurationByPercent}%`
                }} className="flex justify-center">
                    <div className="h-48 flex flex-col-reverse justify-center items-end">
                        <div style={{
                            height: `${20}%`
                        }} className="bg-yellow-400 w-24 relative"></div>
                        <div style={{
                            height: `${40}%`
                        }} className="bg-yellow-300 w-24 relative"></div>
                        <div style={{
                            height: `${40}%`
                        }} className="bg-yellow-200 w-24 relative"></div>
                    </div>

                </div>
                {/* prepreschool */}
                <div style={{
                    width: `${beforePrepreSchoolByPercent}%`
                }} className="flex justify-center">
                    <div className="h-80 flex flex-col-reverse justify-center items-end">
                        <div style={{
                            height: `${80}%`
                        }} className="bg-amber-300 w-24 relative"></div>
                        <div style={{
                            height: `${20}%`
                        }} className="bg-yellow-200 w-24 relative"></div>
                    </div>
                </div>
                {/* preschool */}
                <div style={{
                    width: `${beforePreschoolByPrecent}%`
                }} className="flex justify-center">
                    <div className="h-56 flex flex-col-reverse justify-center items-end">
                        <div style={{
                            height: `${60}%`
                        }} className="bg-amber-300 w-24 relative"></div>
                        <div style={{
                            height: `${40}%`
                        }} className="bg-yellow-200 w-24 relative"></div>
                    </div>
                </div>
                {/* primary */}
                <div style={{
                    width: `${beforePrimarySchoolByPrecent}%`
                }} className="flex justify-center">
                    <div className="h-72 flex flex-col-reverse justify-center items-end">
                        <div style={{
                            height: `${100}%`
                        }} className="bg-yellow-200 w-24 relative"></div>
                    </div>
                </div>
            </div>

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
            </div></div >
    )
}

export default CostTimeline