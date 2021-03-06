import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notes-app',
    templateUrl: 'notes.component.html',
    styleUrls: ['notes.component.css']
})

export class NotesComponent implements OnInit {
    public notes:NoteDetail[]=[];

    constructor() { 

    }

    public addNote(){//aqui se crean las nuevas notas
        let color=this.getColor();//llamo la aplicacion para obtener un color random
        this.notes.push(new NoteDetail(color));
    }

    private getColor(){
        let initial ='012345';
        let letters = '0123456789DEF'; //de aqui saco los valores para el color, quite algunos numeros y letras para que contrastaran con el color blanco de las letras
        let color = '#';
        color += initial[Math.floor(Math.random() * 6)]; //obtengo el valor inicial, estos para que sean obscuros

        for (let i = 0; i < 5; i++) {
            color += letters[Math.floor(Math.random() * 13)]; //obtengo una posicion rango dentro de las 13 opciones que tengo
        }
        return color; //regreso el color
    }


    public deleteNote(index){
        this.notes.splice(index, 1); //borro la nota con la ayuda del index
    }

    public noteChanged(index){ /// funcion para mostrar lo que ha cambiado de la nota
        console.clear();
        console.log(this.notes[index]);
    }


    ngOnInit() { }
}

export class NoteDetail{ /// clase para crear nuevas notas
    constructor(public color:string){ //el color tiene que defenirse al momento de crear la nota

    }
    public name:string;
    public value:string;
}