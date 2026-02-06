import React from 'react'

const ContestSelect = () => {
    return (
        // <!-- ------------CONTEST PLATFORMS SELECTION------------ -->
        <div class="mx-4 my-4 text-2xl rounded-xl bg-linear-to-r from-emerald-100 to-green-100 dark:from-slate-900/50 dark:to-emerald-900/70 dark:text-white drop-shadow-xl w-full">

            <h2 class="text-3xl mt-4 mx-4 mb-1 text-emerald-800 dark:text-emerald-500 font-medium">Platforms</h2>
            <hr class="border border-emerald-800 dark:border-emerald-700 mx-4 mb-4 drop-shadow-md" />

            <div class="flex flex-col justify-center gap-8 p-6 text-xl">
                <span class="flex flex-row justify-between gap-16">
                    <label for=""><img src="images/leetcode.png" class="inline-block text-sm px-2 mb-1" alt="" />LeetCode</label>
                    {/* <!-- TOGGLE SWITCH FOR LeetCode --> */}
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                            class="relative w-14 h-8 bg-emerald-200 dark:bg-emerald-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-600/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500 dark:peer-checked:bg-emerald-400">
                        </div>
                    </label>

                </span>

                <span class="flex flex-row justify-between gap-16">
                    <label for=""><img src="images/codechef.png" class="inline-block text-sm px-2 mb-1" alt="" />CodeChef</label>

                    {/* <!-- TOGGLE SWITCH FOR CodeChef --> */}
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                            class="relative w-14 h-8 bg-emerald-200 dark:bg-emerald-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-600/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500 dark:peer-checked:bg-emerald-400">
                        </div>
                    </label>

                </span>

                <span class="flex flex-row justify-between gap-16">
                    <label for=""><img src="images/codeforces.png" class="inline-block text-sm px-2 mb-1"
                        alt="" />CodeForces</label>
                    {/* <!-- TOGGLE SWITCH FOR CodeForces --> */}
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                            class="relative w-14 h-8 bg-emerald-200 dark:bg-emerald-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-600/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500 dark:peer-checked:bg-emerald-400">
                        </div>
                    </label>
                </span>

                <span class="flex flex-row justify-between gap-16">
                    <label for=""><img src="images/geeksforgeeks.png" class="inline-block text-sm px-2 mb-1"
                        alt="" />GeeksForGeeks</label>
                    {/* <!-- TOGGLE SWITCH FOR GFG --> */}
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                            class="relative w-14 h-8 bg-emerald-200 dark:bg-emerald-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-600/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500 dark:peer-checked:bg-emerald-400">
                        </div>
                    </label>
                </span>

                <span class="flex flex-row justify-between gap-16">
                    <label for=""><img src="images/hackerrank.png" class="inline-block text-sm px-2 mb-1"
                        alt="" />HackerRank</label>
                    {/* <!-- TOGGLE SWITCH FOR HackerRank --> */}
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                            class="relative w-14 h-8 bg-emerald-200 dark:bg-emerald-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-600/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500 dark:peer-checked:bg-emerald-400">
                        </div>
                    </label>
                </span>

                <span class="flex flex-row justify-between gap-16">
                    <label for=""><img src="images/topcoder.png" class="inline-block text-sm px-2 mb-1" alt="" />TopCoder</label>
                    {/* <!-- TOGGLE SWITCH FOR  TopCoder--> */}
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                            class="relative w-14 h-8 bg-emerald-200 dark:bg-emerald-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-600/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500 dark:peer-checked:bg-emerald-400">
                        </div>
                    </label>
                </span>
            </div>

            {/* <!-- ------------END OF CONTEST PLATFORMS SELECTION------------ --> */}
        </div>
    )
}

export default ContestSelect
