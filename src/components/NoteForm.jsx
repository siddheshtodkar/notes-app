import { useState } from "react";


const NoteForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Work',
        priority: 'Medium',
        description: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <form>
            <div className="mb-4">
                <label htmlFor="title" className="block font-semibold">Title</label>
                <input type="text" name="title" id="title" value={formData.title} className="w-full p-2 border rounded-lg" onChange={handleChange} />
            </div>
            <div className="mb-4">
                <label htmlFor="category" className="block font-semibold">Category</label>
                <select name="category" id="category" value={formData.category} className="w-full p-2 border rounded-lg" onChange={handleChange}>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Ideas">Ideas</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="priority" className="block font-semibold">Priority</label>
                <select name="priority" id="priority" value={formData.priority} className="w-full p-2 border rounded-lg" onChange={handleChange}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block font-semibold">Description</label>
                <textarea name="description" id="description" value={formData.description} className="w-full p-2 border rounded-lg" onChange={handleChange}></textarea>
            </div>
            <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">Add Note</button>
        </form>
    );
}

export default NoteForm;