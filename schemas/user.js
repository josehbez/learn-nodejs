const userSchema = {
    name: 'user',
    properties: {
        _id: 'objectId?',
        deleted_at: 'date?',
        emails: 'string?',
        first_name: 'string?',
        last_name: 'string?',
        registered_at: 'date?',
    },
    primaryKey: '_id',
};


exports.userSchema = userSchema;