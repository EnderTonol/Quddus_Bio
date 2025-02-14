import React,{Suspense,lazy} from "react";
const Profile = lazy(()=> import("./components/Profile"))
import { Spinner } from "@heroui/react";
function App(){
    return(
      <Suspense fallback={<div className="h-[100vh] w-full flex items-center justify-center bg-jaguar-950"><Spinner color="secondary" size="lg"/></div>}>
      <Profile />
      </Suspense>
    )
}
export default App;