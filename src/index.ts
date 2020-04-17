export class Slave {
    type: TypeEmetteurDestinataire;
    elementHtmlIframe: HTMLIFrameElement;
};

export class Message {
    guid: string;
    dateEnvoi: string;
    dateAccuseReception: string;
    emetteur: TypeEmetteurDestinataire;
    destinataire: TypeEmetteurDestinataire;
    type: string;
    payload: any;

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

export enum TypeChannel {
    MASTER = 'MASTER',    
    SLAVE = 'SLAVE'
};

export class Channel {
    private _type: TypeEmetteurDestinataire;
    private _slaves?: Array<Slave>;

    constructor(type: TypeEmetteurDestinataire, callback: (message: Message ) => any, listSlaveElement?: Array<Slave>) {
        this._type = type;
        if (listSlaveElement) {
            this._slaves = listSlaveElement;
        }

        window.addEventListener('message', (event: MessageEvent) => {
                console.log("receive:", event);
            

                if (event.data.isAccuse) {
                    const accuse: AccuseReception = event.data;        
                    console.log(accuse);
                } else {
                    const msg: Message = event.data;

                    if (this._type === msg.destinataire) {
                        //Le message est pour moi j'execute la fonction de callback
                        callback(msg);
                        return;
                    } else {
                        //Le message n'est pas pour moi
                        //Je le redistribue
                        const slaveDestinataire = this._slaves.find(x => x.type === msg.destinataire);
                        if (slaveDestinataire) {
                            //J'ai bien un esclave qui correspond au destinataire du message
                            //Je lui passe le message

                            console.log('slaveDestinataire.elementHtmlIframe.src', slaveDestinataire.elementHtmlIframe.src.replace('65000', '65008'));
                            slaveDestinataire.elementHtmlIframe.contentWindow.postMessage(msg, slaveDestinataire.elementHtmlIframe.src.replace('65000', '65008') /*'*' document.referrer*/);
                           
                            
                        } else {
                            //J'ai pas d'esclave correspondant
                            //TODO je fais quoi

                        }
                    }
                }
            },
            false
        );
    }

    get slaves() {
        return this._slaves;
    }

    publish(message: (Message | AccuseReception)) {
        console.log('publish message', message);
        window.top.postMessage(message, document.referrer);
    }
   
};




    export function postMessagePortail(msg: Message) {
    console.log('postMessagePortail');
    console.log(msg);
    console.log(document.referrer);
    parent.postMessage(msg, document.referrer);
};