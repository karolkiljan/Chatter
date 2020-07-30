import firebase from 'firebase'
import data from './AccessFile'
class Fire {
    constructor() {
        this.init()
        this.observeAuth()
    }
    observeAuth = () =>
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

    onAuthStateChanged = user => {
        if (!user) {
            try {
                firebase.auth().signInAnonymously()
            } catch ({message}) {
                alert(message)
            }
        }
    }
    init = () => firebase.initializeApp(data)

    get ref() {
        return firebase.database().ref('messages')
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }

    on = callback => (
        this.ref.limitToLast(20).on('child_added', snapshot => callback(this.parse(snapshot)))
    )

    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val()
        const { key: _id } = snapshot

        const timestamp = new Date(numberStamp)

        const message = {
            _id,
            timestamp,
            text,
            user,
        }
        return message
    }

    off() {
        this.ref.off()
    }


    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP
    }

    send = messages => {
        for ( let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i]

            const message = {
                text,
                user,
                timestamp: this.timestamp,
            }
            this.append(message)
        }
    }

    append = message => this.ref.push(message)

}

Fire.shared = new Fire()
export default Fire