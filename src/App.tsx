import ObjectArraySample from "./state/ObjectArraySample"
import ObjectArraySample2 from "./state/ObjectArraySample2"
import StateArray from "./state/StateArray"


function App() {

  const hello = () => {
    alert("Print!!")
  }


  return <>
  <ObjectArraySample2/>
    {/* <ObjectArraySample /> */}
    {/* <StateArray/> */}
    {/* <TBButton title="Hello" />
    <CompanyDetail companyName="Tatilbudur" print={hello} /> */}
    {/* <ProductDetail name="IPhone" price={5000} description="lorem ipsum"/> */}
    {/* <UserDetail name="Aykut" surname="Arslan" age={20} points={[2, 3, 1, 4]} /> */}
  </>

}

export default App