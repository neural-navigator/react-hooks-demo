import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchHook() {
    const [ post, setPost ] = useState({})
    const [ id, setId ] = useState(1)
    const [ idFromButtonClick, setIdFromButtonClick ] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button type="button" onClick={handleClick}>ClickMe!</button>
        <div key={post.id}>{post.title}</div>
    </div>
  )
}

export default DataFetchHook
