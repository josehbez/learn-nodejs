const taskSchema = {
    name: 'task',
    properties: {
        _id: 'objectId?',
        deleted_at: 'date?',
        description: 'string?',
        due: 'date?',
        name: 'string?',
        registered_at: 'date?',
    },
    primaryKey: '_id',
};

exports.taskSchema = taskSchema;