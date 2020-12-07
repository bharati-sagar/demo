import { Component } from '@angular/core';

@Component({

    selector:"ptab",
    templateUrl:'./ptab.component.html',
    styleUrls:['./ptab.component.css']


})
export class PtabComponent{

name:string="bharati";
sal=23654
flag=false;
parr=[{id:123,name:"Navnath",desg:"Mgr",dept:"SLV"},
{id:124,name:"Tabbu",desg:"QA",dept:"production"},
{id:125,name:"Lucky",desg:"Propresor",dept:"Biochem"},
{id:126,name:"Priya",desg:"Programmer",dept:"pwd"}];

flag1=false;
p={id:126,name:"Vishal",desg:"QA",dept:"desigining"};
changeFlag(){
    this.flag=!this.flag;


}

}