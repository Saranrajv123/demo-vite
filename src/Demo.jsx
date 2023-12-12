const Demo = ({ data }) => {
    const handleOnClick = (item) => {
        console.log("event", item)
    }
    return (
        <>
            <ul>
            {/* eslint-disable-next-line react/prop-types */}
            {data.map(item => {
                return (
                    <li key={item?.id} onClick={() => handleOnClick(item)}>{item.title}</li>
                )
            })}
            </ul>
        </>
    )
}

export default Demo;