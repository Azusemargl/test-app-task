import { EditTypeNames } from "../models/IContacts"

export const validator = {
   name: (value: string, setError: (value: EditTypeNames | "") => void, setter: (value: string) => void, type: EditTypeNames) => {
      const nameReg = /^[a-zA-zа-яА-я- ]+$/

      if (!nameReg.test(value) || typeof value === "number" || value.length > 14) setError(type)
      else setError("")

      setter(value)
   },
   email: (value: string, setError: (value: EditTypeNames | "") => void, setter: (value: string) => void, type: EditTypeNames) => {
      if (!value.includes("@") || value.length > 20) setError(type)
      else setError("")

      setter(value)
   },
   phone: (value: string, setError: (value: EditTypeNames | "") => void, setter: (value: string) => void, type: EditTypeNames) => {
      const phoneReg = /^[0-9-+() ]+$/
      let phoneNumber = value.replace(/[^\d]/g, '')

      if (!phoneReg.test(value) || phoneNumber.length !== 11) setError(type)
      else setError("")

      setter(value)
   }
}