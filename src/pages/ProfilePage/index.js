import React, { useEffect, useState } from 'react'
import { getUserById } from '../../api'

function Profile() {

  const [data, setData] = useState({})

  useEffect(() => {
    getUserById('61018900aed8ba40cce4d414')
      .then(res => {
        setData(res)
      })
  }, [])

  console.log(data)
  return (
    <div>
      Profile
      <div>
        {data?.userData?.name}
      </div>
    </div>
  )
}

export default Profile
