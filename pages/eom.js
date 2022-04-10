import Image from "next/image";
import { Toolbar } from "../components/Toolbar";
import styles from "../styles/Eom.module.css";

export const EOM = ({employee}) => {
    return (
        <div className="w-full">
            <Toolbar/>
            <div className={styles.container}>
                    <div className="bg-white p-4 rounded-md text-center">
                        <h1 className="font-bold text-3xl font-sans">Employee of the month</h1>
                        <div className="mt-2">
                            <Image
                            loader={myLoader}
                            src={employee.avatar} 
                            alt="Avatar" width={200} 
                            height={200} 
                            className="rounded-full"
                            />

                            <h6 className="text-lg font-bold">{employee && employee.name}</h6>
                            <h6 className="text-sm font-medium">{employee && employee.designation}</h6>

                        </div>
                    </div>
            </div>
        </div>
    )
}

export const myLoader = ({src,width,quality}) => {
    return `${src}?w=${width}&q={q || 75}`
}

export const getServerSideProps = async () => {
    try{
        const apiDataResponse = await fetch("https://my-json-server.typicode.com/devleinad/nextnews/eom");
        const result = await apiDataResponse.json();
        return {
            props:{
                employee:result
            }
        }

    }catch{
        console.log('An error occured!');
    }
}

export default EOM;