
export const EOM = () => {
    return (
        <div className="max-w-md mx-auto mt-4">
                <div className="bg-white p-4 rounded-md border text-center">
                    <h1 className="font-medium text-2xl font-sans">Employee of the month</h1>
                </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    
}

export default EOM;