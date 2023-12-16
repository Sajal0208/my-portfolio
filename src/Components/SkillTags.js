import React from 'react'
import styled from 'styled-components'


const SkillTags = ({text}) => {
  return (
    <SkillTagsStyled>
        <div className = 'outer-container'>
            {text}
        </div>
    </SkillTagsStyled>
  )
}

const SkillTagsStyled = styled.div`
    .outer-container{
        background-color: var(--primary-color-light);
        padding: .5rem 1rem;
        marginRight: 1rem;
        color: var(--white-color);
        border-radius: 10px;
        font-size: 1rem;
        cursor: pointer;
    }
`

export default SkillTags
