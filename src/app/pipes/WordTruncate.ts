import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'wordCount'
})
export class WordTruncate implements PipeTransform {

    transform(value: string, arg?: string) : string {
        let limit = arg? parseInt(arg, 10): 10;
        let trails = "....";

        return value.length > limit ? value.substring(0, limit)+trails : value;
    }

}