import { useAtom } from "jotai"
import { useMemo } from "react"
import { durationBeforeBirthByMonth, durationBeforePrePreSchoolByMonth, durationBeforePreSchoolByMonth, durationBeforePrimarySchoolByMonth } from "~/atoms/durationPerPhase"


export const usePhaseLengthRatio = () => {

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


    return {
        beforeBirthDurationByPercent,
        beforePrepreSchoolByPercent,
        beforePreschoolByPrecent,
        beforePrimarySchoolByPrecent
    }
}