const initialData = {
    units: {
        'unit-0': { id: 'unit-0', importance: 0, text: 'unit with id zero'},
        'unit-1': { id: 'unit-1', importance: 0, text: 'unit with id one'},
        'unit-2': { id: 'unit-2', importance: 0, text: 'unit with id two'},
        'unit-3': { id: 'unit-3', importance: 0, text: 'unit with id three'},
        'unit-4': { id: 'unit-4', importance: 0, text: 'unit with id four'},
        'unit-5': { id: 'unit-5', importance: 0, text: 'unit with id five'},
        'unit-6': { id: 'unit-6', importance: 0, text: 'unit with id six'},
        'unit-7': { id: 'unit-7', importance: 0, text: 'unit with id seven'},
        'unit-8': { id: 'unit-8', importance: 0, text: 'unit with id eight'}
    },
    columns: {
        'plans' : {
            colId: 'plans',
            colName: 'Plans',
            unitIds: ['unit-0', 'unit-1', 'unit-2', 'unit-3']
        },
        'progress' : {
            colId: 'progress',
            colName: 'In progress',
            unitIds: ['unit-4', 'unit-5', 'unit-6']
        },
        'done' : {
            colId: 'done',
            colName: 'Done',
            unitIds: ['unit-7', 'unit-8']
        }
    },
    columnOrder: ['plans', 'progress', 'done']
};

export default initialData;