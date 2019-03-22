import '../css/style.css';
import React, {Component} from 'react';
import { DragDropContext, Draggable, Droppable, resetServerContext } from 'react-beautiful-dnd';

class Unit extends Component {
    render() {
        return (
            <Draggable draggableId={ this.props.unitId }
                       index={ this.props.index }
            >
                { provided => (
                    <div className="unit"
                         { ...provided.draggableProps }
                         { ...provided.dragHandleProps }
                        ref={ provided.innerRef }
                    >
                        { this.props.text }
                    </div>
                )}
            </Draggable>
        )
    }
}
class Column extends Component {
    render() {
        return (
            <div className={'column'}>
                <div className="column-title">
                    <h2>{ this.props.colName }</h2>
                </div>
                <Droppable droppableId={ this.props.colId } >
                    { provided => (
                        <div ref={ provided.innerRef }
                             { ...provided.droppableProps }
                        >
                            { this.props.units.map((unit, index) =>
                                (
                                    <Unit key={ unit['id'] }
                                          unitId={ unit['id'] }
                                          text={ unit['text'] }
                                          index={ index }
                                    />
                                )
                            )}
                            { provided.placeholder }
                        </div>
                    )}
                </Droppable>
            </div>
        )
    }
}

class DraggableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: this.props.initData.units,
            columns: this.props.initData.columns,
            columnOrder: this.props.initData.columnOrder
        };
    }
    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        // cases for doing nothing
        if (!destination) return;
        if (destination.droppableId === source.droppableId &&
        destination.index === source.index ) return;

    //    updating state after finishing drag
        let sourceCol = this.state.columns[source.droppableId];
        let destinationCol = this.state.columns[destination.droppableId];
        let transferedUnit = sourceCol.unitIds.splice(source.index, 1)[0];
        destinationCol.unitIds.splice(destination.index, 0, transferedUnit);
        let columns = this.state.columns;
        columns[source.droppableId] = sourceCol;
        columns[destination.droppableId] = destinationCol;
        this.setState({
            columns: columns
        })
    };
    render() {
        return (
            <div className={'columns-container'}>
                <DragDropContext
                    onDragEnd={ this.onDragEnd }
                >
                    {
                        this.state['columnOrder'].map(col => {
                            const column = this.state['columns'][col];
                            const units = column.unitIds.map(unitId => this.state.units[unitId]);
                            return (
                                <Column key={ col }
                                        colId={ col }
                                        colName={ column['colName'] }
                                        units={ units }
                                />
                            )
                        })
                    }
                </DragDropContext>
            </div>
        )
    }
}

export default DraggableList;