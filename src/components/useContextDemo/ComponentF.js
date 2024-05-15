import React from 'react'
import {UserContext, ChannelContext} from '../../App'

function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel => <div>user: {user}
                                channel: {channel}
                                </div>
                            }
                        </ChannelContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
