import React, { useState } from 'react'

import { VolkenoReactDnd } from 'volkeno-reactjs-drag-and-drop'
import 'volkeno-reactjs-drag-and-drop/src/index.css'

const App = () => {
  const [data, setData] = useState({
    name: 'Drag and drop',
    columns: [
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
          },
          {
            id: 9,
            text: 'word 9',
            column: 1
          },
          {
            id: 10,
            text: 'word 10',
            column: 1
          },
          {
            id: 11,
            text: 'word 11',
            column: 1
          },
          {
            id: 12,
            text: 'word 12',
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
          },
          {
            id: 13,
            text: 'word 13',
            column: 2
          },
          {
            id: 14,
            text: 'word 14',
            column: 2
          },
          {
            id: 15,
            text: 'word 15',
            column: 2
          },
          {
            id: 16,
            text: 'word 16',
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
      },
      {
        id: 9,
        text: 'word 9',
        column: 1
      },
      {
        id: 10,
        text: 'word 10',
        column: 1
      },
      {
        id: 11,
        text: 'word 11',
        column: 1
      },
      {
        id: 12,
        text: 'word 12',
        column: 1
      },
      {
        id: 13,
        text: 'word 13',
        column: 2
      },
      {
        id: 14,
        text: 'word 14',
        column: 2
      },
      {
        id: 15,
        text: 'word 15',
        column: 2
      },
      {
        id: 16,
        text: 'word 16',
        column: 2
      }
    ]
  })
  return <VolkenoReactDnd showResult={true} data={data} setData={setData} />
}

export default App
