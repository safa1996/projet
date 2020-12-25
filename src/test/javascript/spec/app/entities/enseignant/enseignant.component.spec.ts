import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ProjetTestModule } from '../../../test.module';
import { EnseignantComponent } from 'app/entities/enseignant/enseignant.component';
import { EnseignantService } from 'app/entities/enseignant/enseignant.service';
import { Enseignant } from 'app/shared/model/enseignant.model';

describe('Component Tests', () => {
  describe('Enseignant Management Component', () => {
    let comp: EnseignantComponent;
    let fixture: ComponentFixture<EnseignantComponent>;
    let service: EnseignantService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ProjetTestModule],
        declarations: [EnseignantComponent],
      })
        .overrideTemplate(EnseignantComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(EnseignantComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(EnseignantService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Enseignant(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.enseignants && comp.enseignants[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
