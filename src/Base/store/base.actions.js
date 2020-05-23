import { db } from "@/plugins/firebase";
import { bus } from '@/main'

const actions = {
    subscribe({ commit }, email) {
        const ref = db.collection("subscriptions").doc()
        ref
            .set({
                id: ref.id,
                email: email,
                timestamp: new Date()
            }).then(() => {
                bus.$emit("show-snackbar", "You have been successfully subscribed!");
            })
    }
}

export default actions