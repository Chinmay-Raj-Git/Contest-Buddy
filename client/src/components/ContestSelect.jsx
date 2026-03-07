import React from 'react'
import PlatformToggleCard from './PlatformToggleCard'

const ContestSelect = () => {
    return (
        // <!-- ------------CONTEST PLATFORMS SELECTION------------ -->
        <div className="mx-4 my-4 text-2xl rounded-xl bg-linear-to-r from-emerald-100 to-green-100 dark:from-slate-900/30 dark:to-emerald-900/70 dark:text-white drop-shadow-xl w-full">

            <h2 className="text-3xl mt-4 mx-4 mb-1 text-emerald-800 dark:text-emerald-500 font-medium">Platforms</h2>
            <hr className="border border-emerald-800 dark:border-emerald-700 mx-4 mb-4 drop-shadow-md" />

            <div className="flex flex-col justify-center gap-8 p-6 text-xl">
                <PlatformToggleCard platform={"leetcode"} title={"LeetCode"} />
                <PlatformToggleCard platform={"codechef"} title={"CodeChef"} />
                <PlatformToggleCard platform={"codeforces"} title={"CodeForces"} />
                <PlatformToggleCard platform={"geeksforgeeks"} title={"GeeksForGeeks"} />
                <PlatformToggleCard platform={"hackerrank"} title={"HackerRank"} />
                <PlatformToggleCard platform={"topcoder"} title={"TopCoder"} />
            </div>

            {/* <!-- ------------END OF CONTEST PLATFORMS SELECTION------------ --> */}
        </div>
    )
}

export default ContestSelect
