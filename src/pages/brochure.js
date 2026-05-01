import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import { mq } from "../components/grid"

const pages = [
  "/Pag%201.png",
  "/Pag%202.png",
  "/Pag%203.png",
  "/Pag%204.png",
  "/Pag%205.png",
]

const BrochurePage = () => {
  return (
    <Layout>
      <Wrapper>
        <Document>
          {pages.map((src, i) => (
            <img key={i} src={src} alt={`Página ${i + 1}`} />
          ))}
        </Document>
      </Wrapper>
    </Layout>
  )
}

export default BrochurePage

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #e8e8e8;
  min-height: 100vh;
  padding: 60px 0 0;
`

const Document = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    display: block;
  }

  ${mq.md} {
    max-width: 500px;
  }
`
