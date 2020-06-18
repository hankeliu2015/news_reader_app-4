import React from 'react'

export default function StoriesList(props) {
  return (
    <div className={"story-cards"}>
      {/*
        <h4 style={{ borderTop: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}> </h4>
      */}
      <ol>
        {props.loading ? "...Stories Loading" : props.list}
      </ol>
    </div>
  )
}
