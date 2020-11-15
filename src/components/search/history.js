import React from 'react'
import styled from 'styled-components'

const HistoryContainer = styled.div`
  padding: 18px;
`

const HeaderContainer = styled.div`
  overfliw: hidden;
`

const Title = styled.span`
  float: latf;
  font-weight: 400;
  color: #666;
`
const RemoveText = styled.span`
  float: right;
  color: #a7a7a7;
`

const listContaier = styled.span`
  float: right;
  color: #a7a7a7;
`

const RemoveButton = styled.button`
  float: right;
  color: #0cde8b;
  border: 1px solid #0cde8b;
  padding: 3px 5px;
  border-radius: 15px;
`

const KeywordContainer = styled.span``

const Keyword = styled.span`
  font-size: 18px;
  font-weight: 400;
`

function History({ keywords }) {
  return (
    <HistoryContainer>
      <HeaderContainer>
        <Title>최근검색어</Title>
        <RemoveText>전체삭제</RemoveText>
      </HeaderContainer>
      <listContaier>
        {keywords.map(({ id, text }) => {
          return (
            <KeywordContainer key={keyword.id}>{keyword.text}</KeywordContainer>
          )
        })}
      </listContaier>
    </HistoryContainer>
  )
}
export default History
