import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charCheckPipe'
})
export class CharCheckPipePipe implements PipeTransform {

  transform(value: string): string {
    let formattedText : string = "";
    for (let char of value){
      if(char === 'i' || char === 'I'){
        formattedText += "<span class=\"is-i\">" + char + "</span>";
      } else if (char === 'l' || char === 'L'){
        formattedText += "<span class=\"is-l\">" + char + "</span>";
      } else {
        formattedText += char;
      }
    }
    return formattedText;
  }

}
