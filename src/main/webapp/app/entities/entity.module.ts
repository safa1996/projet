import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.ProjetStudentModule),
      },
      {
        path: 'course',
        loadChildren: () => import('./course/course.module').then(m => m.ProjetCourseModule),
      },
      {
        path: 'enseignant',
        loadChildren: () => import('./enseignant/enseignant.module').then(m => m.ProjetEnseignantModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class ProjetEntityModule {}
