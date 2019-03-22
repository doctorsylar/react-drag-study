'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import DraggableList from './app/draggable-list';
import initialData from './js/init-data';

// JS CODE

// Rendering RoomList component
ReactDOM.render(<DraggableList initData={initialData} />, document.querySelector('#draggable-sortable-list'));