import { EventEmitter, Injectable, OnInit } from '@angular/core';

@Injectable()
export class FirstService implements OnInit {
    
    ngOnInit() {
        console.log("the first service has been invoked");
    }


    datas = [5655, 1, 2, 3, 4];

    add(x: number, y: number) {
        return x + y;
    }

    getStandardAddress(line: string, city: string, state:string, zipcode:string) {
        return line + ', ' + city + ', ' + state + ' ,' + zipcode;
    }

    getDisplayGender(gender) {
        if (gender == 'M') {
            return 'Male'
        } else if (gender == 'F') {
            return "Female"
        } else {
            return "Not to specific"
        }
    }
} 