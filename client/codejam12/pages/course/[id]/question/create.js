import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Create = () => {
    const router = useRouter()
    const { id } = router.query

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState("")

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    const handleTagsChange = (e) => {
        setTags(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            title: title,
            content: content,
            tags: tags,
            student_id: 1,
            course_id: id,
        }
        console.log(body)
        fetch(`http://localhost:8000/question`, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

    return (
        <div>
            <form className="flex flex-col justify-center items-center content-center min-h-screen">
                <label className="text-lg font-bold">
                    <div className="flex flex-col items-center">

                        Title:
                        <input className="p-[5px] outline-black rounded-lg border-black border-2 m-5" type="text" name="title" defaultValue={''} onChange={handleTitleChange} />
                    </div>
                    <div className="flex flex-col items-center">
                        Content:

                        <textarea className="p-[5px] outline-black rounded-lg border-black border-2 m-5" type="textarea" name="content" defaultValue={''} onChange={handleTitleChange} />
                    </div>
                    <div className="flex flex-col items-center">

                        Tags:
                        <input className="p-[5px] outline-black rounded-lg border-black border-2 m-5" type="text" name="tags" defaultValue={''} onChange={handleTitleChange} />
                    </div>
                </label>
                <input type="submit" onSubmit={handleSubmit} />
            </form>
        </div>
    )
}

export default Create