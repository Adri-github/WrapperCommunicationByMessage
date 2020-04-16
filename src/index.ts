export class Message {
    guid: string;
    dateEnvoi: string;
    dateAccuseReception: string;
    emetteur: TypeEmetteurDestinataire;
    destinataire: TypeEmetteurDestinataire;
    type: string;

    constructor() {
        const u = Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16);
        this.guid = [u.substr(0, 8), u.substr(8, 4), '4000-8' + u.substr(13, 3), u.substr(16, 12)].join('-');
        const d = new Date();
        this.dateEnvoi = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ':' + d.getMilliseconds();
    }
};

export class AccuseReception {
    guid: string;
    dateAccuseReception: string;
    isAccuse: boolean;
    constructor(guid: string) {
        this.guid = guid;
        this.isAccuse = true;
        const d = new Date();
        this.dateAccuseReception = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ':' + d.getMilliseconds();
    }
};

export enum TypeEmetteurDestinataire {
    PORTAIL = 'PORTAIL',
    DESMOS = 'DESMOS',
    MEDAPLIX = 'MEDAPLIX'
};

export function postMessagePortail(msg: Message) {
    console.log('postMessagePortail');
    console.log(msg);
    console.log(document.referrer);
    parent.postMessage(msg, document.referrer);
};
