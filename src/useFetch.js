import axios from 'axios'
import { useEffect, useState } from 'react'


export default function useFetch(url) {
  var [isLoading, setIsLoading] = useState(true)
  var [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      setData(null)
      setIsLoading(true)

      var res = await axios.get(url)

      setData(res.data)
      setIsLoading(false)
    })()
  }, [url])

  return [data, isLoading]
}
