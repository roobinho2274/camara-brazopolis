import { Routes} from '@angular/router';

export const pageRoutes: Routes = [
    {
        path: '',
        title: 'Home da página',
        loadComponent: () => import('./home/home.component'),
    },
    {
        path: 'historia',
        title: 'História da Câmara',
        loadComponent: () => import('./historia/historia.component'),
    },
    {
        path: 'licitacoes',
        title: 'Licitações e processos',
        loadComponent: () => import('./licitacoes/licitacoes.component'),
    },
    {
        path: 'arquivos',
        title: 'Arquivos da Câmara',
        loadComponent: () => import('./arquivos/arquivos.component'),
    },
];
