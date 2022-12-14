import Blog from "../../ui/Blog";

export default function RenderPost({ blogs }) {
    return(
        <>
            {blogs.map((value, index) => {
                let { date, title, description, tags } = value;
                return (
                    <Blog key={index} date={date} title={title} description={description}>
                        {tags.map((value, index) => (
                            <div
                                key={index}
                                className="bg-muted-50 rounded-2.3xl px-2.5 py-01"
                            >
                                <p className="text-lg font-normal leading-4.2 text-muted-200 py-0.1 -tracking-lg">{value}</p>
                            </div>
                        ))}
                    </Blog>
                );
            })}
        </>
    )
}