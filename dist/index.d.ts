export declare class Message {
    guid: string;
    dateEnvoi: string;
    dateAccuseReception: string;
    emetteur: TypeEmetteurDestinataire;
    destinataire: TypeEmetteurDestinataire;
    type: string;
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
export declare function postMessagePortail(msg: Message): void;
