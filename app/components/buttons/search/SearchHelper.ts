import { useGlobalContext } from "@/app/Context/Context"

// const {setSearchName} = useGlobalContext()

const ChangeHandler = (name: string) => {
    console.log(name)
    // setSearchName(name)
}
export default ChangeHandler