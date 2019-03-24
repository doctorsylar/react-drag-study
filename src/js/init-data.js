const initialData = {
    units: [
        { id: 'unit-0', importance: 0, continuous: false, text: 'unit with id zero unit with id zero unit with id zero'},
        { id: 'unit-1', importance: 1, continuous: false, text: 'unit with id one unit with id one'},
        { id: 'unit-2', importance: 2, continuous: true, text: 'unit with id two'},
        { id: 'unit-3', importance: 0, continuous: true, text: 'unit with id three'},
        { id: 'unit-4', importance: 2, continuous: true, text: 'unit with id four'},
        { id: 'unit-5', importance: 0, continuous: false, text: 'unit with id five'},
        { id: 'unit-6', importance: 2, continuous: false, text: 'unit with id six'},
        { id: 'unit-7', importance: 1, continuous: false, text: 'unit with id seven'},
        { id: 'unit-8', importance: 0, continuous: false, text: 'unit with id eight'}
    ],
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