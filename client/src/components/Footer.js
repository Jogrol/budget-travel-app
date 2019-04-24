import React from 'react'
import {Paper, Tabs, Tab} from '@material-ui/core'

export default function Footer() {
  return (
    <Paper>
      <Tabs
          value={0}
          textColor="primary"
          centered
        >
          <Tab label="Expenses" />
          <Tab label="Budget" />
      </Tabs>
  </Paper>
  )
}

