import '../css/style.css';
import React, {Component} from 'react';
import { DragDropContext, Draggable, Droppable, resetServerContext } from 'react-beautiful-dnd';

class Column extends Component {
    render() {
        return this.props.colName;

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
    render() {
        // console.log(this.state.data['columns']);
        return (
            <div>
                {/*{*/}
                    {/*this.state.data.columns.map((colId) => {*/}
                        {/*let colName = this.state.data.columns[colId];*/}
                        {/*let units = [];*/}
                        {/*for (let unit of this.state.data.units) {*/}
                            {/*if (unit['col'] === colId) {*/}
                                {/*units.push(unit);*/}
                            {/*}*/}
                        {/*}*/}
                        {/*return <Column key={colId} colName={colName} units={units}/>*/}
                    {/*})*/}
                {/*}*/}
                Cool react app
            </div>
        )
    }
}

export default DraggableList;