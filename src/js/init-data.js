const initialData = {
    units: {
        'unit-0': { id: 'unit-0', text: 'unit with id zero'},
        'unit-1': { id: 'unit-1', text: 'unit with id one'},
        'unit-2': { id: 'unit-2', text: 'unit with id two'},
        'unit-3': { id: 'unit-3', text: 'unit with id three'},
        'unit-4': { id: 'unit-4', text: 'unit with id four'},
        'unit-5': { id: 'unit-5', text: 'unit with id five'},
        'unit-6': { id: 'unit-6', text: 'unit with id six'},
        'unit-7': { id: 'unit-7', text: 'unit with id seven'},
        'unit-8': { id: 'unit-8', text: 'unit with id eight'}
    },
    columns: {
        'col-0' : {
            colId: 'col-0',
            colName: 'col zero',
            unitIds: ['unit-0', 'unit-1', 'unit-2', 'unit-3']
        },
        'col-1' : {
            colId: 'col-1',
            colName: 'col one',
            unitIds: ['unit-4', 'unit-5', 'unit-6']
        },
        'col-2' : {
            colId: 'col-2',
            colName: 'col two',
            unitIds: ['unit-7', 'unit-8']
        }
    },
    columnOrder: ['col-0', 'col-1', 'col-2']
};

export default initialData;