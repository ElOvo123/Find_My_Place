import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barreirense',
  templateUrl: './barreirense.page.html',
  styleUrls: ['./barreirense.page.scss'],
})
export class BarreirensePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public news =[
    {title:"Ginásio Sede (F. C. Barreirense)", subtitle:"Desde 1911", description:"O Futebol Clube Barreirense é uma instituição desportiva portuguesa fundada a 11 de Abril de 1911. As suas modalidades principais são o futebol e basquetebol, mas o clube desenvolve igualmente as modalidades de futsal, ginástica, xadrez, kickboxing, pool português e natação. O clube tem um grande historial em Portugal, sendo ainda hoje o 15º clube com mais presenças no escalão máximo do futebol português e um dos clubes com mais jogos disputados na Taça de Portugal. No basquetebol, tem no seu palmarés 2 Campeonatos Nacionais e 6 Taças de Portugal. Em ambas as modalidades, o clube já representou Portugal em competições europeias. Ao nível das camadas jovens, o clube é conhecido como um formador de grandes talentos nas várias modalidades. Em 2011, o Futebol Clube Barreirense celebrou o seu primeiro centenário.", image:"https://cms.infoportugal.info/media/fotos/final/Barreiro/BRR6971.jpg"}
  ]
}
