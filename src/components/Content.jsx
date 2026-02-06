import ContestSelect from "./ContestSelect"

const Content = () => {
    return (
        <>
            <h2 class="w-full py-4 px-6 mb-8 mx-8 rounded-xl bg-linear-to-r from-emerald-700 to-green-600 
                    dark:from-slate-800/50 dark:to-slate-800/60 text-center text-3xl text-white">
                Your Preferences
            </h2>

            <ContestSelect />

        </>
    )
}

export default Content
