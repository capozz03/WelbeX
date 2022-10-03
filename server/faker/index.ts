import { faker } from '@faker-js/faker'
import { IUsers } from '../mockdata'

const { datatype, name } = faker

export function createRandomUser(): IUsers {
  return {
    id: datatype.uuid(),
    username: name.fullName(),
  }
}
