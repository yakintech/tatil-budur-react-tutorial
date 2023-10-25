import React from 'react'

function CompanyDetail(props: Props) {

  const { companyName, print, country } = props
  
  return (<>
    <h1>Name: {companyName}</h1>
    <h1>Country: {country}</h1>
    <button onClick={print}>Print</button>
  </>)
}

export default CompanyDetail


type Props = {
  companyName?: string
  print: () => void
  country: string
}

CompanyDetail.defaultProps = {
  country: 'Türkiye'
}