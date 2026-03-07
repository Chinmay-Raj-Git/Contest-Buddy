import React from 'react'

const ReminderSelect = () => {
    return (
        <div className="mx-4 my-4 text-2xl rounded-xl bg-linear-to-r from-green-100 to-green-100 dark:from-emerald-900 dark:to-emerald-900/90 dark:text-white drop-shadow-xl w-full">

            <h2 className="text-3xl mt-4 mx-4 mb-1 text-emerald-800 dark:text-emerald-400 font-medium">Alert Settings</h2>

            <hr className="border border-emerald-800 dark:border-emerald-600 mx-4 mb-4 drop-shadow-md"/>
                <div className="flex flex-col justify-center gap-8 p-6 text-xl">
                    <span className="flex flex-row justify-between gap-16">
                        <label for="">An Hour Before</label>
                        {/* <!-- TOGGLE SWITCH --> */}
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"/>
                                <div
                                    className="relative w-14 h-8 bg-emerald-200 dark:bg-emerald-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-600/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500 dark:peer-checked:bg-emerald-400">
                                </div>
                        </label>
                    </span>

                    <span className="flex flex-row justify-between gap-16">
                        <label for="">30 Mins Before</label>
                        {/* <!-- TOGGLE SWITCH --> */}
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"/>
                                <div
                                    className="relative w-14 h-8 bg-emerald-200 dark:bg-emerald-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-600/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500 dark:peer-checked:bg-emerald-400">
                                </div>
                        </label>
                    </span>

                    <span className="flex flex-row justify-between gap-16">
                        <label for="">10 Mins Before</label>
                        {/* <!-- TOGGLE SWITCH --> */}
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"/>
                                <div
                                    className="relative w-14 h-8 bg-emerald-200 dark:bg-emerald-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-600/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500 dark:peer-checked:bg-emerald-400">
                                </div>
                        </label>
                    </span>

                </div>
        </div>
    )
}

export default ReminderSelect
