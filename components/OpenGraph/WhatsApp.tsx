import Image from "$live/std/ui/components/Image.tsx"


export default function WhatsApp() {
    return (
        <div class="w-[330px] h-[280px] rounded-lg overflow-hidden box-border ">
            <Image
                src="https://uploads.metropoles.com/wp-content/uploads/2022/02/25141718/Grogu-Baby-yoda.jpg"
                alt="Grogu"
                class="w-full h-[174px] object-cover"
                decoding="async"
                loading="lazy"
            />
            <div class="text-[15px] bg-secondary p-3 leading-5">
                <h3 class="text-secondary"> Website</h3>
                <p class="text-common">A page's meta description tag is meant to give the user an idea of the content that exists within the page.</p>
            </div>
        </div>
    )}