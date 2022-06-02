import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FAQPage implements OnInit {
  
  questionName: any = ''; // Entered Text
  questions =[
    {label:"SteelTitan", description:"Em que ano é que foi criado a empresa?", image:""},
    {label:"IronMerc", description:"Quando é que vão expandir a aplicação?", image:""},
    {label:"CrashTV", description:"Como é que surgiu a ideia?", image:""},
  ];
  constructor() { }

  ngOnInit() {
  }

  // addTask Function
// First we check if the text is entered or not in input box by verifying if length > 0
// If length is greater than 0, then only we add taskName to taskList array
// After adding we reset the taskName
addQuestion() {
  if (this.questionName.length > 0) {
  let task = this.questionName;
  this.questions.push({label:"UserName", description:task, image:""});
  this.questionName = '';
  console.log(this.questions);
  }
}

  

}
