export default function DineCard({RestData})
{
    return(
        <>
            <div className="max-w-sm flex-none rounded-2xl shadow-2xl">
                <a target="_blank" href={RestData.cta.link}>
                    <div className="relative">
                        <img className="w-80 h-50 object-cover rounded-2xl"
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestData?.info?.mediaFiles[0]?.url}
              alt="Restaurant"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
                        <p className="absolute bottom-2 left-2 text-xl text-white z-10 font-bold overflow-ellipsis pr-4">
                            {RestData.info.name}
                        </p>
                        <p className="absolute bottom-2 right-2 text-xl text-white z-10">
                            {RestData.info.rating.value}
                        </p>
                    </div>
                    
                    
                </a>
                <div>
                    <div className="relative">
                <p className="mt-2 text-gray-500 font-mono text-sm absolute top-0 left-0 bg-white z-10">
                        {RestData.info.cuisines.join(" ~ ")}</p>
                        <p className="mt-2 text-gray-500 font-mono text-sm absolute top-0 right-0 bg-white z-10">
                        {RestData.info.costForTwo}</p>
                        
                
                
                <p className="mt-2 text-gray-500 font-mono text-sm absolute top-7 left-0 bg-white z-10">
                        {RestData.info.locality}</p>
                        <p className="mt-2 text-gray-500 font-mono text-sm absolute top-7 right-0 bg-white z-10">
                        {RestData.info.locationInfo.distanceString}</p>
                        </div>
                </div>
                </div>
                
        </>
    )
}