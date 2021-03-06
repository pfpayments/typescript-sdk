'use strict';


class TaxCreate {

        /**
        * 
        */
    'rate': number;

        /**
        * 
        */
    'title': string;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "rate",
        "baseName": "rate",
        "type": "number"
        },
        
        {
        "name": "title",
        "baseName": "title",
        "type": "string"
        }        
    ];

    static getAttributeTypeMap() {
        return TaxCreate.attributeTypeMap;
    }
}

export { TaxCreate }
