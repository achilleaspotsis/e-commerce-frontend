import { Directive, HostListener } from '@angular/core';
import { NavigationService } from '../services/general/navigation.service';

@Directive({
    selector: '[back]'
})
export class BackDirective {

    constructor(
        private navigationService: NavigationService
    ) { }

    @HostListener('click')
    onClick(): void {
        this.navigationService.back();
    }

}
