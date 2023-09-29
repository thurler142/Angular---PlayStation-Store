import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CardAssinaturasComponent } from './components/card/card-assinaturas/card-assinaturas.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirecionamento padrão
  { path: 'home', component: HomeComponent },
  { path: 'assinaturas', component: CardAssinaturasComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
