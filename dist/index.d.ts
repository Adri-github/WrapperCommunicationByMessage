export declare class Slave {
    type: TypeEmetteurDestinataire;
    elementHtmlIframe: HTMLIFrameElement;
}
export declare class Message {
    guid: string;
    dateEnvoi: string;
    dateAccuseReception: string;
    emetteur: TypeEmetteurDestinataire;
    destinataire: TypeEmetteurDestinataire;
    type: string;
    payload: any;
    constructor();
}
export declare class AccuseReception {
    guid: string;
    dateAccuseReception: string;
    isAccuse: boolean;
    constructor(guid: string);
}
export declare enum TypeEmetteurDestinataire {
    PORTAIL = "PORTAIL",
    DESMOS = "DESMOS",
    MEDAPLIX = "MEDAPLIX"
}
export declare enum TypeChannel {
    MASTER = "MASTER",
    SLAVE = "SLAVE"
}
export declare class Channel {
    private _type;
    private _slaves?;
    private _url;
    constructor(type: TypeEmetteurDestinataire, callback: (message: Message) => any, listSlaveElement?: Array<Slave>);
    get slaves(): Slave[];
    publish(message: (Message | AccuseReception)): void;
}
export declare function postMessagePortail(msg: Message): void;
