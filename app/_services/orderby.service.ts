import { Pipe, PipeTransform } from "@angular/core";
@Pipe({  name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
    transform(records: Array<any>, args?: any): any {
         records.sort(function(a, b){
            var x = (a[args.property] == 'unknown') ? 0 : a[args.property] ;
            var y = (b[args.property] == 'unknown') ? 0 : b[args.property] ;
            return ((x - y));
        });
        return records; 
    };
}
