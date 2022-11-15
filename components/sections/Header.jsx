import CustomLink from "../ui/CustomLink";

export default function Header() {
    return (
        <section className="mt-6.6">
            {/* header  */}
            <div className="flex gap-5.5 flex-col text-2.5xl font-normal leading-7 ">
                {/* header log */}
                <div className="">
                    Ape Unit
                </div>
                {/* header content */}
                <div className="">
                    Unit➇ is a pioneering technology and marketing 
                    services company that creates end-to-end digital
                    experiences for brands such as 
                    <span className="text-primary-300">
                        {" "}Google, Philips, Audi, Twitch, Patagonia, eBay {" "}
                    </span> 
                    and more. Its team
                    of 2,500+ digital specialists across 30+ locations
                    on 5 continents delivers pioneering work on a global
                    scale with a boutique culture. <span> <CustomLink text="Contact us" styles={""} /> </span>
                </div>
            </div>
        </section>    
    )
}