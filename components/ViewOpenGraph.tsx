import WhatsApp from './OpenGraph/WhatsApp.tsx'

export default function ViewOpenGraph(){

    return (
        <div class="px-10 w-[400px]">
            <div class="flex items-center  pb-4 ">
<h2 class="uppercase text-[13px] text-primary  pr-4 leading-4 font-semibold">WhatsApp</h2>
            <div class="flex-grow h-px bg-gray-400"></div>
            </div>
            
            <WhatsApp />
        </div>
        
    )
}