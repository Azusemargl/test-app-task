export const rules = {
   required: (message: string) => ({
      required: true,
      message: message
   }),
   min: (min: number, message: string) => ({
      min: min,
      message: message
   }),
   max: (max: number, message: string) => ({
      max: max,
      message: message
   }),
}