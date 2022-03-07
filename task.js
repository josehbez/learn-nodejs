const LibRealm = require("./realm")

let dt = new Date(Date.now());
let today = new Date(`${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`)


async function Today() {
    let realm = await LibRealm.getRealm();
    await realm.subscriptions.update((mutableSubscriptions) => {
        mutableSubscriptions.add(realm.objects('task').filtered('due==$0 AND deleted_at=null ', today, {
            name: "task-today"
        }))
    })
    console.log("Task today: #", realm.objects('task').length)

}
async function Overdue() {
    let realm = await LibRealm.getRealm();
    await realm.subscriptions.update((mutableSubscriptions) => {
        mutableSubscriptions.add(realm.objects('task').filtered('due<$0', today, {
            name: "task-overdue"
        }))
    })
    console.log("Task Overdue: #", realm.objects('task').length)
}

async function Next() {
    let realm = await LibRealm.getRealm();
    await realm.subscriptions.update((mutableSubscriptions) => {
        mutableSubscriptions.add(realm.objects('task').filtered('due>$0', today, {
            name: "task-next"
        }))
    })
    console.log("Task Next: #", realm.objects('task').length)
}
exports.Today = Today;
exports.Overdue = Overdue;
exports.Next = Next;