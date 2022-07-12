import React from 'react'
import Header from '../components/Header'
import { Paper } from '@material-ui/core'
import Container from '@material-ui/core/Container'

export default function About(props) {
  return (
    <div>
        <Header page="about" theme={props.theme}/>
        <Paper className={props.classes.aboutCont}>
            Image
            <div>
                aa
            </div>
        </Paper>
        
        </div>
  )
}
