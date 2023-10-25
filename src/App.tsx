import StateArray2 from "./state/StateArray2"


function App() {

  const hello = () => {
    alert("Print!!")
  }


  return <>
    <StateArray2 />
    {/* <TBButton title="Hello" />
    <CompanyDetail companyName="Tatilbudur" print={hello} /> */}
    {/* <ProductDetail name="IPhone" price={5000} description="lorem ipsum"/> */}
    {/* <UserDetail name="Aykut" surname="Arslan" age={20} points={[2, 3, 1, 4]} /> */}
  </>

}

export default App