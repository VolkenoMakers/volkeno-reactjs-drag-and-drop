import React, { useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { applyDrag } from './util/util'
import FeatherIcon from 'feather-icons-react'

export default function Dnd(props) {
  const [isDone, setIsDone] = useState(false)
  
  const getCardPayload = (columnId, index) => {
    return props.data.columns?.filter((p) => p.id === columnId)[0].child[index]
  }

  const getWordPayload = (e, columnId, index) => {
    window.scrollTo({
      top: 80,
      left: 0
    })
    return props.data.words[index]
  }

  const onCardDrop = (columnId, dropResult, index) => {
    $('.colorable').css('background', '')
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      const scene = Object.assign({}, props.data)
      const column = scene.columns.filter((p) => p.id === columnId)[0]
      const columnIndex = scene.columns.indexOf(column)
      const newColumn = Object.assign({}, column)
      newColumn.child = applyDrag(newColumn.child, dropResult, columnIndex)
      scene.columns.splice(columnIndex, 1, newColumn)
      props.setData(scene)
    }
  }

  const onWordDrop = (columnId, dropResult, index) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      // $('.colorable').css('background', 'red')
      const scene = Object.assign({}, props.data)
      const column = scene.words.filter((p) => p.id === columnId)[0]
      const columnIndex = scene.words.indexOf(column)
      let newColumn = applyDrag(scene.words, dropResult, columnIndex)
      scene.words.splice(columnIndex, 1, column)
      scene.words = newColumn

      props.setData(scene)
    }
  }

  const handleShowResult = () => {
    return setIsDone(true)
  }

  const maxChar = 100
  return (
    <div>
      {!isDone && (
        <div className="all">
          <h4 className='m-b-35 fw-600 f-f-work h-theme-dark fs-20'>
            {props.data?.name}.
          </h4>
          <p className='m-b-25 fw-600 f-f-work text-dark fs-16'>
            Mots proposés :{' '}
          </p>

          <div className='m-t-10'>
            <div
              className='row gfa-dnd-container'
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            >
              {props.data.words.length
                ? shuffleArray(props.data.words).map((p, i) => {
                    return (
                      <Container
                        key={p?.id}
                        groupName='1'
                        onDrop={(e) => onWordDrop(p?.id, e, i)}
                        getChildPayload={(e) => getWordPayload(e, p?.id, i)}
                        dragClass='card-ghost'
                        dropClass='card-ghost-drop'
                        autoScrollEnabled={true}
                      >
                        <Draggable key={p?.id}>
                          <div className='dnd-custom animated'>{p?.text}</div>
                        </Draggable>
                      </Container>
                    )
                  })
                : null}
            </div>
          </div>
          <div className='dnd-colonnes'>
            <div className='row '>
              {props.data.columns
                ? props.data?.columns.map((column, i) => {
                    return (
                      <div
                        className={
                          props.data.columns.length <= 2
                            ? 'col-md-6 m-b-10'
                            : 'dnd-cln m-b-10'
                        }
                        key={column?.id}
                      >
                        <p className='dnd-response-left-head'>{column?.text}</p>
                        <div className='colorable'>
                          <Container
                            groupName='1'
                            autoScrollEnabled={true}
                            onDrop={(e) => onCardDrop(column?.id, e)}
                            getChildPayload={(i) =>
                              getCardPayload(column?.id, i)
                            }
                            dropPlaceholder={{
                              animationDuration: 150,
                              showOnTop: true,
                              className: 'drop-preview'
                            }}
                            dropPlaceholderAnimationDuration={200}
                          >
                            {column.child.map((card, i) => {
                              return (
                                <Draggable
                                  className='dnd-custom-response'
                                  key={card?.id}
                                >
                                  <div
                                    className='draggable-item'
                                    key={card?.id}
                                  >
                                    {isDone &&
                                      (column?.id !== card?.column ? (
                                        <FeatherIcon
                                          color='red'
                                          icon='x-circle'
                                          className='check'
                                        />
                                      ) : (
                                        <FeatherIcon
                                          color='green'
                                          icon='check-circle'
                                          className='check'
                                        />
                                      ))}
                                    <p className='item-text'>
                                      {card?.text.length > maxChar
                                        ? card?.text.substring(0, maxChar) +
                                          ' . . .'
                                        : card?.text}
                                    </p>
                                  </div>
                                </Draggable>
                              )
                            })}
                          </Container>
                        </div>
                      </div>
                    )
                  })
                : null}
            </div>
          </div>
        </div>
      )}

      {/* Result  */}
      {isDone && (
        <div>
          <h4 className='m-b-35 fw-600 fs-15 f-f-work text-dark reponse-dnd-title'>
            Your response
          </h4>
          <div className='row m-t-50 all-result'>
            {props.data?.columns.map((column, index) => {
              return (
                <div className='col-md-6 m-b-30' key={column?.id}>
                  <p className='dnd-response-left-head'>{column?.text}</p>
                  <div>
                    <div>
                      {column.child.map((card, i) => {
                        return (
                          <div className='dnd-custom-response' key={card?.id}>
                            <div className='draggable-item' key={card?.id}>
                              {column?.id !== card?.column ? (
                                <FeatherIcon
                                  color='red'
                                  icon='x-circle'
                                  className='check'
                                />
                              ) : (
                                <FeatherIcon
                                  color='green'
                                  icon='check-circle'
                                  className='check'
                                />
                              )}

                              <p>{card?.text}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <h4 className='m-b-35 fw-600 fs-15 f-f-work text-dark reponse-dnd-title'>
            Solution
          </h4>
          <div className='row m-t-50'>
            {props.data?.columns.map((item, i) => {
              return (
                <div className='col-md-6 m-b-30' key={item?.id}>
                  <p className='dnd-response-right-head'>{item?.text}</p>
                  <div>
                    <div>
                      {item.words.map((p, index) => {
                        return (
                          <div key={p?.id} className='dnd-custom-response'>
                            <div className='draggable-item'>{p?.text}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
      {/* End Result */}

      {(props.showResult && props.showResult === true) && !props.data.words.length && !isDone ? (
        <div className='row dis-flex justify-content-end'>
          <div className='col-md-3 col-sm-6 m-b-10'>
            <button
              onClick={handleShowResult}
              className='btn-theme dis-flex justify-content-center fw-600'
            >
              Show Result
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function shuffleArray(array) {
  let i = array.length - 1
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
