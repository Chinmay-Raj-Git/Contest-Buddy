import ContestSelect from "./ContestSelect"
import ReminderSelect from "./ReminderSelect"

const Content = () => {
    return (
        <>
            <h2 className="w-full py-4 px-6 mb-8 mx-8 rounded-xl bg-linear-to-r from-emerald-700 to-green-600 
                    dark:from-slate-800/50 dark:to-slate-800/60 text-center text-3xl text-white">
                Your Preferences
            </h2>
            <div className="flex flex-row justify-center items-start w-full text-xl">
                <ContestSelect />
                <ReminderSelect />
            </div>

        </>
    )
}

export default Content
