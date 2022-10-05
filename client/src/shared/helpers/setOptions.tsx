import { ReactNode } from "react"
import { TFilter } from "./options"

export function setOptions<T extends Array<TFilter>>(options: T): ReactNode {
  return options.map((option, index) => {
    return (
      <option key={index} value={option.value}>
        {option.title}
      </option>
    )
  })
}