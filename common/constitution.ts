// Types
enum ConstitutionTypes {
  GRADE = 0
}

enum ConstitutionGradeStates {
  STARTING = 0,
  VOTING = 1,
  CLOSED = 2
}

interface Constitution {
  id: number,
  name: string,
  description: string,
  owner: string,
  creationDate: string,
  userConstitution: UserConstitution[]
}

interface UserConstitution {
  user: string;
  joinDate: string;
}

// Requests
interface CreateConstitutionRequestBody {
  name: string,
  description: string,      // TODO : optional ?

  // TODO : implement,
  type: ConstitutionTypes,
  nSongs: number,
}

export type {
  Constitution,
  ConstitutionTypes,
  CreateConstitutionRequestBody,
  UserConstitution
};