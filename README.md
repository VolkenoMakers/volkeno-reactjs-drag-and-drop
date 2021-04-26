# volkeno-reactjs-drag-and-drop

> This project is a drag and drop page with the ability to see the end result.

[![NPM](https://img.shields.io/npm/v/volkeno-reactjs-drag-and-drop.svg)](https://www.npmjs.com/package/volkeno-reactjs-drag-and-drop) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save volkeno-reactjs-drag-and-drop
```

## Usage

```jsx
import React, { useState } from 'react'

import { VolkenoReactDnd } from 'volkeno-reactjs-drag-and-drop'
import 'volkeno-reactjs-drag-and-drop/src/index.css'

export const Example = () => {
  const [data, setData] = useState({
    
    name: 'Drag and drop',
    child: [
    {
      id: 1,
      text: 'Column 1',
      child: [],
      words: [
        {
          id: 1,
          text: 'word 1',
          column: 1
        },
        {
          id: 2,
          text: 'word 2',
          column: 1
        },
        {
          id: 3,
          text: 'word 3',
          column: 1
        },
        {
          id: 8,
          text: 'word 8',
          column: 1
        }
      ]
    },
    {
      id: 2,
      text: 'Column 2',
      child: [],
      words: [
        {
          id: 4,
          text: 'word 4',
          column: 2
        },
        {
          id: 5,
          text: 'word 5',
          column: 2
        },
        {
          id: 6,
          text: 'word 6',
          column: 2
        },
        {
          id: 7,
          text: 'word 7',
          column: 2
        }
      ]
    }
  ],
    words: [
    {
      id: 1,
      text: 'word 1',
      column: 1
    },
    {
      id: 2,
      text: 'word 2',
      column: 1
    },
    {
      id: 3,
      text: 'word 3',
      column: 1
    },
    {
      id: 4,
      text: 'word 4',
      column: 2
    },
    {
      id: 5,
      text: 'word 5',
      column: 2
    },
    {
      id: 6,
      text: 'word 6',
      column: 2
    },
    {
      id: 7,
      text: 'word 7',
      column: 2
    },
    {
      id: 8,
      text: 'word 8',
      column: 1
    }
  ]
  })
  return (
    <div>
      <VolkenoReactDnd 
      showResult={true} 
      data={data} 
      setData={setData}  
      />
    </div>
  )
}
```
## Configuration - Props

| Property        |   Type   | Default | Description                                                                     |
| --------------- | :------: | :-----: | ------------------------------------------------------------------------------- |
| showResult    | boolean  |  false  | Activate to see the result                                                    |
| data           |  Object  |    -    | object having as child: {name: string,columns: array of object having as child: {id, text, child: array, words:array}, words: array of object having as child: {id, text, colum: id of column}}|                                                           |
| setData        | function |  void   | The function to call to drop a word in a column.|


