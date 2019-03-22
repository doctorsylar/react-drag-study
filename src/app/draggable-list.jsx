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
            data: this.props.data
        };
        console.log(this.props);
    }
    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (destination.droppableId === source.droppableId &&
        destination.index === source.index ) {
            return;
        }

    };
    render() {
        return (
            <div className={'columns-container'}>
                <DragDropContext
                    onDragEnd={ this.onDragEnd }
                >
                    {
                        this.state.data['columns'].map(col => {
                            let colId = col['colId'];
                            let units = [];
                            this.state.data['units'].map(unit => {
                                if (unit['col'] === colId) {
                                    units.push(unit);
                                }
                            });
                            return (
                                <Column key={ colId }
                                        colId={ colId }
                                        colName={ col['colName'] }
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