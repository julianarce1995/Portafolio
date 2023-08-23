'use client'

import Character from '../../../components/Character'
import React from 'react'

export default function page({ params }) {
  return (
      <Character id={params.id}/>
  )
}
