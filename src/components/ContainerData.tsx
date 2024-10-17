type DataItem = {
    title: string,
    description: string
}

export default function ContainerData({title, description} : DataItem) {
    return (
        <div className="flex-1 min-w-36">
            <h3 className="text-[2.5rem] font-semibold leading-none text-center">{title}</h3>
            <p className="opacity-70 uppercase text-center">{description}</p>
        </div>
    )
}