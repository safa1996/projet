import { ICourse } from 'app/shared/model/course.model';

export interface IEnseignant {
  id?: number;
  name?: string;
  course?: ICourse;
}

export class Enseignant implements IEnseignant {
  constructor(public id?: number, public name?: string, public course?: ICourse) {}
}
