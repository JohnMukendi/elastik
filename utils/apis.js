import { useFireBase } from "../lib/firebase";
import {getFirestore,collection,getDocs} from 'firebase/firestore/lite'


export const getUnderTakings = async (db)=>{
    const undertakingsCollection = collection(db,'Undertakings') 
    try {
        const tasksSnapShot = await getDocs(undertakingsCollection)
        const tasks = tasksSnapShot.docs.map(task=>task.data())
        return [tasks,null]
    } catch (error) {
        return [null,err]
    }
}
