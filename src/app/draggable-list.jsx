import '../css/style.css';
import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable, resetServerContext } from 'react-beautiful-dnd';

class Unit extends Component {
    render() {
        let importance;
        switch (this.props.importance) {
            case 0: importance = ' not-important';
                break;
            case 1: importance = ' important';
                break;
            case 2: importance = ' extra-important';
                break;
        }
        return (
            <Draggable draggableId={ this.props.unitId }
                       index={ this.props.index }
            >
                { (provided, snapshot) => (
                    <div className={ 'unit'
                        .concat(snapshot.isDragging ? ' dragging' : '')
                        .concat(importance) }
                         { ...provided.draggableProps }
                         { ...provided.dragHandleProps }
                        ref={ provided.innerRef }
                    >
                        {/*<div className="task-importance-indicator"></div>*/}
                        <div className="task-text-container">
                            <p className="task-text">{ this.props.text }</p>
                            <div className="task-duration">
                                { this.props.continuous ? 'continuous' : 'done-once' }
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
        )
    }
}
class UnitList extends Component {
    shouldComponentUpdate(nextProps) {
        return JSON.stringify(nextProps.units) !== JSON.stringify(this.props.units);
    }
    render() {
        let result = [];
        this.props.units.forEach((unit, index) =>
            (
                result.push(
                    <Unit key={ unit['id'] }
                          unitId={ unit['id'] }
                          text={ unit['text'] }
                          importance={ unit['importance'] }
                          continuous={ unit['continuous'] }
                          index={ index }
                    />
                )
            )
        );
        return result;
    }
}
class Column extends Component {
    render() {
        return (
            <div className={'column column-' + this.props.colId}>
                <div className="column-title">
                    <h2>{ this.props.colName }</h2>
                </div>
                <Droppable droppableId={ this.props.colId } >
                    {(provided, snapshot) => (
                        <div ref={ provided.innerRef }
                             { ...provided.droppableProps }
                            className={'column-droppable-area'.concat(
                                snapshot.isDraggingOver ? ' draggedOver' : ''
                            )}
                        >
                            <UnitList units={this.props.units}/>

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
    onDragStart = start => {
        // console.log('onDragStart');
        // console.log(start);
    };
    onDragEnd = result => {
        console.log(result);
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
            <div className="outer-app-container">
                <h1>Weird drag'n'drop Todo-list application</h1>
                <div className={'columns-container'}>
                    <DragDropContext
                        onDragStart={ this.onDragStart }
                        onDragEnd={ this.onDragEnd }
                    >
                        {
                            this.state['columnOrder'].map(col => {
                                const column = this.state['columns'][col];
                                const units = [];
                                this.state.units.forEach(unit => {
                                    for (let unitIdIndex in column.unitIds) {
                                        if (unit.id === column.unitIds[unitIdIndex]) {
                                            units[unitIdIndex] = unit;
                                        }
                                    }
                                });
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
            </div>
        )
    }
}

export default DraggableList;