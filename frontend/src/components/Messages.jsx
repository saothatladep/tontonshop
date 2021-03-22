import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import React, {useState} from 'react'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import CloseIcon from '@material-ui/icons/Close'


const Messages = (props) => {
  const {severity, message} = props
  const [open, setOpen] = useState(true)

  return (
    <div>
      <Collapse in={open}>
        <Alert
          severity={severity}
          variant='filled'
          size='large'
          style={{ fontSize: '1.5rem' }}
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Collapse>
    </div>
  )
}

export default Messages
