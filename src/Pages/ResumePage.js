import React from 'react'
import Resume from '../Components/Resume'
import Skills from '../Components/Skills'
import { MainLayout } from '../styles/Layout'

const ResumePage = () => {
    return (
        <MainLayout>
            <Skills/>
            <Resume/>
        </MainLayout>
    )
}

export default ResumePage
