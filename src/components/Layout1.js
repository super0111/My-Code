import { MinNavbar } from './'

export const Layout1 = (props) => {
  return (
    <>
      <MinNavbar />
      <div>
        {props.children}
      </div>
    </>
  )
}