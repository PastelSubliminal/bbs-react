import { useState, useCallback } from 'react'

export default function useInput(initText) {
  var [text, setText] = useState(initText)

  var handle = useCallback(function handle(e) {
    setText(e.target.value)
  }, [])

  return {
    value: text,
    onChange: handle,
  }
}
