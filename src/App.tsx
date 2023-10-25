import CompanyDetail from "./props/CompanyDetail"
import TBButton from "./props/TBButton"

function App() {

  const hello = () => {
    alert("Print!!")
  }


  return <>
    <TBButton title="Hello" />
    <CompanyDetail companyName="Tatilbudur" print={hello} />
    {/* <ProductDetail name="IPhone" price={5000} description="lorem ipsum"/> */}
    {/* <UserDetail name="Aykut" surname="Arslan" age={20} points={[2, 3, 1, 4]} /> */}
  </>

}





export default App