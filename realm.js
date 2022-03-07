const Realm = require("realm");
const { schemas } = require("./schemas/index");


let realm;

const appRealm = new Realm.App({
    id: "realm-flexible-sync-qasof",
    timeout: 10000,
});

async function openRealm() {
    try {
        // Auth 
        const credentials = Realm.Credentials.anonymous();
        await appRealm.logIn(credentials).then(data => {
            console.log(`login ok `);
        }).catch(error => {
            console.log(`login error: `, error.message);
        });
        // Open Realm 
        realm = await Realm.open({
            schema: Object.entries(schemas).map((e) => (e[1])),
            sync: {
                user: appRealm.currentUser,
                flexible: true,
            },
        });

        /*
                //console.log(userSchema)
                let configRealm = ;
                // https://docs.mongodb.com/realm/sdk/node/examples/open-and-close-a-realm/#open-a-flexible-synced-realm
                

                await realm.subscriptions.update((mutableSubscriptions) => {
                    mutableSubscriptions.add(realm.objects('user').filtered('_partition_key="jbautista@grainchain.io" ', {
                        name: "user-query2"
                    }))


                })

                await realm.subscriptions.update((mutableSubscriptions) => {
                    mutableSubscriptions.removeByName('user-query2')
                })

                console.log(realm.objects('user').length)*/
    } catch (error) {
        console.error(error);
    }
    return realm;
}

async function closeRealm() {
    if (realm != undefined) {
        await realm.close();
    }
}

async function getRealm() {
    return realm === undefined ? await openRealm() : realm;
}


exports.getRealm = getRealm;
exports.closeRealm = closeRealm;
exports.openRealm = openRealm;