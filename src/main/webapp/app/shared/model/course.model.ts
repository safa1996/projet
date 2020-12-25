import { IStudent } from 'app/shared/model/student.model';
import { IEnseignant } from 'app/shared/model/enseignant.model';

export interface ICourse {
  id?: number;
  name?: string;
  students?: IStudent[];
  enseignants?: IEnseignant[];
}

export class Course implements ICourse {
  constructor(public id?: number, public name?: string, public students?: IStudent[], public enseignants?: IEnseignant[]) {}
}
