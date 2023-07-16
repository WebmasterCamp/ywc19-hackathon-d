
interface useExpensesRatioParams {
    costBeforeBirth: number
    costBeforePrepreSchool: number
    costBeforePreSchool: number
    costBeforePrimarySchool: number
}

export const useExpensesRatio = ({ costBeforePrimarySchool, costBeforePrepreSchool, costBeforePreSchool, costBeforeBirth }: useExpensesRatioParams) => {

    const total = costBeforeBirth + costBeforePreSchool + costBeforePrepreSchool + costBeforePrimarySchool

    const priceBeforeBirth = costBeforeBirth / total
    const priceBeforePrepreSchool = costBeforePrepreSchool / total
    const priceBeforePreSchool = costBeforePreSchool / total
    const priceBeforePrimarySchool = costBeforePrimarySchool / total

    return {
        priceBeforeBirth,
        priceBeforePreSchool,
        priceBeforePrimarySchool,
        priceBeforePrepreSchool
    }
}