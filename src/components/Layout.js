import { useState } from "react";
import { Header, Footer, Warning } from './'

export const Layout = (props) => {
  const [ isWarning, setIsWarning ] = useState(true)

  return (
    <>
      {
        isWarning === true ? 
        <Warning isWarning={isWarning} setIsWarning={setIsWarning} /> : ''
      }
      <Header />
      <div>
        {props.children}
      </div>
      <Footer />
    </>
  )
}