import React from 'react'
import FormLayout from '../shared/form-layout'
function TaskModal(props) {
  return (
    <FormLayout open={props.open} setOpen={props.setOpen} handleSubmit={props.handleCreate}>
      
    </FormLayout>
  )
}

export default TaskModal