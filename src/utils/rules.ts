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
   email: (message: string) => ({
      pattern: /\S+@\S+\.\S+/,
      message: message
   }),
   phone: (message: string) => ({
      pattern: /^[0-9-+() ]+$/,
      message: message
   }),
}