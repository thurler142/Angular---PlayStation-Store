import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CardAssinaturasComponent } from './components/card/card-assinaturas/card-assinaturas.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/not-found', pathMatch: 'full' }, // Redirecionamento padrão
  { path: 'home', component: HomeComponent },
  { path: 'assinaturas', component: CardAssinaturasComponent},
  { path: 'not-found', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
