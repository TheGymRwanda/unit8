import expertiseList from "/utils/expertiseData";
export default function Expertise() {
    return (
        <section className="flex justify-end mb-11.2 md:mb-33 lg:mb-24">
            <div className="text-xl leading-8 -tracking-lg md:text-2xl">
                <h4 className=" text-muted-300">Expertise</h4>
                <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-y-3 gap-x-6">
                    {expertiseList.map((expertise, index) => (
                        // used width of 70vw (w-70w) to intentionaly flow the text to 70% of the whole screen (wrapper margin included) but only on mobile screens below 400px of width
                        <h5
                            key={index}
                            className="border-b border-muted-100 w-70w xs:w-73 lg:w-1/2"
                        >
                            {expertise}
                        </h5>
                    ))}
                </div>
            </div>
        </section>
    );
}
