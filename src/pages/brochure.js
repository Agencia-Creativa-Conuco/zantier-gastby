import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"

const BrochurePage = () => {
  return (
    <Layout>
      <Wrapper>
        <PdfEmbed src="/brochure.pdf" title="Brochure Zantier" />
      </Wrapper>
    </Layout>
  )
}

export default BrochurePage

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  box-sizing: border-box;
`

const PdfEmbed = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`
