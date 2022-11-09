<script>
export default {

}
</script>

<template>
    <div className="place-content-center dw overflow-hidden z-0 rounded-full relative p-3 lg:w-[50rem]">
        <form role="form" className="relative flex z-50 bg-white rounded-full">
            <input type="text" placeholder="Search Movies"
                className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none" />
            <button
                className="bg-red-700 text-white rounded-full font-semibold px-8 py-4 hover:bg-red-400 focus:bg-red-600 focus:outline-none">
                <svg class="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
            </button>
        </form>
        <div className="glow glow-1 z-10 bg-red-900 absolute"></div>
        <div className="glow glow-2 z-20 bg-red-700 absolute"></div>
        <div className="glow glow-3 z-30 bg-stone-900 absolute"></div>
        <div className="glow glow-4 z-40 bg-red-600 absolute"></div>
    </div>
</template>
