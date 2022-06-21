import { initializeApp } from 'firebase/app'
// import {getAuth} from 'firebase/auth'
import secret from './secrets'
import {getFirestore} from 'firebase/firestore'
import {getDatabase } from 'firebase/database'
import {getStorage} from 'firebase/storage'

export const app = initializeApp({
    secret , 
    projectId : secret.projectId
});
// export let auth = getAuth(app)


export let storage = getStorage(app)

export let database = getDatabase(app)

export let db = getFirestore(app)