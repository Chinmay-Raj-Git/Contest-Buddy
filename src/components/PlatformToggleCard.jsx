import React from 'react'

const PlatformToggleCard = (props) => {

    return (
        <span className="flex flex-row justify-between gap-16">
            <label for=""><img src={`images/${props.platform}.png`} className="inline-block text-sm px-2 mb-1" alt="" />{props.title}</label>
            {/* <!-- TOGGLE SWITCH --> */}
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" id={`platform-${props.platform}`} className="sr-only peer" />
                <div
                    className="relative w-14 h-8 bg-emerald-200 dark:bg-emerald-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-600/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500 dark:peer-checked:bg-emerald-400">
                </div>
            </label>
        </span>
    )
}

export default PlatformToggleCard
