import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IEnseignant } from 'app/shared/model/enseignant.model';
import { EnseignantService } from './enseignant.service';
import { EnseignantDeleteDialogComponent } from './enseignant-delete-dialog.component';

@Component({
  selector: 'jhi-enseignant',
  templateUrl: './enseignant.component.html',
})
export class EnseignantComponent implements OnInit, OnDestroy {
  enseignants?: IEnseignant[];
  eventSubscriber?: Subscription;

  constructor(protected enseignantService: EnseignantService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.enseignantService.query().subscribe((res: HttpResponse<IEnseignant[]>) => (this.enseignants = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInEnseignants();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IEnseignant): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInEnseignants(): void {
    this.eventSubscriber = this.eventManager.subscribe('enseignantListModification', () => this.loadAll());
  }

  delete(enseignant: IEnseignant): void {
    const modalRef = this.modalService.open(EnseignantDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.enseignant = enseignant;
  }
}
