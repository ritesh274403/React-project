import Button from "./Button"

const TopBar = () => {
  return (
    <div className="top-bar">
        <img src='/logo.jpeg' alt="Logo Image"></img>
        <input placeholder="Search For brand, catogery, coupon"></input>
        <Button className="multi-button" name = {'Login/Signup'}></Button>
    </div>
  )
}

export default TopBar